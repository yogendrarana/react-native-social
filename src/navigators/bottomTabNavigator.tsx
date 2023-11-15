import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// import icons
import Bounce from '../assets/icons/bounce.png'
import BagSolid from '../assets/icons/bag-solid.png'
import HomeSolid from '../assets/icons/home-solid.png'
import UserSolid from '../assets/icons/user-solid.png'


// import screens and 
import Home from '../screens/home/Home'
import Shop from '../screens/shop/Shop'
import Ground from '../screens/zscreen/Ground'
import Profile from '../screens/profile/Profile'


// import components
import Icon from "../components/util/Icon";


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
