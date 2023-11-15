import React from 'react'
import { StyleSheet, Pressable, View, Text, TextInput } from 'react-native'


// prop type
interface PropType {
    navigation: any
}


// import components
export default function ForgotPassword({ navigation }: PropType): React.ReactElement {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTextTop}>Forgot Password</Text>
                <Text style={styles.headerTextBottom}>Please provide email to reset password.</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#b2beb5" />

                <Pressable onPress={() => navigation.navigate('MainHome')} style={styles.forgotPasswordBtn}>
                    <Text style={styles.forgotPasswordBtnText}>Submit</Text>
                </Pressable>
            </View>
            <Pressable style={styles.backBtn} onPress={() => navigation.navigate("Login")}>
                <Text>Back</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        position: 'relative'
    },
    header: { marginBottom: 20, textAlign: 'center', color: '#000' },
    headerTextTop: { fontSize: 25, color: 'black', textAlign: 'center', },
    headerTextBottom: { marginTop: 5, color: '#9E7676' },
    form: { paddingHorizontal: 10, width: "100%", alignItems: 'center' },
    input: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderColor: "#b2beb5",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    forgotPasswordBtn: { width: "100%", padding: 15, alignItems: 'center', marginVertical: 15, borderRadius: 10, backgroundColor: "#3B82F6" },
    forgotPasswordBtnText: { fontSize: 16, fontWeight: '800', color: "#fff" },
    backBtn: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 15,
        left: 15,
    }
})