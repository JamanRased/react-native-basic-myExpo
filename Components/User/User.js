import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    usersStyle: {
        border: '1px solid gray',
        padding: '15px',
        margin:'5px'
    }
})
export default function User({userr}) {
    const {name, email,website} = userr;
    return (
        <View style={styles.usersStyle}>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Website: {website}</Text>

        </View>
    )
}
