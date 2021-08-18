import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions, FlatList
} from 'react-native';
import { Icon, withBadge } from 'react-native-elements';

import { colors, parameters } from '../global/styles';
import HomeScreen from '../screens/HomeScreen';



const HomeHeader = () => {

    const BadgeIcon = withBadge(0)(Icon)


    return (
        <View style={styles.header} >
            <View
                style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15 }}
            >
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.cardBackground}
                    size={32}
                />

            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{ color: colors.cardBackground, fontSize: 19, fontWeight: 'bold' }}
                >
                    Express Food App
                </Text>
            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={35}
                    color={colors.cardBackground}
                />

            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10

    }

})

export default HomeHeader;