import { useRef } from 'react'
import { 
    View, 
    Image, 
    FlatList, 
    Animated, 
    StyleSheet,      
    NativeScrollEvent,
    NativeSyntheticEvent, 
    useWindowDimensions, 
} from 'react-native'

// import components
import Pagination from '../../../components/util/Pagination';


let contents = [
    { name: "Scarlett Johansson", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_hGYmCwCT-x-LSRZ-KASb2ZeM-xP4TpZfw&usqp=CAU" },
    { name: "Eva", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVNx-_YOvUHDP7g9XIJUaWsKqP3iHD56DHA&usqp=CAU" },
    { name: "Benedikt", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqgiva0zNspvPTNc8k5tx9uR_6pC77Pjhog&usqp=CAU" },
    { name: "Isabella", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3csBBVP651XCJkHRzjz-8VBG0md2DSizzQ&usqp=CAU" },
    { name: "Lina", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZOBmYl7R19k-37yHRV4eFqIJoIPGIyVImA&usqp=CAU" },
]


export default function Banner () {

    const { height, width } = useWindowDimensions();
    const slideWidth = width - 30;

    const scrollX = useRef(new Animated.Value(0)).current;

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
        )(event)
    }

    const RenderSlide = ({ item }) => {
        return (
            <View style={[styles.imgContainer, { height: height * 0.25, width: slideWidth }]}>
                <Image source={{ uri: item.profile }} style={styles.image} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contents}
                renderItem={({ item }) => <RenderSlide item={item} />}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment='center'
                onScroll={handleScroll}
            />

            <Pagination data={contents} scrollX={scrollX} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        position: "relative",
    },
    imgContainer: {
        marginHorizontal: 2,
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        height: "100%",
        width: "100%",
    }
})