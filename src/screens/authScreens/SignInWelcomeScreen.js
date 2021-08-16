import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from "react-native-animatable"
import Swiper from 'react-native-swiper';

import { colors, parameters, title } from '../../global/styles';


const SignInWelcomeScreen = ({ navigation }) => {

    return (

        <View style={{ flex: 1 }} >
            <View
                style={{
                    flex: 3,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 20,
                    paddingTop: 20
                }} >
                <Text
                    style={{
                        fontSize: 26,
                        color: colors.buttons,
                        fontWeight: 'bold'
                    }}
                >
                    DISCOVER RESTAURANTS
                </Text>

                <Text
                    style={{
                        fontSize: 26,
                        color: colors.buttons,
                        fontWeight: 'bold'
                    }}
                >
                    IN YOUR AREA
                </Text>

            </View>

            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper autoplay={true}  >
                    <View style={styles.slide1} >
                        <Image
                            source={{ uri: 'https://www.kids-world-travel-guide.com/images/SouthAfrica_food-2.png' }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide2} >
                        <Image
                            source={{ uri: 'https://vibrantwestafricancuisine.com/wp-content/uploads/2019/04/IMG_0547.jpg' }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide3} >
                        <Image
                            source={{ uri: 'https://eturbonews.com/wp-content/uploads/2018/07/indian20food.jpg' }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                </Swiper>
            </View>

            <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 55 }}>

                <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate('SignInScreen')

                        }}
                    />
                </View>

                <View style={{ marginHorizontal: 20, marginVertical: 20 }} >
                    <Button
                        title="Create an Account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>





        </View>

    )
}


const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BB09'
    }, createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20,
        borderColor: colors.buttons


    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3

    }

})

export default SignInWelcomeScreen;