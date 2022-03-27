import { View, Text, SafeAreaView, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './DetailScreenLayout.style'

export default function DetailScreenLayout({
    productDetailData,
    handleDeleteProduct
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
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => handleDeleteProduct(productDetailData.id)}
                    >
                        <Text style={styles.deleteText}>Delete 🗑</Text>
                    </TouchableOpacity>
                    <Text style={styles.productPrice}>${productDetailData.price}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}