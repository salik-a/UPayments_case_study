import { View, Text, SafeAreaView, Button, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'

import styles from './HomeScreenLayout.style'

import ProductCard from '../Components/ProductCard/ProductCard';

export default function HomeScreenLayout({
    navigation,
    productsData,
    productsDataLoading
}) {
    const renderItem = ({ item, index }) => (


        <ProductCard
            itemData={item}
            onPress={() => {
                navigation.navigate('DetailScreen', item)
            }}
        />

    );

    const renderListEmptyComponent = () => (
        <View style={styles.emptyListContainer}>
            {/* <NoApproval width={'100%'} height={Dimensions.get('window').width - 100} /> */}
            <Text style={styles.emptyListText}>
                No data to show
            </Text>
        </View>
    )


    return (
        <SafeAreaView style={styles.container}>

            <Text>HomeScreenLayout</Text>

            {productsDataLoading ?
                (<SafeAreaView style={styles.indicator}>
                    <ActivityIndicator size="large" color="black" />
                </SafeAreaView>)
                :
                <FlatList
                    style={styles.listStyle}
                    data={productsData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id}
                    //refreshing={refreshing}
                    //onRefresh={onRefresh}
                    onEndReachedThreshold={0}
                    ListEmptyComponent={renderListEmptyComponent}
                    numColumns={'2'}
                />
            }
        </SafeAreaView>
    )
}