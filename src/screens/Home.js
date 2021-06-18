import React from 'react'
import { FlatList, View } from 'react-native'
import { Dimensions } from 'react-native';

import Card from '../components/layout/Card'
import Container from '../components/layout/ContainerView'
import VerticalSpace from '../components/layout/VerticalSpace'


const casesList = [
  {
    id: "1",
    uri: "https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU",
    caseName: "Ahmed Mohamed",
    state: "Founded",
    caseLocation: "Gize"
  },
  {
    id: "2",
    uri: "https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU",
    caseName: "Mazen Ahmed",
    state: "Not Founded Yet",
    caseLocation: "Cairo",
  },
  {
    id: "3",
    uri: "https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU",
    caseName: "Ayman",
    state: "Not Founded Yet",
    caseLocation: "Cairo",
  },
  {
    id: "4",
    uri: "https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU",
    caseName: "Ahmed",
    state: "Founded",
    caseLocation: "Cairo",
  },
]

const Home = () => {
  const width = Dimensions.get('window').width;
  return (
    <Container>
      <>
        <FlatList
          data={casesList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: width }}>
              <VerticalSpace height='5px' />
              <View style={{ backgroundColor: 'white', borderRadius: 13 }}>
                <Card
                  uri={item.uri}
                  height={200}
                  onError={() => { }}
                  onPress={() => { console.log('OnPress') }}
                  borderTopRadius={13}
                  caseName={item.caseName}
                  state={item.state}
                  caseLocation={item.caseLocation}
                />
              </View>
              <VerticalSpace height='5px' />
            </View>
          )}
        />

      </>
    </Container>
  )
}

export default Home
