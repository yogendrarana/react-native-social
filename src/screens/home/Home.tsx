import { StyleSheet, View } from 'react-native';

// import components
import Header from './components/Header';
import Stories from './components/Stories';
import Banner from './components/Banner';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
            <Banner />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})