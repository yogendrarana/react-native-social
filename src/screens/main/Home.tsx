import { StyleSheet, View } from 'react-native';

// import components
import { Header, Categories, Stories, Divider } from '../exports';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
            {/* <Banner /> */}
            <Categories />
            {/* <Divider subheaderText='' /> */}
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