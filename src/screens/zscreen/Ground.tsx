import { StyleSheet, Text, View } from 'react-native'
import Tabs from '../../components/shared/Tabs';

const Ground = () => {

    return (
        <View style={styles.container}>
            <Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} />
        </View>
    )
}

export default Ground;

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