import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';

import { colors } from '../global/styles';



const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true)

    return (
        <View style={styles.container} >
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }} >
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true)
                            }}
                        >
                            <View
                                style={{
                                    ...styles.deliveryBtn, backgroundColor: delivery ? colors.buttons : colors.grey5,
                                }}
                            >
                                <Text style={styles.deliveryText} >
                                    Delivery
                                </Text>
                            </View>

                        </TouchableOpacity  >

                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false)
                            }}
                        >
                            <View
                                style={{
                                    ...styles.deliveryBtn, backgroundColor: delivery ? colors.grey5 : colors.buttons,
                                }}
                            >
                                <Text style={styles.deliveryText} >
                                    Pick Up
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.filterView} >

                    <View style={styles.addressView}
                    >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 10

                        }}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ marginLeft: 5 }}> 516 Road</Text>
                        </View>

                        <View style={styles.clockView}>
                            <Icon
                                type="material-community"
                                name="clock-time-four"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ marginLeft: 5 }}> Now</Text>
                        </View>

                    </View>

                    <View style={{

                    }}>
                        <Icon
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={26}
                        />

                    </View>

                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>
                        Categories
                    </Text>
                </View>


            </ScrollView>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    deliveryBtn: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,

    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,
    },
    filterView: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },
    clockView: {
        flexDirection: 'row',
        backgroundColor: colors.cardBackground,
        alignItems: 'center',
        marginLeft: 20,
        borderRadius: 15,
        paddingHorizontal: 7,
        marginRight: 20
    },
    addressView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingHorizontal: 33,
        paddingVertical: 7,
        justifyContent: "space-between"
    },
    headerText: {
        color: colors.grey2,
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,

    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3
    }

})

export default HomeScreen;