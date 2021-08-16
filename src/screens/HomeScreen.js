import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';



const HomeScreen = () => {

    return (
        <View style={styles.container} >
            <HomeHeader />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1

    }

})

export default HomeScreen;