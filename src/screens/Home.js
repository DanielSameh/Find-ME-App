import React from 'react'
import { FlatList, View } from 'react-native'

import Card from '../components/core/Card'
import VerticalSpace from '../components/layout/VerticalSpace'
import routes from '../navigation/routes'


const casesList = [
  {
    id: '1',
    uri: 'https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU',
    caseName: 'Ahmed Mohamed',
    state: 'Founded',
    caseLocation: 'Giza'
  },
  {
    id: '2',
    uri: 'https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU',
    caseName: 'Mazen Ahmed',
    state: 'Not Founded Yet',
    caseLocation: 'Cairo',
  },
  {
    id: '3',
    uri: 'https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU',
    caseName: 'Ayman',
    state: 'Not Founded Yet',
    caseLocation: 'Cairo',
  },
  {
    id: '4',
    uri: 'https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU',
    caseName: 'Ahmed',
    state: 'Founded',
    caseLocation: 'Cairo',
  },
]

const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#E5E5E5' }}>
      <>
        <FlatList
          data={casesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: '100%' }}>
              <VerticalSpace height={5} />
              <View style={{ backgroundColor: 'white', borderRadius: 13 }}>
                <Card
                  uri={item.uri}
                  height={200}
                  onError={() => { }}
                  onPress={() => { navigation.navigate(routes.DETAILS, item) }}
                  borderTopRadius={16}
                  caseName={item.caseName}
                  state={item.state}
                  caseLocation={item.caseLocation}
                />
              </View>
              <VerticalSpace height={5} />
            </View>
          )}
        />

      </>
    </View>
  )
}

export default Home

