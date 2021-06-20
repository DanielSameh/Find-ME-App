import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-datepicker';

const CustomDatePicker = ({ date, onDateChange }) => {
    return (
        <View>
            <DatePicker
                style={styles.datePickerStyle}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-1970"
                maxDate="01-01-2022"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        display: 'none'
                    },
                    dateInput: {
                        borderRadius: 32,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#D0DBEA',
                    },
                }}
                onDateChange={onDateChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    datePickerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 200,
    },
})

export default CustomDatePicker