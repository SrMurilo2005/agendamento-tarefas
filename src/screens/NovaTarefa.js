import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import MaskInput from "react-native-mask-input";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { addData, updateData } from "../storage/async-storage";
import Ionicons from '@expo/vector-icons/FontAwesome6';


export default function NovaTarefa(props) {

    const task = props.route.params

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('prova');
    const [descricao, setDesc] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        if (task != undefined){
            setNome(task.nome)
            setCategoria(task.categoria)
            setDesc(task.descricao)
            setData(task.data)
        }
    }, [task])

    const handlerSave = async () => {
        const tarefa = {
            nome: nome,
            categoria: categoria,
            data: data,
            descricao: descricao,
            status: "a fazer",
            id: task?.id
        };

        if (nome.trim() == '') {
            alert('campo nome não preenchido')
        }
        else if (descricao.trim() == '') {
            alert("Campo descrição não válido.")
        }
        else if (data.trim() == '') {
            alert("Campo data não válido.")
        }
        else if (categoria.trim() == '') {
            alert("Campo categoria não válido.")
        }
        else {
            if (task != undefined) {
                await updateData (tarefa)
                alert("Tarefa atualizado!")
                
            }
            else {
                await addData(tarefa)
            alert("Voce completou nova seu tarefa!")
            }
            navigation.navigate('Home')            
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>

                <Text style={styles.texto}>{task ? 'Editar' : 'Adicionar'} Tarefa </Text>
                <TouchableOpacity style={styles.icone}
                onPress={() => { alert("abriu configuração")}}>
                    <Ionicons name="gear" size={37.5} color="black" />
                </TouchableOpacity>

            </View>
            <ScrollView>
                <Text style={styles.nometarefa}>
                    Nome da Tarefa:
                </Text>
                <TextInput
                    style={{ borderWidth: 1, fontSize: 12, backgroundColor: 'white', borderRadius: 5, borderColor: 'gray', height: 35 }}
                    value = {nome}
                    onChangeText= {texto => setNome(texto)}>   
                </TextInput>
                <Text style={styles.categoriatarefa}> Categoria Tarefa: </Text>
                <Picker style={{ borderWidth: 1, fontSize: 12, backgroundColor: 'white', borderRadius: 5, borderColor: 'gray', height: 35 }}>
                    <Picker.Item label="Estudo" value="estudo" />
                    <Picker.Item label="Trabalho" value="trabalho" />
                    <Picker.Item label="Reunião" value="reunião" />
                    <Picker.Item label="Tarefa" value="tarefa" />
                </Picker>

                <Text style={styles.destarefa}>
                    Descrição da Tarefa:
                </Text>
                <TextInput
                    placeholder='Value'
                    multiline
                    numberOfLines={3}
                    style={{
                        borderWidth: 1, fontSize: 14, backgroundColor: 'white', borderRadius: 5, height: 80, padding: 15, borderColor: 'gray',
                        alignItems: 'center', justifyContent: 'center'
                    }}
                    value = {descricao}
                    onChangeText= {texto => setDesc(texto)}>
                </TextInput>
                <Text style={{ marginTop: 15, marginLeft: 40, textAlign: 'left', color: 'purple' }}>
                    Date</Text>
                <MaskInput
                    placeholder='dd/mm/aaaa'
                    style={{
                        borderWidth: 2, fontSize: 14, backgroundColor: 'white', borderRadius: 5, height: 40, padding: 13, marginLeft: 15,
                        alignItems: 'center', justifyContent: 'center', borderColor: 'purple'
                    }}
                    value = {data}
                    onChangeText= {texto => setData(texto)}
                    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}>
                </MaskInput>
                <View style={{flexDirection:'row', justifyContent:'right'}}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <Text style={{ marginRight: 20, padding: 13, textAlign: 'right', color: 'purple', justifyContent: 'right'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {handlerSave()}}>
                        <Text style={{ marginRight: 20, padding: 13, textAlign: 'right', color: 'purple', justifyContent: 'right'}}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: 'white',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold'
    },
    icone: {
        backgroundColor: 'gray',
        width: 38,
        height: 39,
        borderRadius: 30,
        position: 'absolute',
        right: 15
    },
    engrenagem: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 0
    },
    nometarefa: {
        marginTop: 15,
        marginLeft: 2.5,
    },
    categoriatarefa: {
        marginTop: 10,
        marginLeft: 2.5,
    },
    destarefa: {
        marginTop: 15,
        marginLeft: 4.5,
    },
    container: {
        flex: 1
    }
})