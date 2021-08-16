import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStackNav from './authNavigators'




const RootNavigator = () => {

    return (
        <NavigationContainer>
            <AuthStackNav />
        </NavigationContainer>
    )
}



export default RootNavigator;