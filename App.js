import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneInput from './PhoneInput';  // Import your PhoneInput component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhoneInput"
          component={PhoneInput}
          options={{ title: 'Đăng nhập' }} // Set the header title here
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
