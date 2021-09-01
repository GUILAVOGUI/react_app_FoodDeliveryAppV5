import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';

import RestaurantHeader from './RestaurantHeader'
import { colors, fonts } from '../global/styles'
import { restaurantsData } from '../global/Data'


const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;


const RestaurantHomeScrreen = ({ navigation, route }) => {

    const { id, restaurant } = route.params;

    const [routes] = useState([
        { key: 'first', title: 'MENU' },
        { key: 'second', title: 'INFO' },
        { key: 'third', title: 'REVIEWS' },
        { key: 'fourth', title: 'GALLERY' },
    ])

    const [index, setIndex] = useState(0);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: colors.cardbackground
            }}
            tabStyle={styles.tabStyle}
            scrollEnabled={true}
            style={styles.tab}
            labelStyle={styles.taLabel}
            contentContainerStyle={styles.tabContainer}
        />
    )

    const UpdateRoute1 = () => {
        return (
            <View>
                <Text>
                    Some tab content
                </Text>

            </View>
        )
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <RestaurantHeader id={id} navigation={navigation} />
                    {restaurantsData[id].discount &&
                        <View style={styles.view1}>
                            <Text style={styles.text1}>
                                GET {restaurantsData[id].discount}% OFF ON TOTAL FOOD
                            </Text>

                        </View>
                    }
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.text2}> {restaurantsData[id].restaurantName} </Text>
                            <Text style={styles.text3}> {restaurantsData[id].foodType} </Text>
                            <View style={styles.viiew4}>
                                <Icon
                                    name='star'
                                    type="material-community"
                                    color={colors.grey3}
                                    size={15}
                                />
                                <Text style={styles.text4}>
                                    {restaurantsData[id].averageReview}
                                </Text>
                                <Text style={styles.text5}>
                                    {restaurantsData[id].numberOfReview}
                                </Text>
                                <Icon
                                    name='map-marker'
                                    type="material-community"
                                    color={colors.grey3}
                                    size={15}
                                />
                                <Text style={styles.text5}>
                                    {restaurantsData[id].farAway}mi away
                                </Text>
                            </View>
                        </View>
                        <View style={styles.view5}>
                            <Text style={styles.text6}>Collect-In</Text>
                            <View style={styles.view7}>
                                <Text style={styles.text7}>
                                    {restaurantsData[id].collectTime}
                                </Text>
                                <Text style={styles.text8}>
                                    min
                                </Text>
                            </View>
                        </View>
                        <View style={styles.view8}>
                            <Text style={styles.text6}>Deliver-In</Text>
                            <View style={styles.view9}>
                                <Text style={styles.text9}>
                                    {restaurantsData[id].deliveryTime}
                                </Text>
                                <Text style={styles.text11}>
                                    min
                                </Text>
                            </View>
                        </View>
                    </View>


                </View>
                <View style={styles.view10}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition='top'
                    />

                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 18
    },
    view1: {
        width: "100%",
        padding: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    text1: {
        color: "green",
        fontSize: 14,
        fontWeight: "bold"
    },
    view2: {
        flexDirection: "row",
        flex: 1,
        marginBottom: 5,
        marginHorizontal: 10,
        justifyContent: "space-between"
    },
    view3: {
        flex: 8
    },
    text2: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.grey1
    },
    text3: {
        fontSize: 15,
        color: colors.grey3
    },
    viiew4: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 5
    },
    text4: {
        // fontFamily: fonts.android.boldItalic,
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : fonts.ios.regular,
        fontSize: 13,
        color: colors.grey3,
        marginLeft: 2
    },
    text5: {
        // fontFamily: fonts.android.boldItalic,
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : fonts.ios.regular,
        fontSize: 13,
        color: colors.grey3,
        marginLeft: 2,
        marginRight: 5
    }, text6: {
        // fontFamily: fonts.android.boldItalic,
        fontFamily: Platform.OS === 'android' ? 'sans-serif' : fonts.ios.regular,
        fontSize: 13,
        color: colors.grey3,
        marginLeft: 0
    },
    view5: {
        flex: 3,
        alignItems: 'center'
    },
    text6: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.grey1
    },
    view7: {
        width: 40,
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-around'
    },
    text7: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.bold,
        marginTop: 5
    },
    text8: {
        fontSize: 13,
        color: colors.bold,
        marginBottom: 5
    },
    view8: {
        flex: 3,
        alignItems: 'center'
    },
    text9: {
        fontSize: 15,
        color: 'white',
        fontWeight: "bold"
    },
    view9: {
        width: 40,
        height: 40,
        backgroundColor: colors.buttons,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-around'

    },
    text10: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.cardbackground,
        marginTop: 5
    },
    text11: {
        fontSize: 13,
        color: colors.cardbackground,
        marginBottom: 5
    },
    view10: {
        elevation: 10,
        backgroundColor: colors.cardbackground,
    },
    view11: {
        backgroundColor: colors.buttons,
        height: 50,
        alignContent: 'center',
        marginBottom: 0
    },
    view12: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tet12: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 2
    },
    text13: {
        paddingHorizontal: 3,
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.cardbackground,

    },
    tab: {
        paddingTop: 0,
        backgroundColor: colors.buttons,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tabContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    taLabel: {
        fontWeight: 'bold',
        color: colors.cardbackground,
    }, tabStyle: {
        width: SCREEN_WIDTH / 4,
        maxHeight: 45
    }
})

export default RestaurantHomeScrreen
