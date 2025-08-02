import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

const { height, width } = Dimensions.get('screen')

const CompletedOrders = () => {
    const [orders, SetOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch('https://wpportal.recyberapps.com/fathimath-test.json');
                const json = await response.json();
                if (json.code === 'SUCCESS') {
                    const data = json.orders.filter(order => order.status === 'completed' || order.status === 'cancelled')
                    SetOrders(data);
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
            style={[styles.FlatListContainer, {
                backgroundColor: item.status === 'completed' || item.status === 'cancelled' ? '#EDF1E8' : '#FFF'
            }]}
        >
            <Text style={styles.IdText}>
                #{item.schedule_id}
            </Text>

            <View style={styles.nameRow}>
                <Text style={styles.nameText}>
                    {item.customer_name} - #{item.sx_customer_number}
                </Text>

            </View>
            <View
                style={styles.ZoneRow}
            >
                <View style={{ flexDirection: 'row', marginVertical: height * 0.003 }}>
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
            {item.status === 'completed' ?
                <View style={styles.completedContainer}>
                    <View style={styles.tickBg}>
                        <Image source={require('../../assets/icons/tick1.png')} style={styles.tickIcon} />
                    </View>
                    <Text style={styles.completedText}>Delivered at {item.expected_arrival_time}</Text>
                </View> :
                <View style={styles.completedContainer}>
                    <View style={styles.cancelBg}>
                        <Image source={require('../../assets/icons/cross-mark.png')} style={styles.cancelIcon} />
                    </View>
                    <Text style={styles.cancelledText}>Cancelled</Text>
                </View>}
        </View>
    )
    return (
        <View>
            <Text style={styles.container}>Completed/Cancelled ({orders.length})</Text>
            <FlatList
                data={orders}
                renderItem={renderItemContainer}
            />
        </View>
    )
}

export default CompletedOrders