import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Swi from '../componentes/Swiper'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Stars from 'react-native-stars' 
import { ScrollView } from 'react-native-gesture-handler';

export default function Details() {
    return (

        <View style={styles.container}>
            <View style={styles.swipe}>
                <Swi />
            </View>

            <View style={styles.headerContante}>
                <View style={{width:'65%'}}>
                    <Text style={styles.house}>
                         Casa de praia
                    </Text>
                </View>
                <View style={{width:'35%',alignItems:'center'}}>
                    <Text style={styles.ava}>
                       Avaliação
                    </Text>
                    <View style={{}}>
                        <Stars 
                        default={5} 
                        count={4}
                        half={true}
                        starSize={25}
                        fullStar={<Icons name="star" size={25} style={styles.mystars}/>}
                        emplyStar={<Icons name="star-outline" size={25} style={styles.mystars}/>}
                        halfStar={<Icons name="star-half-full" size={25} style={styles.mystars}/>}
                    
                        />
                    </View>
                </View>
            </View>
            
            <View style={styles.painel}>
                <Text style={styles.price}>R$ 1.500</Text>
                <Text style={styles.desk}>Casa totalmente segura com cameras</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:20}}>
                   <Image source={require('../assets/house3.jpg')} style={styles.img} /> 
                   <Image source={require('../assets/house1.jpg')} style={styles.img} /> 
                   <Image source={require('../assets/house5.jpg')} style={styles.img} /> 
                   <Image source={require('../assets/house4.jpg')} style={styles.img} />
            </ScrollView>
        </View>

  

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    swipe: {
        width: '100%',
        height: 300,
        flexDirection: 'row'
    },
    headerContante:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        width:'100%',
        marginTop:20
    },
    house:{
        marginTop:10,
        fontSize:24,
        fontWeight:'bold'
    },
    ava:{
        fontSize:10,
        
    },
    mystars:{
        color:'#E7A74e'
    },
    painel:{
        margin:20
    },
    price:{
        fontSize:24
    },
    desk:{
        fontSize:12
    },
    img:{
        width:200,
        height:200,
        marginLeft:5,
        marginRight:5,
        
    }
})