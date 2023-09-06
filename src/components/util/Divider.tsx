import React from 'react';
import { useWindowDimensions, View, Text, StyleSheet } from 'react-native';

interface DividerProp {
    subheaderText: string
}

const Divider: React.FC<DividerProp> = ({ subheaderText }) => {
    const { width } = useWindowDimensions();
    const maxTextWidth = width * 0.6;
    // const textWidth = Math.min(maxTextWidth, subheaderText.length * 10);
    const textWidth = subheaderText ? Math.min(maxTextWidth, subheaderText.length * 10) : 0;

    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            {subheaderText && subheaderText.length > 0 && (
                <View style={[styles.subheaderContainer, { width: textWidth }]}>
                    <Text style={styles.subheader}>{subheaderText}</Text>
                </View>
            )}
            <View style={styles.divider} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subheaderContainer: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subheader: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black'
    },
    divider: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#b2beb5',
    },
});

export default Divider;
