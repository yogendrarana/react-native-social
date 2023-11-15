import React from 'react'
import { StyleSheet, Animated, View, useWindowDimensions } from 'react-native'

export default function Pagination ({ data, scrollX }) {

    const { width } = useWindowDimensions();

    const slideWidth = width - 30;

    return (
        <View style={styles.container}>
            {
                data.map((_, idx) => {

                    const dotWidth = scrollX.interpolate({
                        inputRange: [(idx - 1) * slideWidth, idx * slideWidth, (idx + 1) * slideWidth],
                        outputRange: [8, 20, 8],
                        extrapolate: 'clamp',
                    });

                    return <Animated.View key={idx} style={[styles.dot, { width: dotWidth }]}></Animated.View>
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
    },
    dot: {
        height: 8,
        width: 8,
        marginHorizontal: 2.5,
        backgroundColor: "rgba(0, 128, 128, 0.5)",
        borderRadius: 100,
    },
    activeDot: {
        backgroundColor: "rgba(0, 128, 128, 0.5)",
    }
})