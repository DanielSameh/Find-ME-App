import React, { useState, useEffect } from 'react'
import { FlatList, View, Text } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'
import Card from '../components/core/Card'
import VerticalSpace from '../components/layout/VerticalSpace'
import routes from '../navigation/routes'
import useApi from '../hooks/useApi'
import casesApi from '../api/cases'
import userApi from '../api/user'
import useAuth from '../auth/useAuth'

const Home = ({ navigation }) => {
  const [cases, setCases] = useState([])
  const { user } = useAuth()
  const [currentUser, setCurrentUser] = useState(user)
  const lostCaseApi = useApi(casesApi.getAllCases)
  const getUser = useApi(userApi.me)

  const fectchUserInfo = async () => {
    const { data } = await getUser.request()
    setCurrentUser(data)
  }
  const fetchCases = async () => {
    console.log(user)
    await lostCaseApi.request(user._id).then(value => {
      setCases(value.data.cases)
      user._id = ''
    })
  }
  useEffect(() => {
    fectchUserInfo()
  }, [])
  useFocusEffect(
    React.useCallback(() => {
      fetchCases()
      return () => {
        setCases([])
      }
    }, []),
  )

  return (
    <View style={{ backgroundColor: '#E5E5E5' }}>
      <>
        {cases.length > 0 ? (
          <FlatList
            data={cases}
            keyExtractor={item => item._id.toString()}
            renderItem={({ item }) => (
              <View style={{ width: '100%' }}>
                <VerticalSpace height={5} />
                <View style={{ backgroundColor: 'white', borderRadius: 13 }}>
                  <Card
                    uri={item.images[0]}
                    height={200}
                    onError={() => {}}
                    onPress={() => {
                      navigation.navigate(routes.DETAILS, { lostCase: item, user: currentUser })
                    }}
                    borderTopRadius={16}
                    caseName={item.name}
                    state={item.isFound ? 'Founded' : 'Not Founded'}
                    caseLocation='Cairo'
                  />
                </View>
                <VerticalSpace height={5} />
              </View>
            )}
          />
        ) : (
          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 45 }}>there is no case</Text>
          </View>
        )}
      </>
    </View>
  )
}

export default Home
