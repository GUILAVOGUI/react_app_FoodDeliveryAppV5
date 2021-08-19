import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';



import SignInScreen from '../screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import HomeScreen from '../screens/HomeScreen';

import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantsMapScreen';
import SearchScreeen from '../screens/SearchScreeen';
import DrawerNavigator from './DrawerNavigator';

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

            {/* <AuthStack.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            /> */}

            <AuthStack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <AuthStack.Screen
                name="RestaurantMapScreen"
                component={RestaurantMapScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <AuthStack.Screen
                name="RestaurantSearchScreen"
                component={SearchScreeen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            {/*  */}

        </AuthStack.Navigator>

    )
}




export default AuthStackNav;