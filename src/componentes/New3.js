import React from 'react'
import {View,Text,ImageBackground,StyleSheet} from 'react-native'

export default function New3({url,text,desc}){
    return(
        <ImageBackground source={url} style={styles.contaner} blurRadius={9}>
              <View>
                  <Text style={[styles.text,styles.Shadow]}>{text}</Text>
                  <Text style={[styles.descr,styles.Shadow]}>{desc}</Text>
              </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contaner:{
        width:200,
        height:120,
        marginTop:10,
        elevation:2,
        borderRadius:20,
        marginRight:5,
        opacity:1,
        backgroundColor:'#fff',
       
    },
    text:{
        padding:14,
        color:"#ffff",
        fontWeight:'bold'
    },
    descr:{
        fontSize:22,
        paddingHorizontal:15,        
        color:"#ffff",

    },
    Shadow:{
            textShadowOffset:{width:1,height:2},
            textShadowRadius:3,
            textShadowColor:"#000"
    }
})