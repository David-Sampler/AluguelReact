import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Details from './pages/Details'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Router() {
    const Stack = createStackNavigator()

    return (

        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: "Aluguel",
                        headerRight: () => {

                            <TouchableOpacity style={{ marginRight: 30 }}>
                                <AntDesign name="pluscircle" size={30} color="blue" />

                            </TouchableOpacity>
                        }
                    }} />
                <Stack.Screen name="Detalhes" component={Details} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}