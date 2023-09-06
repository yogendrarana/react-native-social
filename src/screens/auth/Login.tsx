import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

// import component
import { Divider } from '../exports';
import Icon from 'react-native-vector-icons/FontAwesome';

// prop type
interface PropType {
    navigation: any
}

export default function Login({ navigation }: PropType): React.ReactElement {    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTextTop}>Login</Text> 
                <Text style={styles.headerTextBottom}>Please login to continue.</Text>
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#b2beb5" color="black" />

                <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#b2beb5" color="black" />

                <Pressable onPress={() => navigation.navigate("Forgot Password")} style={[styles.button, styles.forgotPasswordBtn]}>
                    <Text style={styles.forgotPasswordBtnText}>Forgot Password?</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('MainHome')} style={[styles.button, styles.loginBtn]}>
                    <Text style={styles.loginBtnText}>Log In</Text>
                </Pressable>

                <Divider subheaderText='or' />

                <Pressable onPress={() => navigation.navigate('#')} style={[styles.button, styles.googleBtn]}>
                    <Icon name="google" size={19} color="#4285F4" />
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
    header: { marginBottom: 30, textAlign: 'center', color: '#000'},
    headerTextTop: { fontSize: 30, color: 'black', textAlign: 'center', },
    headerTextBottom: {marginTop: 5, color: '#9E7676'},
    form: { paddingHorizontal: 10, width: "100%", alignItems: 'center' },
    row: { width: '100%', marginVertical: 5, justifyContent: 'center'},
    label: { fontSize: 16, color: "#000" },
    input: { 
        height: 50,
        width: "100%", 
        borderBottomWidth: 1, 
        borderColor: "#b2beb5",
        padding: 15,
        marginVertical: 10, 
    },
    
    // Login Btn Styles
    button: {width: "100%", marginVertical: 15, },
    forgotPasswordBtn: {color: 'black'},
    forgotPasswordBtnText: { textAlign: 'right', color: 'black'},
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
    googleBtnText: {marginLeft: 10, color: 'black'},
    
    // footer
    footer: { textAlign: 'center', flexDirection: 'row' },
    footerText: { fontWeight: 'bold', color: 'black' },  
    signupBtnText: {color: 'black'}
});