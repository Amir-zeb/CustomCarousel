import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Carousel({ data }) {
    const [index, setIndex] = React.useState(0)

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ position: 'relative', flex: 1 }}>
                {data.map((v, i) => {
                    return <SlideItem key={i} item={v} index={i} activeIndex={index} />
                })}
                <TouchableOpacity
                    onPress={() => { index !== 0 ? setIndex(index - 1) : null }}
                    style={[styles.fab, styles.fabLeft]}
                >
                    <Icon name='chevron-left' />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.fab, styles.fabRight]}
                    onPress={() => { (data.length - 1) > index ? setIndex(index + 1) : null }}>
                    <Icon name='chevron-right' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const SlideItem = ({ item, index, activeIndex }) => {

    return (
        <View
            style={[styles.slide, activeIndex == index ? styles.activeSlide : styles.hideSlide]}
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
        </View >
    );
}
const styles = StyleSheet.create({
    slide: {
        width: '100%',
        height: 'auto',
        flex: 1,
    },
    activeSlide: {
        transform: [{ scale: 1 }],
        zIndex: 5
    },
    hideSlide: {
        transform: [{ scale: 0 }],
        position: 'absolute',
        top: 0,
        left: 0,
    },
    fab: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        borderRadius: 100,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 16,
        position: 'absolute',
        top: 180,
        zIndex: 10
    },
    fabLeft: {
        left: 15,
    },
    fabRight: {
        right: 15,
    }
});