# React Native Custom Carousel

Simple custom carousel by.

Pakages:
    "react-native-animatable": "^1.3.3",
    "react-native-vector-icons": "^9.2.0"
    
File : app.js

import carousel component and pass slides data array
  <Carousel data={data} />

File:components >  carousel > index.js

    // pick slide data from array initialy 0 index of array.
    const [index, setIndex] = React.useState(0)
    // swicth animation
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
    
    // for pagination
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
                
                // slide item of carousel
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
    
File:components >  carousel > slide-item.js
    return(
            <Animatable.View
                animation={animateType} easing="ease"
                direction='alternate'
                style={styles.slide}
            >
                // any kind of slide can be designed in slideItem
            </Animatable.View >
    )
ScreenShot:

![Screenshot_1661702839 copy](https://user-images.githubusercontent.com/55942880/187083720-5c1eb16a-1114-4fe8-a19b-c37590277d65.png)

apk Url : https://drive.google.com/file/d/1EpzMCUB2D-yIuOLQeIH8EvphbJLLpptk/view?usp=sharing 
