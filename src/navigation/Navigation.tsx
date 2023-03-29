import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ConfirmationScreen } from '../screens/ConfirmationScreen';
import { LogInScreen } from '../screens/LogInScreen';
import { MenuScreen } from '../screens/MenuScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LogIn" component={ LogInScreen } />
      <Stack.Screen name="Menu" component={ MenuScreen } />
      <Stack.Screen name="Confirmation" component={ ConfirmationScreen } />
    </Stack.Navigator>
  );
};
