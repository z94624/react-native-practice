import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Intro from './containers/Intro';
import Login from './screens/Login';
import Home from './screens/Home';
import Detail from './containers/Detail';

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#2c2c2c',
        fontWeight: 'bold'
    }
});

const Stack = createNativeStackNavigator();

const App = () => {
    const [firstPage, setFirstPage] = useState(null);
    const getStorage = async () => {
        try {
            const value = await AsyncStorage.getItem("@Route:initialPage");
            if (value !== null) {
                setFirstPage(value);
            } else {
                setFirstPage('intro');
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getStorage();
    }, []);

    if (!firstPage) {
        return (
            <View style={styles.center}>
                <Text style={styles.text}>Loading...</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={firstPage}>
                <Stack.Screen name="intro" component={Intro} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
