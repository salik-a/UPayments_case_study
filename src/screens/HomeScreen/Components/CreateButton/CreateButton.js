import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './CreateButton.style'
export default function CreateButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    )
}