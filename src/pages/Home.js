import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign';

import Icon from 'react-native-vector-icons/FontAwesome';
import New from '../componentes/New'
import New2 from '../componentes/New2'
import New3 from '../componentes/New3'

import {useNavigation} from '@react-navigation/native'

export default function Home() {
    
    const navigation = useNavigation()

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FFF'}}>

            <View style={styles.header}>

                <View style={styles.inputArea}>
                    <Icon name="search" size={20} color="black" />
                     
                    <TextInput placeholder="o que está procurando?" style={styles.input} />
                </View>

            </View>

            <View style={styles.contanter}>              
                <Text style={styles.text}>Principal</Text>                 
            </View>

           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
                <New onPress={()=>navigation.navigate('Detalhes')}  title="Casa em Salinas" descricao="Casa nova e ampla com cetrais" cover={require('../assets/house1.jpg') }/>
                <New onPress={()=>navigation.navigate('Detalhes')}  title="Rio de Janeiro" descricao="Piscina e campo de futebol" cover={require('../assets/house2.jpg')}/>
                <New onPress={()=>navigation.navigate('Detalhes')}title="Ananindeua" descricao="4 quartos, sala e cozinha" cover={require('../assets/house3.jpg')}/>
                <New onPress={()=>navigation.navigate('Detalhes')}title="Belém" descricao="4 quartos, sala e cozinha" cover={require('../assets/house4.jpg')}/>
           </ScrollView>

           <View style={styles.contanter}>              
                <Text style={styles.text}>Proximo de você</Text>                 
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}} >
                <New2 desc="Sala ampla e centrais de ar" prince="2.000" cover={require('../../src/assets/house2.jpg')}/>
                <New2 desc="Sala ampla e centrais de ar" prince="2.000" cover={require('../../src/assets/house1.jpg')}/>
                <New2 desc="Sala ampla e centrais de ar" prince="2.000" cover={require('../../src/assets/house4.jpg')}/>
                <New2 desc="Sala ampla e centrais de ar" prince="2.000" cover={require('../../src/assets/house5.jpg')}/>
            </ScrollView>

            
           <View style={styles.contanter}>              
                <Text style={styles.text}>Dicas do dia</Text>                 
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
                <New3 url={require('../../src/assets/house5.jpg')} text="Casa Mobiliada" desc="R$ 1.200"/>
                <New3 url={require('../../src/assets/house2.jpg')} text="Casa Mobiliada" desc="R$ 1.200"/>
                <New3 url={require('../../src/assets/house1.jpg')} text="Casa Mobiliada" desc="R$ 1.200"/>
            </ScrollView>


        </ScrollView>
    )
}


const styles = StyleSheet.create({
    header: {
        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        
        marginVertical: 20,
        paddingHorizontal: 20
    },
    inputArea: {
        flexDirection: "row",
        paddingHorizontal: 15,
        margin: 5,
        elevation: 3,
        backgroundColor: "#fff",
        width: '98%',
        alignItems: "center",

        borderRadius: 20
    },
    input: {
        paddingHorizontal: 5
    },
    text: {
        paddingHorizontal: 15,
        fontSize: 25,
        fontWeight: "bold"
    },
    contanter: {
        width:'100%',
    }
})
