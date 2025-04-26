import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import TarefaItem from '../componentes/TarefaItem';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.cabecalho}>
                            
                <Text style={styles.texto}>
                    ABRIL / 2025
                </Text>
                <TouchableOpacity style={styles.icone} onPress={() => {alert ("abriu configuração")}}>
                    <Text style={styles.engrenagem}>⚙️</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
            <TarefaItem 
                nome="Tarefa 1"
                status="a cumprir"
                data="24/04/2025"
                categoria="reunião"
            />
            <TarefaItem 
                nome="Tarefa 2"
                status="concluido"
                data="24/04/2025"
                categoria="reunião"
            />
            <TarefaItem 
                nome="Tarefa 3"
                status="a cumprir"
                data="24/04/2025"
                categoria="reunião"
            />
            <TarefaItem 
                nome="Tarefa 4"
                status="concluido"
                data="30/04/2025"
                categoria="reunião"
             />
             <TarefaItem 
                nome="Tarefa 5"
                status="a cumprir"
                data="26/05/2025"
                categoria="reunião"
            />
            <TarefaItem 
                nome="Tarefa 6"
                status="concluido"
                data="31/05/2025"
                categoria="reunião"
             />
             <TarefaItem 
                nome="Tarefa 7"
                status="a cumprir"
                data="13/06/2025"
                categoria="reunião"
            />
            <TarefaItem 
                nome="Tarefa 8"
                status="concluido"
                data="19/06/2025"
                categoria="reunião"
             />
            </ScrollView>
            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate("NovaTarefa")}}>
                
                <Text style={styles.emoji}>+</Text>
            </TouchableOpacity>
     </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1
    },
    botao : {
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 13,
        right: 10,
    },
    emoji : {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: -12
    },
    
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
   
});