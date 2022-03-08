import { combineReducers } from 'redux'
import { postPage } from './PostPageReducer'

const rootReducer = combineReducers({
  postPage: postPage,
})

export default rootReducer
