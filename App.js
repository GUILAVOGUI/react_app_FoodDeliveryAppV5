// import { StatusBar as StatusBarIphone } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform } from 'react-native';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator'


export default function App() {
  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor={colors.statusbar}

      />

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <RootNavigator />
        {/* <SignInWelcomeScreen /> */}
        {/* <SignInScreen /> */}
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'android' ? 'white' : colors.statusbar,
    flex: 1,
  },
});
