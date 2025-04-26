import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

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
                    nome do texto
            </Text>
            <TextInput
                    style={{borderWidth: 1, fontSize: 20 }}>
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
            marginTop: 10,
        marginLeft: 3.5
        }
   
})