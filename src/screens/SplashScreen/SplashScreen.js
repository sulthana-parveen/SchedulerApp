
import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        const timeout = setTimeout(() =>{
        navigation.replace('DashBoard')
    },2000);
    return () => clearTimeout(timeout);
    },[])
  return (
    <View style={styles.mainView}>
    
     <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />
     <Text style={styles.textStyle}>SCHEDULER</Text>
    </View>
  )
}

export default SplashScreen