import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SinupScreen} from '../screens/auth/SinupScreen/SinupScreen';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Sinup">
        <Stack.Screen name="Sinup" component={SinupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
