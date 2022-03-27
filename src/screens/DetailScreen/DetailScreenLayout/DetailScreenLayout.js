import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import React from 'react'

import styles from './DetailScreenLayout.style'

export default function DetailScreenLayout({
    productDetailData,

}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.productImage}
                    source={{
                        uri: productDetailData.avatar,
                    }}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.productName}>{productDetailData.name}</Text>
                <Text style={styles.productDescription}>{productDetailData.description}</Text>
                <Text style={styles.productPrice}>${productDetailData.price}</Text>
            </View>

        </SafeAreaView>
    )
}