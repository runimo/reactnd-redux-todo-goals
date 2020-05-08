import { combinedReducers } from 'redux'

import todos from './todos'
import goals from './goals'
import loading from './loading'

export default combinedReducers({
  todos,
  goals,
  loading
})