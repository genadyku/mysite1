import { all } from 'redux-saga/effects'

// import * as ACTION from '../../constants/constants'

// import * as ACTION from '../../actions/auth'
import { saga as signInSaga } from './authSaga'
import { saga as articleSaga } from './articleSaga'

export default function* rootSaga() {
	yield all([articleSaga(), signInSaga()])
}
