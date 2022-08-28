import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Pagination({ gotoSlide, length, active }) {
    const arr = Array(length).fill('');
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {arr.map((v, i) => {
                return <View
                    key={i}
                    style={{
                        marginHorizontal: 5,
                        marginTop: 10
                    }}
                >
                    <TouchableWithoutFeedback
                        onPress={() => gotoSlide(i)}

                    >
                        <View>
                            {active == i ?
                                <Icon name='circle' size={15} color={active === i ? 'red' : '#000'} />
                                :
                                <Icon name='circle-medium' size={15} color={active === i ? 'red' : '#000'} />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            })}
        </View>
    );
}