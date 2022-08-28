import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import SlideItem from './slide-item';
import Pagination from './pagination';

export default function Carousel({ data }) {
    const [index, setIndex] = React.useState(0)
    const [animateType, setAnimateType] = React.useState('fadeIn');

    const slideLeft = () => {
        if (index !== 0) {
            setIndex(index - 1);
            setAnimateType('fadeInLeft');
        };
    }

    const slideRight = () => {
        if ((data.length - 1) > index) {
            setIndex(index + 1);
            setAnimateType('fadeInRight');
        };
    }

    const gotoSlide = (i) => {
        setIndex(i);
        if (i > index) {
            setAnimateType('fadeInRight');
        } else {
            setAnimateType('fadeInLeft');
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <TouchableOpacity
                    onPress={slideLeft}
                    style={[styles.fab, styles.fabLeft]}
                    activeOpacity={1}
                >
                    <Icon name='chevron-left' />
                </TouchableOpacity>

                <SlideItem animateType={animateType} key={index} item={data[index]} />

                <TouchableOpacity
                    style={[styles.fab, styles.fabRight]}
                    activeOpacity={1}
                    onPress={slideRight}>
                    <Icon name='chevron-right' />
                </TouchableOpacity>
                <Pagination gotoSlide={gotoSlide} length={data.length} active={index} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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