import { combineReducers } from 'redux'
import generalReducer from './general/generals.reducer'

const rootReducer = combineReducers({
  general: generalReducer
})

export default rootReducer;
