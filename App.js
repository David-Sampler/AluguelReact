import React from 'react'
import {Text, View,StatusBar} from 'react-native'
import Home from './src/pages/Home'
import Router from './src/router'

export default function App(){
  
  return(
    <> 
       <StatusBar backgroundColor="blue" />
      

        <Router/>
    </>
  )

}