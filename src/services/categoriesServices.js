import axios from "axios";

export default class CategoriesServices {
    getAllCategories() {
        return axios.get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
    }

    getCategoryDetail(id) {
        return axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/${id}`)
    }

}