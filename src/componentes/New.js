import React from 'react'
import { View, Text, ViewComponent, Image, StyleSheet } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native'

export default function New(props) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>

            <Image source={props.cover} style={styles.cover} />

            <View style={styles.contante}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.badge}>NOVO</Text>
            </View>

            <Text style={styles.descricao}>{props.descricao}</Text>

            <View style={styles.descricao}>

                <Text style={styles.desc}>R$ 12.000</Text>
                <AntDesign name="pluscircle" size={30} color="black" />
            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        
        width: 190,
        height: 250,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 5,
        elevation: 2,

        marginTop: 10,
        marginRight: 10,
        marginLeft: 2,
        marginBottom: 10
    },

    cover: {
        width: 160,
        height: 110,
        borderRadius: 10
    },
    dot: {
        marginHorizontal: 7,
        borderRadius: 4,
        width: 6,
        height: 6,
        backgroundColor: 'red'
    },
    contante: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "right"

    },
    badge: {
        marginHorizontal: 10,
        color: "#FFF",
        borderRadius: 4,
        fontSize: 8,
        backgroundColor: "red",
        padding: 2
    },
    descricao: {
        justifyContent: 'space-between',

        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 2
    },
    desc: {

        fontWeight: 'bold',
        fontSize: 20
    }

})