import { combineReducers } from 'redux'
import auth from './auth'
// import visibilityFilter from './visibilityFilter'

const vd = combineReducers({
  auth,
  // visibilityFilter
})

export default vd