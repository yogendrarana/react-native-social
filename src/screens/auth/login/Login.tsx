import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';


// import component
import Divider from '../../../components/util/Divider';


// import logo
import Logo from '../../../assets/logo/logo.png';


// prop type
interface PropType {
    navigation: any
}


export default function Login({ navigation }: PropType): React.ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#b2beb5" />

                <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#b2beb5" />

                <Pressable onPress={() => navigation.navigate("Forgot Password")} style={styles.button}>
                    <Text style={[styles.forgotPasswordBtnText, styles.forgotPasswordBtn]}>Forgot Password?</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('MainHome')} style={[styles.button, styles.loginBtn]}>
                    <Text style={styles.loginBtnText}>Log In</Text>
                </Pressable>

                <Divider subheaderText='or' />

                <Pressable onPress={() => navigation.navigate('#')} style={[styles.button, styles.googleBtn]}>
                    <Text style={styles.googleBtnText}>Login with Google</Text>
                </Pressable>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}> Don't have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signupBtnText}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: { marginBottom: 30, textAlign: 'center', color: '#000' },
    logo: { height: 80, width: 80, resizeMode: 'contain' },
    headerTextTop: { fontSize: 30, color: 'black', textAlign: 'center', },
    headerTextBottom: { marginTop: 5, color: '#9E7676' },
    form: { paddingHorizontal: 10, width: "100%", alignItems: 'center' },
    row: { width: '100%', marginVertical: 5, justifyContent: 'center' },
    label: { fontSize: 16, color: "#000" },
    input: {
        height: 50,
        width: "100%",
        color: "black",
        borderBottomWidth: 1,
        borderColor: "#b2beb5",
        padding: 15,
        marginVertical: 10,
    },

    // Login Btn Styles
    button: { width: "100%", marginVertical: 15, },
    forgotPasswordBtn: { color: 'black' },
    forgotPasswordBtnText: { textAlign: 'right' },
    loginBtn: { padding: 15, alignItems: 'center', borderRadius: 10, backgroundColor: "#3B82F6" },
    loginBtnText: { fontSize: 16, fontWeight: '800', color: '#fff', },
    googleBtn: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#b2beb5",
        borderRadius: 10,
    },
    googleBtnText: { marginLeft: 10, color: 'black' },

    // footer
    footer: { textAlign: 'center', flexDirection: 'row' },
    footerText: { fontWeight: 'bold', color: 'black' },
    signupBtnText: { color: 'black' }
});