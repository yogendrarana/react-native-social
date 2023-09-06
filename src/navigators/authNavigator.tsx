import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// import navigator
import BottomTabNavigator from './bottomTabNavigator';

// import screens
import { ForgotPassword, Login, Register } from '../screens/exports';


const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />

            {/* to main home */}
            <Stack.Screen name="MainHome" component={BottomTabNavigator} />
        </Stack.Navigator>
    )
}

export default AuthNavigator