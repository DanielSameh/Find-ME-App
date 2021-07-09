
import React, { useState, useEffect } from 'react'
import MapView,{Marker} from 'react-native-maps'
import {  Text,View, StyleSheet,Dimensions,ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import colors from '../styles/colors'
import Button from './Button'
export default function MapScreen({ modalVisible,onChangeLocation,onModalChange,onCoordinateChange }) {

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    (async () => {
  
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await (Location.getCurrentPositionAsync({}))
      setLocation((location.coords))
      
    })()
  }, [])

  const onChangeValue = e =>{
    setLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    })
  }
  async function onCityChange (location) {
    let town = await (Location.reverseGeocodeAsync({
      latitude: location.latitude,
      longitude: location.longitude
        
    }))
    if (town){
      {onChangeLocation(town),
      onModalChange(!modalVisible),
      onCoordinateChange({latitude:location.latitude , longitude:location.longitude})
      }
    }
   
  }

  return (

    <View style={styles.container}>
      {/* {console.log(text)} */}
      {errorMsg? <Text>{errorMsg}</Text>: null}

      {location != null ?    
        <View>       
          <MapView
            
            showsMyLocationButton={true}
            showsUserLocation={true}
            followsUserLocation={false}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={ onChangeValue}
            style={styles.map}
  
          >
        
            <Marker 
              coordinate = {{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}}
            />
            
          </MapView> 
          <View
            style={{
              position: 'absolute',//use absolute position to show button on top of the map
              top: '85%', //for center align
              alignSelf: 'center' //for align to right
            }}
          >
            <Button onPress={()=>onCityChange(location)} >Choose Location</Button>
          </View>       
        </View>
        : <ActivityIndicator size="large"  color={colors.greenPrimary}/>}
      
         
    </View>
  )
}

const styles = StyleSheet.create({

  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
