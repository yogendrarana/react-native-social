import { StyleSheet, Text, View } from 'react-native'

// import components
import Tabs from '../../components/shared/Tabs';

export default function Ground () {

    return (
        <View style={styles.container}>
            <Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%', 
        padding: 15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    }
});