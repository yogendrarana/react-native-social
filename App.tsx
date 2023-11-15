import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import navigator
import AuthNavigator from './src/navigators/AuthNavigator';

function App(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Trebuchet MS',
    }
});