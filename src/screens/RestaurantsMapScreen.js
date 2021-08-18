import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';



export default function RestaurantMapScreen({ navigation }) {

    return (
        <View>
            <Header
                title="Restaurant Map Screen"
                type='arrow-left'
                navigation={navigation}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Restaurant Map Screen</Text>
            </View>

        </View>

    )
}