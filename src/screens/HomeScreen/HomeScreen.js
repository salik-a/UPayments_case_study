import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import HomeScreenLayout from './HomeScreenLayout/HomeScreenLayout'

import ProductsServices from '../../services/productsServices'
import CategoriesServices from '../../services/categoriesServices'

import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen({ navigation }) {

    const productsServices = new ProductsServices()
    const categoriesServices = new CategoriesServices()
    const newProduct = useSelector(state => state.general.newProduct)
    const deletedProduct = useSelector(state => state.general.deletedProduct)

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
                //console.log(res.data)
                setFilteredProductsData(res.data)
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

    useEffect(() => {
        if (newProduct) {
            setFilteredProductsData(productsData => [...productsData, newProduct])
        }
    }, [newProduct])

    useEffect(() => {
        if (deletedProduct) {
            setFilteredProductsData(productsData => productsData.filter(item => item.id !== deletedProduct))
        }
    }, [deletedProduct])


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