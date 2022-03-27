import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import HomeScreenLayout from './HomeScreenLayout/HomeScreenLayout'

import ProductsServices from '../../services/productsServices'
export default function HomeScreen({ navigation }) {

    const productsServices = new ProductsServices()

    const [productsData, setProductsData] = useState([])
    const [productsDataLoading, setproductsDataLoading] = useState(true)


    useEffect(() => {
        productsServices.getAllProducts()
            .then(res => {
                //console.log(res.data)
                setProductsData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setproductsDataLoading(false)
            })
    }, [])


    return (
        <HomeScreenLayout
            navigation={navigation}
            productsData={productsData}
            productsDataLoading={productsDataLoading}
        />
    )
}