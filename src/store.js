import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

export default initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )
    sagaMiddleware.run(rootSaga)

    return store
}

// export default initialState =>
//     createStore(
//         rootReducer,
//         initialState,
//         compose(
//             window.devToolsExtension
//                 ? window.__REDUX_DEVTOOLS_EXTENSION__()
//                 : f => f
//         )
//     );