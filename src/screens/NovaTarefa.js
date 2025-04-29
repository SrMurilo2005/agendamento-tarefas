import { View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function NovaTarefa() {

    return(
        <View>
            <View style={styles.cabecalho}>
                         
                <Text style={styles.texto}>
                    Adicionar Tarefa
                </Text>
                <TouchableOpacity style={styles.icone} onPress={() => {alert ("abriu configuração")}}>
                    <Text style={styles.engrenagem}>⚙️</Text>
                </TouchableOpacity>
                
            </View>
            <Text style={styles.nometarefa}>
                    Nome da Tarefa:
            </Text>
            <TextInput
                    style={{borderWidth: 1, fontSize: 14, backgroundColor: 'white', borderRadius: 10, borderColor: 'gray', height: 30}}>
                </TextInput>
            <Text style={styles.categoriatarefa}> Categoria Tarefa: </Text>
            <Picker style={{borderWidth: 1, fontSize: 14, backgroundColor: 'white', borderRadius: 10, borderColor: 'gray', height: 30}}>
            <Picker.Item label="Estudo" value="estudo" />
            <Picker.Item label="Trabalho" value="jtrabalho" />
            <Picker.Item label="Reunião" value="reunião"/>
            </Picker>
            
                <Text style={styles.destarefa}>
                    Descrição da Tarefa:
            </Text>
            <TextInput
                    placeholder = 'Value'
                    style={{borderWidth: 1, fontSize: 14, backgroundColor: 'white', borderRadius: 10, color: 'gray', height: 80, padding: 15, borderColor: 'gray',
                        alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                </TextInput>
                <Text style={{
                     marginTop: 15,
                    marginLeft: 70,
                    textAlign:'left'}}>
                Date</Text>
                    <TextInput
                    placeholder = 'mm/dd/yyyy'
                    style={{borderWidth: 2, fontSize: 14, backgroundColor: 'white', borderRadius: 10, height: 40, padding: 13, marginLeft: 15,
                        alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    </TextInput>
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
        width: 30,
        height: 30,
        borderRadius: 20,
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
  })