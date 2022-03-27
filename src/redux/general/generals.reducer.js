

const INITIAL_STATE = {
  newProduct: null,
  deletedProduct: null

}

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NEW_PRODUCT':
      return {
        ...state,
        newProduct: action.payload
      }
    case 'SET_DELETED_PRODUCT':
      return {
        ...state,
        deletedProduct: action.payload
      }

    default:
      return state
  }
}
export default generalReducer
