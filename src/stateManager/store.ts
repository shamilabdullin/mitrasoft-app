import { configureStore } from "@reduxjs/toolkit" 
import { rootReducer } from "./reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: rootReducer,

	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(sagaMiddleware)
	
})

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)