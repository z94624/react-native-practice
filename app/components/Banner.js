import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

import Swiper from "react-native-swiper";

const defaultProps = { data: [] };
// 若資料型別錯誤，會噴 YellowBox 提醒
const propTypes = { data: PropTypes.array };

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    },
    text: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    topLeft: {
        padding: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    topRight: {
        padding: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    bottomLeft: {
        padding: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    bottomRight: {
        padding: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});

const Banner = ({ data }) => (
    <Swiper horizontal autoplay>
        {
            data.map((d, i) => (
                <ImageBackground key={`ad${i}`} style={[styles.slide, styles[d.textPosition]]} source={d.img}>
                    <Text style={[styles.text, { color: d.textColor || '#fff' }]}>{d.text}</Text>
                </ImageBackground>
            ))
        }
    </Swiper>
);

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
