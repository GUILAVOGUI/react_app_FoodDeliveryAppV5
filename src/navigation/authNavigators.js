import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';



import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';

const AuthStack = createStackNavigator();


const AuthStackNav = () => {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <AuthStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </AuthStack.Navigator>

    )
}




export default AuthStackNav;