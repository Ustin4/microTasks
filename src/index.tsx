import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'

// API
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const api = {
    me() {
        return instance.get('auth/me?delay=3')
    },
}


// Reducer
const initState = {
    isInitialized: false,
    isLoading: false,
    isLoggedIn: false
}
type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'SET_IS_INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        case 'SET_LOADING':
            return {...state, isLoading: action.isLoading}
        case 'SET_IS_LOGGED_IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

// Store
const rootReducer = combineReducers({app: appReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const setIsInitialized = (isInitialized: boolean) => ({type: 'SET_IS_INITIALIZED', isInitialized} as const)
const setLoading = (isLoading: boolean) => ({type: 'SET_LOADING', isLoading} as const)
const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'SET_IS_LOGGED_IN', isLoggedIn} as const)
type ActionsType =
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setIsLoggedIn>

// Thunk
const me = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true))
    api.me()
        .then((res) => {
            dispatch(setIsLoggedIn(true))
        })
        .finally(() => {
            dispatch(setLoading(false))
            dispatch(setIsInitialized(true))
        })

}

// Components
const Loader = () => <h2>🔘 Крутилка...</h2>

const Login = () => {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return <h2>🐣 Login</h2>
}
const Profile = () => {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

    if (!isInitialized || isLoading) {
        return <Loader />
    }

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return <h2>😎 Profile </h2>
}

export const App = () => {
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

    const dispatch = useAppDispatch()



    useEffect(() => {
        dispatch(me())
    }, [])

    return (
        <Routes>
            <Route path={'/'} element={<Profile/>}/>
            <Route path={'login'} element={<Login/>}/>
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

// 📜 Описание:
// После старта / обновления приложения мы видим Login, а потом через 3 секунды Profile
// Но это плохое поведение.
// Ваша задача написать код при котором пользователя не будет редиректить на Login,
// пока приложение не проинициализировано,
// а во время ожидания ответа с сервера он будет видеть Loader

// 🖥 Пример ответа: <Loader/>
