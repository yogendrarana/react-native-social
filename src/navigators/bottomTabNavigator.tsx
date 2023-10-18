import React from "react";
import { ImageSourcePropType } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons
import HomeSolid from '../assets/icons/home-solid.png'
import BagSolid from '../assets/icons/bag-solid.png'
import UserSolid from '../assets/icons/user-solid.png'
import Bounce from '../assets/icons/bounce.png'

// import screens and components
import { Icon } from "../screens/exports";
import { Home, Shop, Profile } from '../screens/exports'
import { Ground } from "../screens/zscreen/exports";

function BottomTabNavigator() {
    const Bottom = createBottomTabNavigator();

    return (
        <Bottom.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 55, } }}>
            <Bottom.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => <Icon image={HomeSolid} focused={focused} /> }} />
            <Bottom.Screen name="Shop" component={Shop} options={{ tabBarIcon: ({ focused }) => <Icon image={BagSolid} focused={focused} /> }} />
            <Bottom.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ focused }) => <Icon image={UserSolid} focused={focused} /> }} />
            
            {/* temporary */}
            <Bottom.Screen name="Ground" component={Ground} options={{ tabBarIcon: ({ focused }) => <Icon image={Bounce} focused={focused} /> }} />
        </Bottom.Navigator>
    );
}

export default BottomTabNavigator;
