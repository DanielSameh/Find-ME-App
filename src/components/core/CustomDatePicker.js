import React from 'react'
import { View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'


const CustomDatePicker = ({ date, onChange, show }) => {

  return (
    <View>
      {show && (
        <DateTimePicker
          value={date}
          mode='date'
          display="calendar"
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}

    </View>
  )
}


export default CustomDatePicker