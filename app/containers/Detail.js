import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import AvatarHeaderScrollView from 'react-native-sticky-parallax-header';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },
    title: {
        top: -10,
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2c2c2c',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    price: {
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c2c2c'
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2c2c2c'
    },
    starContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10
    },
    bottomContainer: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'rgb(238, 219, 214)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomText: {
        fontSize: 20,
        color: '#53423D',
        fontWeight: 'bold'
    }
});

const Detail = (item) => {
    const { image, title } = item.route.params;

    const rankStar = rank => {
        const star = [];
        for (let i = rank; i > 0; i--) {
            if (i >= 1) {
                star.push(
                    <Icon
                        key={i}
                        style={{ marginRight: 5 }}
                        name={'star'}
                        size={15}
                        color={'gold'}
                    />
                );
            } else if (i < 1 && i >= 0.5) {
                star.push(
                    <Icon
                        key={'tail'}
                        style={{ marginRight: 5 }}
                        name={'star-half'}
                        size={15}
                        color={'gold'}
                    />
                );
            }
        }
        return star;
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={image} style={{ height: 200 }} />
            <AvatarHeaderScrollView
                headerHeight={300}
                contentContainerStyle={{ flex: 10 }}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>$129</Text>
                    <View style={styles.starContainer}>
                        {rankStar(4.5)}
                    </View>
                    <Text>Lorem ipsum dolor sit amet, at nibh, eget amet nunc, congue lobortis. Mi elit, purus eu nec. Accumsan quisque lectus, consectetuer et. Mauris tortor, mollis potenti, ac pellentesque in. Dui non augue, in ligula, lectus integer. Venenatis elementum voluptate, proin nulla. Tellus vel. Velit natoque in, magna aenean mi. Vitae nonummy, pulvinar in. Cum sit senectus, et ac blandit, ullamcorper pulvinar. Parturient accumsan mattis.
                    Arcu duis. Sem ac, mauris congue commodo, libero morbi at. Et lacus varius, nec nibh euismod. Amet ac porta. Pharetra etiam. Vitae dictum. Suspendisse arcu imperdiet. In wisi, metus massa vel. Leo lectus aenean, ante duis est. Penatibus ut donec. Quis sit, consequat ipsum elit, dui in est.</Text>
                </View>
            </AvatarHeaderScrollView>
            <TouchableOpacity style={styles.bottomContainer}>
                <Icon
                    style={{ marginRight: 15 }}
                    name={'shopping-cart'}
                    size={20}
                    color={'#53423D'}
                />
                <Text style={styles.bottomText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Detail;
