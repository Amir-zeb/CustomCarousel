import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default function SlideItem({ item, animateType }) {

    return (
        <Animatable.View
            animation={animateType} easing="ease"
            direction='alternate'
            style={styles.slide}
        >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image source={item.url} style={{ resizeMode: 'contain' }} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Icon name='quote-left' size={25} />
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Icon name='star' color='#F77E00' size={22} />
                    <Icon name='star' color='#F77E00' size={22} />
                    <Icon name='star' color='#F77E00' size={22} />
                    <Icon name='star' color='#F77E00' size={22} />
                    <Icon name='star' color='#F77E00' size={22} />
                </View>
                <Text style={{ fontSize: 15, marginTop: 16, color: "#333", lineHeight: 20, fontWeight: 'bold' }}>{item.text}</Text>
                <Text style={{ fontSize: 16, marginTop: 16, color: '#000', fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 11, color: "#333" }}>{item.dis}</Text>
            </View >
        </Animatable.View >
    );
}
const styles = StyleSheet.create({
    slide: {
        width: '100%',
        height: 'auto',
        flex: 1,
    },
});