import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'

import Card from '../components/core/Card'
import VerticalSpace from '../components/layout/VerticalSpace'
import routes from '../navigation/routes'
import useApi from '../hooks/useApi'
import casesApi from '../api/cases'
import useAuth from '../auth/useAuth'
import useLocation from '../hooks/useLocation'

const Home = ({ navigation }) => {

  const [cases, setCases] = useState([])
  const { user } = useAuth()
  const lostCaseApi = useApi(casesApi.getAllCases)
  const { getCity } = useLocation()
  /*const fetchCity = async (item) => {
    const res = await getCity(Number(item.location.coordinates[0]), Number(item.location.coordinates[1]))
    console.log(res[0].country)
    return res[0].country
  }
*/

  useEffect(() => {
    const fetchCases = async () => {
      await lostCaseApi.request(user._id).then(
        (value) => {
          setCases(value.data.cases)
        }
      )
    }
    fetchCases()
  }, [])

  return (
    <View style={{ backgroundColor: '#E5E5E5' }}>
      <>
        {cases.length > 0 ?
          <FlatList
            data={cases}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => (
              <View style={{ width: '100%' }}>
                <VerticalSpace height={5} />
                <View style={{ backgroundColor: 'white', borderRadius: 13 }}>
                  <Card
                    uri={item.images[0]}
                    height={200}
                    onError={() => { }}
                    onPress={() => { navigation.navigate(routes.DETAILS, item) }}
                    borderTopRadius={16}
                    caseName={item.name}
                    state={item.isFound ? 'Founded' : 'Not Founded'}
                    caseLocation='Cairo'
                  />
                </View>
                <VerticalSpace height={5} />
              </View>
            )}
          /> : <View style={{ backgroundColor: '#E5E5E5', height: '100%', justifyContent: 'center', alignItems: 'center' }}  >
            <Text
              style={{ fontSize: 45 }}
            >
              there is no case
            </Text>
          </View>
        }

      </>
    </View>
  )
}

export default Home

