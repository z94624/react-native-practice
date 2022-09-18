import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 320,
        height: 320,
        marginVertical: 32
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center'
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
});

const slides = [
    {
        key: 1,
        title: '沙灘',
        text: '小環頸鴴、東方環頸鴴、大中小杓鷸...',
        image: { uri: 'https://picsum.photos/id/1001/600/800' },
        backgroundColor: '#DB4302'
    },
    {
        key: 2,
        title: '淺山',
        text: '黃頭鷺、五色鳥、領角鴞...',
        image: { uri: 'https://picsum.photos/id/1028/600/800' },
        backgroundColor: '#a4b602'
    },
    {
        key: 3,
        title: '路殺',
        text: '陸蟹、白鼻心、麝香貓...',
        image: { uri: 'https://picsum.photos/id/1077/600/800' },
        backgroundColor: '#406E9F'
    }
];

const setStorage = async () => {
    try {
        await AsyncStorage.setItem("@Route:initialPage", "login");
    } catch (e) {
        console.log(e);
    }
}

const Intro = ({ navigation }) => {
    const _renderItem = ({ item }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    const _onDone = () => {
        setStorage().then(() => {
            navigation.navigate('login');
        });
    }

    return (
        <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} showSkipButton={true} onSkip={_onDone} />
    );
}

export default Intro;
