import { View, Text } from 'react-native'
import React from 'react'

import HomeScreenLayout from './HomeScreenLayout/HomeScreenLayout'

export default function HomeScreen({ navigation }) {
    return (
        <HomeScreenLayout
            navigation={navigation}
        />
    )
}