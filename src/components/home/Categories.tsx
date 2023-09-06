import { FlatList, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const categories = [
    {id: 1, title: 'overview'}, 
    {id: 2, title: 'songs'}, 
    {id: 3, title: 'podcast'},
    {id: 4, title: 'radio'}
]

const RenderCategory = ({item}) => {
    return (
        <Pressable style={styles.categoryDiv}>
            <Text style={{color: "black"}}>{item.title}</Text>
        </Pressable>
    )
}


const Categories = () => {

    return (
        <View style={{paddingHorizontal: 15}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({item}) => <RenderCategory item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categoryDiv: {
        flex: 1,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
        backgroundColor: "rgba(0, 128, 128, 0.25)",
        borderRadius: 50,
    }

})