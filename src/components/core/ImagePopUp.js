import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";

import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";

const ImagePoPUp = ({ showModel, setShowModel, handelPress }) => {
  const items = [
    {
      id: '1',
      title: 'camera',
      iconName: 'camera',
      type: 'c'
    },
    {
      id: '2',
      title: 'gallery',
      iconName: 'image',
      type: 'g'
    },
  ];
  return <View  >
    <Modal
      visible={showModel}

      style={{ top: Dimensions.get('window').height / 4, backgroundColor: 'transparent', justifyContent: 'center', maxHeight: Dimensions.get('window').height / 4 }}
      onBackdropPress={() => setShowModel(false)}
    >
      <View style={styles.content}>
        <FlatList
          horizontal={true}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5} onPress={() => handelPress(item.type)}>
              <View style={{ height: '80%', justifyContent: 'center', alignItems: 'center', margin: 25 }}>
                <Entypo name={item.iconName} size={52} />
                <Text style={{ alignItems: 'center' }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        >
        </FlatList>
      </View>
    </Modal>
  </View>
}


const styles = StyleSheet.create({
  content: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
})

export default ImagePoPUp