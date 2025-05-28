import {View, Text, StyleSheet,TouchableOpacity,} from 'react-native';
import Ionicons from '@expo/vector-icons/FontAwesome6';
import { removeData } from '../storage/async-storage';

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.status == 'concluido') {
        statusColor = 'green';
    }

    const handleDelete= async () => {
        await removeData(props.task)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleDelete()} style={{fontSize: 20, position: 'absolute', right: 20, bottom: 35}}>
                <Ionicons name="delete-left" size={25} color="red" />
            </TouchableOpacity>
            <View style= {styles.status}>
                <Text style={styles.titulo}>{props.nome}</Text>
                <Text style={{...styles.titulo1, backgroundColor: statusColor}}>{props.status}</Text>
            </View>
            <Text style={styles.data}>{props.data}</Text>
            <Text style={styles.categoria}>categoria - {props.categoria}</Text>
            
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        padding: 15,
   
    },
    status: {
        flexDirection: 'row'
    },
    titulo1: {
        color: 'white',
        backgroundColor: 'orange',
        textAlign: 'center',
        width: 150,
        height: 30,
        marginLeft: 100,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
 
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBotton: 10
    },
    data: {
        marginTop: 5,
        marginLeft: 3.5
    },
    categoria: {
        marginTop: 8,
        borderBottomWidth: 1
    },
    container1: {
        width: '100%',
        height: 100,
        padding: 15,
   
    },
    status1: {
        flexDirection: 'row'
    },
    titulo3: {
        color: 'white',
        backgroundColor: 'green',
        textAlign: 'center',
        width: 150,
        height: 30,
        marginLeft: 100,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'center',
    },
    titulo2: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    data1: {
        marginTop: 5,
        marginLeft: 3.5
    },
    categoria1: {
        marginTop: 8,
        borderBottomWidth: 1
    }
});