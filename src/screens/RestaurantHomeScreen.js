import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import RestaurantHeader from './RestaurantHeader'


const RestaurantHomeScrreen = ({ navigation, route }) => {

    const { id, restaurant } = route.params;


    return (
        <View>
            <RestaurantHeader id={id} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RestaurantHomeScrreen
