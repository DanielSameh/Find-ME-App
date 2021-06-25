import React from 'react'
import { StyleSheet, FlatList, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'
import { Entypo } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const AppBottomSheet = ({ isVisible, onClosed, galleryOnPress, cameraOnPress }) => {

  const items = [
    {
      id: '1',
      title: 'camera',
      iconName: 'camera',
      onPress: cameraOnPress,
    },
    {
      id: '2',
      title: 'gallery',
      iconName: 'image',
      onPress: galleryOnPress,
    },
  ]
  return (

    <Modal
      entry="bottom"
      backdropPressToClose={true}
      isOpen={isVisible}
      style={styles.modalBox}
      onClosed={onClosed}
    >
      <View style={styles.content}>
        <FlatList
          horizontal={true}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5} onPress={item.onPress}>
              <View style={{ height: '100%', justifyContent: 'center', margin: 25 }}>
                <Entypo name={item.iconName} size={52} />
                <Text style={{ alignItems: 'center' }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        >

        </FlatList>
      </View>
    </Modal>
  )

}
const styles = StyleSheet.create({
  modalBox: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    width,
    backgroundColor: 'transparent'
  },
  content: {
    position: 'absolute',
    bottom: 45,
    width,
    height: 250,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 22
  }
})

export default AppBottomSheet
