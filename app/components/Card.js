import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';

const defaultProps = {
    title: '',
    subTitle: '',
    image: '',
    imagePosition: 'left',
    backgroundColor: 'rgb(238, 219, 214)',
    onPress: () => {}
};
const propTypes = {
    title: PropTypes.string,
    image: PropTypes.object,
    subTitle: PropTypes.string,
    imagePosition: PropTypes.string,
    onPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        height: 171
    },
    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    desc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c2c2c',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2c2c2c'
    }
});

const Card = ({ title, subTitle, image, imagePosition, backgroundColor, onPress }) => {
    let flexDirection = imagePosition === 'left' ? 'row' : 'row-reverse';
    return (
        <TouchableOpacity
            style={[styles.container, { flexDirection }]}
            onPress={onPress}
        >
            <Image source={image} style={styles.img} />
            <View style={[styles.desc, { backgroundColor: backgroundColor }]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
