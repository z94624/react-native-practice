import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        height: 60,
        flexDirection: 'row'
    },
    background: {
        height: 800,
        width: 600,
        position: 'absolute'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    icon: {
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    },
    desc: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
});

const Login = ({ navigation }) => (
    <View style={styles.container}>
        <Image style={styles.background} source={{ uri: 'https://picsum.photos/id/1020/800/600/?blur' }} />

        <View style={styles.container}>
            <Image style={styles.icon} source={require('./../../assets/images/birdLogo.png')} />
        </View>

        <View style={styles.container}>
            <Text style={styles.title}>我的小羽宙</Text>
            <Text style={styles.desc}>自然觀察 X 生態保育</Text>
        </View>

        <View style={styles.bottomContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#53423D' }]} onPress={() => navigation.navigate('home')}>
                <Text style={styles.buttonText}>登入</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#A58987' }]}>
                <Text style={styles.buttonText}>註冊</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default Login;
