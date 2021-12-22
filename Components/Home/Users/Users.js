import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-web';
import User from '../../User/User';


export default function users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data=>setUsers(data));
    }, [])
    return (
        <View >
            <Text>Total Users:{users.length}</Text>
            <ScrollView>
                {
                users.map(userr =><User
                    key={userr.id}
                    userr={userr}

                >
                </User>)
                }
            </ScrollView>
        </View>
    )
}
