import { StatusBar } from "expo-status-bar";
import React,{Component, useEffect, useState}from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Dimensions,
  Button,
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import MapPicker from './assets/components/MapPicker'
import Toast from 'react-native-tiny-toast'



export default function App(){

  const [mapVisible,setMapVisible]=useState("false");

const saveLocation = (long,lat) =>{
  console.log("Latitude Picked: "+lat)
  console.log("Longitude Picked "+long)
}
  
  return (
    /*  <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
    </SafeAreaView> */

    //flex box..
    /*  <View
      style={{
        backgroundColor: "#fff",
        flex: 1, //by writing flex 1 this view grows to take the available space..
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View> */

    // flex basis, flex grow,flex wrap, align
    /*  <View
      style={{
        backgroundColor: "#fff",
        flex: 1, //by writing flex 1 this view grows to take the available space..
        flexDirection: "row", // set the flex items horizontally
        justifyContent: "center", // align it center  primary axis
        alignItems: "center", // align it center secondary axiz

        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, //width or height
          // flexGrow: 1, // like a flex take the available space

          width: 200,
          flexShrink: 3,  // like flex:-1

          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      />
    </View>
 */

    // Absolute and Relative Positioning .


 
       <MapPicker onLocationPicked={saveLocation}/>

     
    
   

 


   );
}


const styles = StyleSheet.create({
  container: {
   

    paddingTop:50
  },

  
});
