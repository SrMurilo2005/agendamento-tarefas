import {View, Text, StyleSheet} from 'react-native';

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.status == 'concluido') {
        statusColor = 'green';
    }

    return (
        <View style={styles.container}>
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