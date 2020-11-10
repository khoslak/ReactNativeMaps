import React, { Component } from 'react';
import {Text,View,Stylesheet,Button, ActivityIndicator } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import appConfig from '../../app.json';


class MapPicker extends Component{

    state = {
        mapLoaded:false,
      
        location:null
    }
    

    componentDidMount(){
        
        
        console.log("function called first !");
      
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
             console.log('Permission to access location was denied');
            }
      
            let myLocation = await  Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
             this.setState({location:myLocation})
            
          })();
      
    

         
      
    
  
         

          setTimeout(()=>{

            this.setState({mapLoaded:true});
           
          },20000)
   
       
        
    
        
       
     
}


    
    
    onRegionChangeComplete = (region) =>{

        console.log("New region"+region.longitude+"\nlatitue"+region.latitude);
        // this.setState({region});
        // console.log(this.state.location);
        this.state.location.coords.longitude=region.longitude
        this.state.location.coords.latitude=region.latitude
    

      
    }

    render(){
        if(!this.state.mapLoaded){
            return(
                <View style={{justifyContent:"center",flex:1}}>
                   <ActivityIndicator size="large" color="#00ff00" />
                </View>
            );
        }
        else{
        return(
            <View style={{flex:1}}>
                <MapView 
                onRegionChangeComplete={this.onRegionChangeComplete}
                style={{flex:1}} region={{longitude:this.state.location.coords.longitude,latitude:this.state.location.coords.latitude,longitudeDelta:0.04,latitudeDelta:0.09}}>
                    <Marker  coordinate={{latitude:this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude}}
            title={"title"}
            description={"description"}
            draggable={true}
            onDragEnd={(e) => {this.props.onLocationPicked(e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude)}}/>
                    </MapView>

            </View>
        );
        }
    }

}

export default MapPicker;