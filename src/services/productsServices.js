import axios from "axios";

export default class ProductsServices {
    getAllProducts() {
        return axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')
    }

    getProductDetail(id) {
        return axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
    }

    addProduct(data) {
        return axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/', data)
    }

    deleteProduct(id) {
        return axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
    }

}