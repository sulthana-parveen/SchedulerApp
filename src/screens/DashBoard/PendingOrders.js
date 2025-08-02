import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

const { height, width } = Dimensions.get('screen')

const PendingOrders = () => {
    const [pendingOrders, SetPendingOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch('https://wpportal.recyberapps.com/fathimath-test.json');
                const json = await response.json();
                if (json.code === 'SUCCESS') {
                    const pending = json.orders.filter(order => order.status === 'pending')
                    SetPendingOrders(pending);
                    //console.warn(ongoingOrders)
                } else {
                    console.log('Not Success')
                }
            } catch (error) {
                console.error('error:', error)
            } finally {
                setLoading(false)
            }

        };
        fetchOrder();
    })

    const renderItemContainer = ({ item }) => (
        <View
            style={[styles.FlatListContainer,{backgroundColor:'#FFF9E7'}]}
        >
            <Text style={styles.IdText}>
                #{item.schedule_id}
            </Text>

            <View style={styles.nameRow}>
                <Text style={styles.nameText}>
                    {item.customer_name} - #{item.sx_customer_number}
                </Text>
                <Text style={styles.nameText}>
                    OE - #{item.sx_ordernumber}
                </Text>
            </View>
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
                    <Image source={require('../../assets/icons/truck1.png')}
                        style={styles.IconTruck} />
                    <Text style={styles.ZoneText}>
                        {item.truck_name}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.timeRow}>
                    <Text style={styles.timeText}>ETA {item.eta}</Text>
                    <Image source={require('../../assets/icons/clock1.png')}
                        style={styles.IconTime} />
                    <Text style={styles.timeText}>{item.service_time}</Text>
                </View>
                <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>{item.status_text}</Text>
                </View>
            </View>
        </View>
    )
    return (
        <View>
            <Text style={styles.container}>pending ({pendingOrders.length})</Text>
            <FlatList
                data={pendingOrders}
                renderItem={renderItemContainer}
                scrollEnabled={false}
            />
        </View>
    )
}

export default PendingOrders