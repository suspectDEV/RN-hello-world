import React from 'react';
import {View, Image, Text, Button, Pressable} from 'react-native';

const ImageConcept = () => {
  // return <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{width:50, height:50}} ></Image>
  return (
    <>
      <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'white',
        }}>
        <Image
          source={require('./assets/android.png')}
          style={{width: 90}}></Image>
        <Text style={{textAlign: 'center', fontSize: 35, color: 'gray'}}>
          <Text style={{fontWeight: 'bold'}}>Hello</Text> world!
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 15,
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 40,
            paddingVertical: 20,
            paddingHorizontal: 40,
            color: 'gray',
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Pressable
          android_ripple={{color: 'rgba(0,0,0,0.1)'}}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius:5,
            backgroundColor: '#009AFD',
          }}>

          <Text style={{color: 'white', fontSize:16, textAlign: 'center'}}>
            Press here...
          </Text>
        </Pressable>
        {/* <Button title="Type here..." /> */}
      </View>
    </>
  );
};

export default ImageConcept;
