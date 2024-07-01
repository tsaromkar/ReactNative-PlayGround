import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { data } from './data'

const Onboarding = () => {
    return (
        <ScrollView horizontal>
            {data.map(item => {
                return (
                    <View key={item.id}>
                        <Image source={require("./assets/image1.png")} style={{ width: 320, height: 320 }} />
                        <Text>{item.title}</Text>
                        <Text>{item.text}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Onboarding
