import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
//import { hairlineWidth } from 'react-native/types_generated/Libraries/StyleSheet/StyleSheetExports'
const{height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#f4f8f7'
    },
    logo:{
        height:height*0.2,
        width:width*0.45
    },
    textStyle:{
        fontFamily:'Roboto-Bold',
        fontSize:width*0.055,
        marginVertical:height*0.015
    }
})

export default styles