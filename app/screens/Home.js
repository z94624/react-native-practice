import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import Banner from "../components/Banner";
import Card from "../components/Card";

const cardData = [
    {
        title: 'Wonderful Universe',
        subTitle: '沉浸宇宙四大作用力',
        image: { uri: 'https://picsum.photos/id/1022/600/800' },
    },
    {
        title: 'Amazing Nature',
        subTitle: '活出自然野性生命力',
        image: { uri: 'https://picsum.photos/id/1002/600/800' },
    },
    {
        title: 'Shocking Explosion',
        subTitle: '震懾天體壯觀大爆炸',
        image: { uri: 'https://picsum.photos/id/1042/600/800' },
    },
    {
        title: 'Naive Human',
        subTitle: '驚豔人體複雜化工廠',
        image: { uri: 'https://picsum.photos/id/1027/600/800' },
    }
];

const Home = ({ navigation }) => {
    const renderCardItem = ({ item, index }) => (
        <Card
            {...item}
            imagePosition={index % 2 === 1 ? 'right' : 'left'}
            onPress={() => navigation.navigate('detail', item)}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Banner
                data={[
                    {
                        img: { uri: 'https://picsum.photos/id/1003/600/800' },
                        text: '翠綠地',
                        textPosition: 'topRight'
                    },
                    {
                        img: { uri: 'https://picsum.photos/id/1024/600/800' },
                        text: '永藍天',
                        textPosition: 'bottomLeft'
                    },
                    {
                        img: { uri: 'https://picsum.photos/id/1069/600/800' },
                        text: '蔚藍海',
                        textPosition: 'bottomRight'
                    }
                ]}
                style={{ flex: 1 }}
            />
            
            <FlatList
                data={cardData}
                renderItem={renderCardItem}
                style={{ flex: 1 }}
            />
        </SafeAreaView>
    );
}

export default Home;
