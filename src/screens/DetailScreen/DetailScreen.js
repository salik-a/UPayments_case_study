import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import DetailScreenLayout from './DetailScreenLayout/DetailScreenLayout'

import ProductsServices from '../../services/productsServices'

import { topWarningShowMessage } from '../../helpers/topWarningShowMessage'

export default function DetailScreen({ route, navigation }) {

    const productsServices = new ProductsServices()

    const handleDeleteProduct = (id) => {
        productsServices.deleteProduct(id)
            .then(res => {
                console.log(res.data)
                topWarningShowMessage('Product deleted succesfully', 'success')
                navigation.goBack()
            })
            .catch(err => {
                console.log(err)
                topWarningShowMessage('Product delete failed', 'danger')
            })
    }

    return (
        <DetailScreenLayout
            productDetailData={route.params}
            handleDeleteProduct={handleDeleteProduct}

        />
    )
}