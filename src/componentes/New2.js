import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'


export default function New2(props) {
    return (
        <View style={styles.container}>
           <Image source={props.cover} style={styles.cover}/>
           <View>
               <Text style={styles.desc}>{props.desc}</Text>
               <Text style={styles.prince}>R$ {props.prince}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width: 200,
        height: 100,
        elevation: 2,
        borderRadius: 4,
        paddingHorizontal: 15,
        marginTop: 10,
        backgroundColor: '#FFF',
        marginRight: 10,
        marginLeft: 2,
        marginBottom: 10,
        alignItems:'center'

    },
    cover:{
        width:60,
        height:80,
        borderRadius:5

    },
    desc:{
        width:130,
        fontSize:10,
        paddingHorizontal:18
    },
    prince:{
        textAlign:'center',
        marginTop:15,
        marginHorizontal: 20,
        color: "#FFF",
        borderRadius: 4,
        fontSize: 12,
        backgroundColor: "blue",
        padding: 2
    }
})