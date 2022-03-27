import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import HomeScreenLayout from './HomeScreenLayout/HomeScreenLayout'

import ProductsServices from '../../services/productsServices'
import CategoriesServices from '../../services/categoriesServices'

export default function HomeScreen({ navigation }) {

    const productsServices = new ProductsServices()
    const categoriesServices = new CategoriesServices()

    const [productsData, setProductsData] = useState([])
    const [productsDataLoading, setproductsDataLoading] = useState(true)
    const [categoriesData, setCategoriesData] = useState([])
    const [categoriesDataLoading, setCategoriesDataLoading] = useState(true)
    const [selectedCategorylist, setSelectedCategorylist] = useState([])
    const [filteredProductsData, setFilteredProductsData] = useState([])

    const handleCategorySelect = (categoryName) => {
        if (selectedCategorylist.includes(categoryName)) {
            setSelectedCategorylist(selectedCategorylist.filter(item => item !== categoryName))
        } else {
            setSelectedCategorylist(exInfos => { return [...exInfos, categoryName] })
        }
    }

    useEffect(() => {
        categoriesServices.getAllCategories()
            .then(res => {
                //console.log(res.data)
                setFilteredProductsData(res.data)
                setCategoriesData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setCategoriesDataLoading(false)
            })

        productsServices.getAllProducts()
            .then(res => {
                console.log(res.data)
                setProductsData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setproductsDataLoading(false)
            })


    }, [])

    useEffect(() => {
        if (selectedCategorylist.length > 0) {

            setFilteredProductsData(productsData.map(item => {
                if (selectedCategorylist.includes(item?.category)) {
                    return item
                }
            }))
        }
        else {
            setFilteredProductsData(productsData)
        }
    }, [selectedCategorylist])


    return (
        <HomeScreenLayout
            navigation={navigation}
            productsData={productsData}
            productsDataLoading={productsDataLoading}
            categoriesData={categoriesData}
            categoriesDataLoading={categoriesDataLoading}
            handleCategorySelect={handleCategorySelect}
            selectedCategorylist={selectedCategorylist}
            filteredProductsData={filteredProductsData}
        />
    )
}