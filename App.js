import React from 'react';
import {
  ImagePickerIOS,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from './components/carousel';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Custom Carousel</Text>
          <Carousel data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const data = [
  {
    url: require('./assets/images/slide-img.png'),
    title: "John Doe",
    dis: "Lorem Ipsum 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae ",
  },
  {
    url: require('./assets/images/slide-img2.png'),
    title: "John Doe",
    dis: "Lorem Ipsum 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae ",
  },
  {
    url: require('./assets/images/slide-img3.png'),
    title: "John Doe",
    dis: "Lorem Ipsum 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae ",
  },
  {
    url: require('./assets/images/slide-img4.png'),
    title: "John Doe",
    dis: "Lorem Ipsum 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae ",
  },
  {
    url: require('./assets/images/slide-img2.png'),
    title: "John Doe",
    dis: "Lorem Ipsum 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae ",
  },
]



const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#000',
  }
});

export default App;
