import React from 'react'
import { StyleSheet, View } from 'react-native'

// import components
import Tabs from '../../../components/shared/Tabs'

const categories = [
    {id: 1, title: 'overview'}, 
    {id: 2, title: 'songs'}, 
    {id: 3, title: 'podcast'},
    {id: 4, title: 'radio'}
]

export default function Categories () {

    return (
        <View style={{paddingHorizontal: 15}}>
           <Tabs tabs={['overview', 'songs', 'podcast', 'radio']} /> 
        </View>
    )
}


const styles = StyleSheet.create({
    categoryDiv: {
        flex: 1,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
        backgroundColor: "rgba(0, 128, 128, 0.25)",
        borderRadius: 50,
    }

})