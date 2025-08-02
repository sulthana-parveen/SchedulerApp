import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        paddingLeft: width * 0.05
    },
    FlatListContainer: {
       
        padding: width * 0.02,
        marginHorizontal: width * 0.045,
        marginVertical: height * 0.01,
        borderRadius: width * 0.03,
        paddingLeft: width * 0.045,
        paddingRight:width*0.04
    },
    IdText: {
        fontWeight: 'bold',
        fontSize: width * 0.04,
        marginVertical: height * 0.003
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    nameText: {
        fontSize: width * 0.035,
        marginVertical: height * 0.003
    },
    ZoneRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height * 0.004,
    },
    IconWorld: {
        height: height * 0.018,
        width: width * 0.038,
        marginTop: height * 0.001
    },
    IconTruck: {
        height: height * 0.016,
        width: width * 0.053,
        marginTop: height * 0.0015
    },
    ZoneText: {
        fontSize: height * 0.0135,
        marginLeft: width * 0.015
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeRow: {
        flexDirection: 'row',
        backgroundColor: '#FFEBB4',
        padding: width * 0.007,
        borderRadius: width * 0.03
    },
    timeText: {
        color: '#000000',
        fontSize: width * 0.025,
        margin: width * 0.01
    },
    statusContainer:{
        backgroundColor:'#4C721D',
        padding:width*0.007,
        borderRadius:width*0.03
    },
    statusText:{
        color:'#ffffff',
        fontSize:width*0.025,
        margin:width*0.01
    },
    IconTime: {
        height: height * 0.016,
        width: width * 0.034,
        marginTop: height * 0.005
    },
    completedText:{
        color:'#4C721D',
        fontSize:width*0.025,
        margin:width*0.01
    },
    tickBg:{
        backgroundColor:'#4C721D',
        borderRadius:width*0.03
    },
    completedContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    tickIcon:{
        height:height*0.02,
        width:width*0.045
    },
     cancelIcon:{
        height:height*0.02,
        width:width*0.045
    },
    cancelBg:{
        backgroundColor:'red',
        borderRadius:width*0.03
    },
    ongoingStatus:{
         color: '#4C721D',
          fontSize: width * 0.035, 
            fontWeight: '800' 
    },
    worldRow:{
        flexDirection: 'row', 
        marginVertical: height * 0.003
    },
    bellIcon:{
        height:height*0.027,
        width:width*0.06
    },
    menuIcon:{
        height:height*0.02,
        width:width*0.055
    },
    contentContainer:{
        paddingBottom: height * 0.06
    },
    scrollView:{
        flex:1
    },
    mainView:{
        flex:1
    },
    cancelledText:{
        color:'red',
        fontSize:width*0.025,
        margin:width*0.01
    },
})

export default styles