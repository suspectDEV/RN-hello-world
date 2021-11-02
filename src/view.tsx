
 import React, {useState} from 'react';
 import {Text, View, StyleSheet, TextInput, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
 
 function ViewConcept() {
   const [valores, setValores] = useState<string>('');
 
   return (
     <>
       {/* <View style={{display:"flex", height:"100%", justifyContent: "center", alignItems: "center"}} >
       <Text>Hello grubbe!</Text>
     </View> */}
 
       {/* <View style={{backgroundColor:"lightgreen",flex:1}}>
       <Text style={{flex:3, alignItems:"center", backgroundColor: "lightblue", textAlignVertical:"center", textAlign:"center", color:"red"}}>Hello</Text>
     </View> */}
 
       <View style={styles.blue}>
         <Text>{valores}</Text>
       </View>
       <View style={{backgroundColor: 'red', flex: 1}} focusable={true} />
       <View style={{backgroundColor: 'mediumblue', flex: 0.1}}></View>
 
       <Text numberOfLines={1} ellipsizeMode={'head'}>
         d sdlf ksñldfk lsñdkf ñlsdkf ñsdkfp oskdofp ksdpof kspdokf posdk posdkf
         posdkfposflj
       </Text>
       <TextInput value={valores} multiline maxLength={200} numberOfLines={1} maxFontSizeMultiplier={1} autoCapitalize="words" onChange={e => handleChange(e)} style={{width: '100%'}} />
 
       {/* <View style={{backgroundColor: 'mediumblue', flex: 9}}>
         <Text>Hello</Text>
         <View style={{backgroundColor: "lightgreen", flex:1}}></View>
         <View style={{backgroundColor: "green", flex:1}}></View>
       </View>
       <View style={{backgroundColor: 'lightblue', flex: 1}}></View> */}
     </>
   );
 
 
   function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>){
     console.log(e.nativeEvent.text)
     setValores(e.nativeEvent.text)
   }
 
 }
 
 
 const styles = StyleSheet.create({
   blue: {
     backgroundColor: 'green',
     flex: 1,
   },
 });
 
 export default ViewConcept;
 