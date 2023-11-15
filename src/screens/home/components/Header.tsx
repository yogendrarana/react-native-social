import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Pressable, Image, } from 'react-native'

// import icon
import Message from '../../../assets/icons/message.png'

export default function Header() {
    const navigation:any = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vibes</Text>

            <View style={styles.buttons}>
                <Pressable onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}>
                    <Image source={Message} style={{ height: 25, width: 25 }} />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        color: '#000',
        fontSize: 25,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})