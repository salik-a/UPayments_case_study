import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import styles from './CreateScreenLayout.style'

import Input from '../Components/TextInput/TextInput'

export default function CreateScreenLayout({
    categories,
    createData,
    setCreateData,
    handleCreateProduct,
    emptyAreas,
}) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={styles.container}>
                <Input
                    title="Product Title"
                    placeholder="Product Title"
                    onChangeText={(text) => setCreateData({ ...createData, name: text })}
                    isEmpty={emptyAreas.name}
                />
                <Input
                    title="Price"
                    placeholder="Price"
                    onChangeText={(text) => setCreateData({ ...createData, price: text })}
                    isEmpty={emptyAreas.price}
                />
                <Input
                    title="Description"
                    placeholder="Description"
                    onChangeText={(text) => setCreateData({ ...createData, description: text })}
                    isEmpty={emptyAreas.price}
                />
                <Input
                    title="Image Link"
                    placeholder="Image Link"
                    onChangeText={(text) => setCreateData({ ...createData, avatar: text })}
                    isEmpty={emptyAreas.avatar}
                />
                <Input
                    title="Developer Email"
                    placeholder="Developer Email"
                    onChangeText={(text) => setCreateData({ ...createData, developerEmail: text })}
                    isEmpty={emptyAreas.developerEmail}
                />
                <View style={styles.categoriesCardContainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {categories.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.categoriesCard, createData.category == item.name ? styles.categoriesCardSelected : null]}
                                onPress={() => { setCreateData({ ...createData, category: item.name }) }}
                            >
                                <Text style={[styles.categoriesCardText, createData.category == item.name ? styles.categoriesCardSelectedText : null]}>{item.name} </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>


            </View>
            <TouchableOpacity
                style={styles.createButton}
                onPress={() => {
                    handleCreateProduct()
                }}
            >
                <Text style={styles.createButtonText}>Add Product</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}