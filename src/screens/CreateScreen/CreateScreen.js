import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { topWarningShowMessage } from '../../helpers/topWarningShowMessage'

import CreateScreenLayout from './CreateScreenLayout/CreateScreenLayout'

import ProductsServices from '../../services/productsServices'

import { useSelector, useDispatch } from 'react-redux'
import { setNewProduct } from '../../redux/general/generals.actions'

export default function CreateScreen({ route, navigation }) {

    const productServices = new ProductsServices()
    const dispatch = useDispatch()

    const [createData, setCreateData] = useState({
        name: '',
        price: 0,
        category: '',
        description: '',
        avatar: '',
        developerEmail: '',
    })
    const [emptyAreas, setEmptyAreas] = useState({
        name: false,
        price: false,
        category: false,
        description: false,
        avatar: false,
        developerEmail: false,
    });

    const handleCreateProduct = () => {

        setEmptyAreas({
            name: createData.name.length === 0,
            price: createData.price === 0,
            category: createData.category.length === 0,
            description: createData.description.length === 0,
            avatar: createData.avatar.length === 0,
            developerEmail: createData.developerEmail.length === 0,
        })
        console.log(createData)
        if (createData.name === '' || createData.developerEmail === '' || createData.description === '' || createData.avatar === '' || createData.price === 0) {
            topWarningShowMessage('Please fill all fields', 'warning')

        } else if (createData.category === '') {
            topWarningShowMessage('Please select category', 'warning')

        } else {
            productServices.addProduct(createData)
                .then((res) => {
                    console.log(res.data)
                    topWarningShowMessage('Product added succesfully', 'success')
                    dispatch(setNewProduct(createData))
                    navigation.goBack()
                })
                .catch((err) => {
                    topWarningShowMessage('Something went wrong', 'danger')
                })
        }
    }

    return (
        <CreateScreenLayout
            categories={route.params}
            createData={createData}
            setCreateData={setCreateData}
            handleCreateProduct={handleCreateProduct}
            emptyAreas={emptyAreas}
        />
    )
}