import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { getData } from '../storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import TarefaItem from '../components/TarefaItem';
import Ionicons from '@expo/vector-icons/FontAwesome6';


export default function Home(){

    const navigation = useNavigation()

    const [ tasks, setTasks ] = useState(null)
    const [ isLoaded, setIsLoaded ] = useState(true)

    const loadData = async () => {
        const data = await getData();
        setTasks(data);
        setIsLoaded(!isLoaded)
    }

    // Executa ao carregar a pagina
    useEffect(() => {
        if (isLoaded) {
            loadData();
        }
    }, [isLoaded]);

    return (
        <View style={styles.container}>
            
            <View style={styles.cabecalho}>
                            
                <Text style={styles.texto}>
                    ABRIL / 2025
                </Text>
                <TouchableOpacity style={styles.icone}
                onPress={() => { alert("abriu configuração")}}>
                <Ionicons name="gear" size={37.3} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
                {
                    tasks != null && tasks.map((item, index) => {
                        return(
                            <TarefaItem
                                key={index}
                                nome={item.nome}
                                status={item.status}
                                data={item.data}
                                categoria={item.categoria}
                                task={item}
                                setIsLoaded={setIsLoaded}
                            />
                        )
                    })
                }            
            </ScrollView>
            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate("NovaTarefa")}}>
            <Ionicons name="add" size={43.2} color="white" />
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
   
});