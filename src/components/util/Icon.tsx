import React from 'react'
import { Image } from 'react-native'
import { ImageSourcePropType } from 'react-native';


// prop type
interface IconProps {
    image: ImageSourcePropType;
    focused: boolean;
}

const Icon = ({ image, focused }: IconProps) => {
    return (
        <Image source={image} style={{ height: 25, width: 25, tintColor: focused ? "black" : "#b2beb5" }} />
    )
}

export default Icon