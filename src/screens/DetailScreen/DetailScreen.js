import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import DetailScreenLayout from './DetailScreenLayout/DetailScreenLayout'

import ProductsServices from '../../services/productsServices'

export default function DetailScreen({ route }) {

    // const productsServices = new ProductsServices()

    // const [productDetailData, setProductDetailData] = useState({})
    // const [productDetailDataLoading, setProductDetailDataLoading] = useState(true)


    // useEffect(() => {
    //     productsServices.getProductDetail(route.params)
    //         .then(res => {
    //             //console.log(res.data)
    //             setProductDetailData(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         .finally(() => {
    //             setProductDetailDataLoading(false)
    //         })
    // }, [])


    return (
        <DetailScreenLayout
            productDetailData={route.params}

        />
    )
}