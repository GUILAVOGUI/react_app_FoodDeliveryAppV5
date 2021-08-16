import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from "react-native-animatable"


import { colors, parameters, title } from '../../global/styles';
import Header from '../../components/Header';



const SignInScreen = ({ navigation }) => {

    const [textInput2Focus, setTextInput2Focus] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View  >
            <Header
                title="My Account"
                type='arrow-left'
                navigation={navigation}
            />

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title} >
                    Sign-In
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }} >
                <Text style={styles.text1} > Pease enter the email and Password </Text>
                <Text style={styles.text1} > Registerd with your account </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="Email"
                    ref={textInput1}
                />
            </View>

            <View style={styles.TextInput2}>
                <Animatable.View
                    animation={textInput2Focus ? "" : "fadeInRight"}
                    duration={400}
                >
                    <Icon
                        name="lock"
                        iconStyle={{ color: colors.grey3 }}
                        type="material"
                    />

                </Animatable.View>
                <TextInput
                    style={{ width: "80%" }}
                    placeholder="Password"
                    ref={textInput2}
                    onFocus={() => {
                        setTextInput2Focus(false)
                    }}
                    onBlur={() => {
                        setTextInput2Focus(true)
                    }}
                />
                <Animatable.View
                    animation={textInput2Focus ? "" : "fadeInLeft"}
                    duration={400}
                >
                    <Icon
                        name="visibility-off"
                        iconStyle={{ color: colors.grey3 }}
                        type="material"
                    />

                </Animatable.View>
            </View>

            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }} >
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }} >Forgot Password ?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }} >
                    OR
                </Text>
            </View>

            <View>
                <SocialIcon
                    title="Sign in with Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => {

                    }}
                />
            </View>

            <View>
                <SocialIcon
                    title="Sign in with Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => {

                    }}
                />
            </View>

            <View style={{ marginLeft: 20, marginTop: 20 }} >
                <Text style={{ ...styles.text1 }} > New on XpressFood</Text>
            </View>


            <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }} >
                <Button
                    title="Create an Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>




        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize: 16
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingVertical: 7,
        paddingLeft: 10
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center"
    },
    SocialIcon: {
        borderRadius: 12,
        height: 50,
        marginHorizontal: 20
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20,


    },
    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3

    }



})

export default SignInScreen;