import { configureStore } from "@reduxjs/toolkit" 
import { rootReducer } from "./reducers"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => {
	// 	getDefaultMiddleware().concat(sagaMiddleware)
	// }
})