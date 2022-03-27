import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import React from 'react'

import styles from './HomeScreenLayout.style'

import ProductCard from '../Components/ProductCard/ProductCard';
import CreateButton from '../Components/CreateButton/CreateButton';

export default function HomeScreenLayout({
    navigation,
    productsData,
    productsDataLoading,
    categoriesData,
    categoriesDataLoading,
    handleCategorySelect,
    selectedCategorylist,
    filteredProductsData,
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

            <Text style={styles.headerStyle}>UPaymentStore</Text>
            {categoriesDataLoading ?
                (<SafeAreaView style={styles.indicatorCategories}>
                    <ActivityIndicator size="small" color="black" />
                </SafeAreaView>)
                :
                (<View style={styles.categoriesCardContainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {categoriesData.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.categoriesCard, selectedCategorylist.includes(item.name) ? styles.categoriesCardSelected : null]}
                                onPress={() => { handleCategorySelect(item.name) }}
                            >
                                <Text style={[styles.categoriesCardText, selectedCategorylist.includes(item.name) ? styles.categoriesCardSelectedText : null]}>{item.name} </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>)
            }

            {productsDataLoading ?
                (<SafeAreaView style={styles.indicator}>
                    <ActivityIndicator size="large" color="black" />
                </SafeAreaView>)
                :
                <FlatList
                    style={styles.listStyle}
                    data={filteredProductsData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index * 100}
                    //refreshing={refreshing}
                    //onRefresh={onRefresh}
                    ListEmptyComponent={renderListEmptyComponent}
                    numColumns={'2'}
                    showsVerticalScrollIndicator={false}
                />
            }

            <CreateButton onPress={() => {
                navigation.navigate('CreateScreen')
            }} />
        </SafeAreaView>
    )
}