import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './ProductCard.style'

export default function ProductCard({ itemData, onPress }) {
    console.log(itemData)
    const isImageAvailable = itemData.avatar.slice(0, 5) === 'https'
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.8}
        >

            <Image
                style={styles.productImage}
                source={{
                    uri: isImageAvailable ? itemData.avatar : 'https://via.placeholder.com/150',
                }}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.productName}>{itemData.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.productPrice}>{itemData.price}</Text>
                    <Text style={styles.icon}>✎</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}