import { View, Text ,Image, StatusBar, Dimensions, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import OngoingOrders from './OngoingOrders'
import PendingOrders from './PendingOrders'
import CompletedOrders from './CompletedOrders'
import styles from './styles'

const{height,width}= Dimensions.get('window')
const DashBoard = () => {
  return (
    <SafeAreaView style={styles.mainView}>
    <ScrollView 
    style={styles.scrollView}
    contentContainerStyle={styles.contentContainer}>
        <StatusBar 
        backgroundColor='#fffff'
        barStyle={'light-content'}/>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
       marginVertical:height*0.06,
       marginHorizontal:width*0.06
      }}>
              <Image  source={require('../../assets/icons/menu.png')}
              style={
                styles.menuIcon
              }/>
              <View style={{
                flexDirection:'row'
              }}>
                  <Image source={require('../../assets/icons/logo.png')} style={{height:height*0.024,width:width*0.055,marginHorizontal:width*0.015}}/>
                  <Text style={{
                    fontFamily:'roboto-bold',
                    fontSize:width*0.037,
                    fontWeight:'bold'
                  }}>SCHEDULED TASK</Text>
              </View>
               <Image  source={require('../../assets/icons/bell.png')}
               style={styles.bellIcon}/>
            </View>
        <OngoingOrders/>
        <PendingOrders/>
        <CompletedOrders/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default DashBoard