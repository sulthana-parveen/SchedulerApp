import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'

const{height,width}=Dimensions.get('screen')

const OngoingOrders = () => {
    const [ongoingOrders,SetOngoingOrders]=useState([])
const[loading,setLoading ]= useState(true)

useEffect(() =>{
    const fetchOrder = async() =>{
        try{
            const response =await fetch('https://wpportal.recyberapps.com/fathimath-test.json');
            const json = await response.json();
            if (json.code === 'SUCCESS'){
                const ongoing = json.orders.filter(order => order.status ==='ongoing')
                SetOngoingOrders(ongoing);
                
            }else{
                console.log('Not Success')
            }
        }catch(error){
           console.error('error:',error)
        }finally{
            setLoading(false)
        }
        
    };
    fetchOrder();
})

const renderItemContainer=({item}) => (
        <LinearGradient
        colors={['#FFE290', '#FFBF0D']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
      style={styles.FlatListContainer}
    >
      <Text style={styles.IdText}>
        #{item.sx_ordernumber}
      </Text>
      <Text style={styles.nameText}>
        {item.customer_name} - #{item.sx_customer_number}
      </Text>
      <View
        style={styles.ZoneRow}
      >
        <View style={styles.worldRow}>
          <Image
            source={require('../../assets/icons/world1.png')}
            style={styles.IconWorld}
          />
          <Text style={styles.ZoneText}>
            {item.zone_name}
          </Text>
        </View>
        <View style={styles.ZoneRow}>
          <Image source={require('../../assets/icons/truck1.png')} style={styles.IconTruck}/>
          <Text style={styles.timeText}>
            {item.truck_name}
          </Text>
        </View>
      </View>
      <Text style={styles.ongoingStatus}>
        {item.status_text}
      </Text>
    </LinearGradient>
)
  return (
    <View>
      <Text style={{
        fontSize:width*0.045,
        fontWeight:'bold',
        paddingLeft:width*0.05
      }}>Ongoing</Text>
      <FlatList
      data={ongoingOrders}
      renderItem={renderItemContainer}
      scrollEnabled={false}
      />
    </View>
  )
}

export default OngoingOrders