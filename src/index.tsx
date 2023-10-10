import {useFormik} from 'formik';
import React from 'react'
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,  Route, Routes, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';


// Types
type LoginFieldsType = {
    email: string
    password: string
}
//test commit
// API
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const api = {
    login(data: LoginFieldsType) {
        return instance.post('auth/login', data)
    },
}


// Reducer
const initState = {
    isLoading: false,
    error: null as string | null,
    isLoggedIn: false,
}

type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'APP/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/IS-LOADING':
            return {...state, isLoading: action.isLoading}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// Actions
const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
type ActionsType =
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setError>


// Thunk
const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    api.login(values)
        .then((res) => {
            dispatch(setIsLoggedIn(true))
            alert('Вы залогинились успешно')

        })
        .catch((e) => {
            dispatch(setError(e.response.data.errors))
        })
        .finally(() => {
            dispatch(setLoadingAC(false))
            setTimeout(() => {
                dispatch(setError(null))
            }, 3000)
        })
}

// Store
const rootReducer = combineReducers({
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
export const Loader = () => {
    return <h1>Loading ...</h1>
}

// Profile
export const Profile = () => {
    return <h2>😎 Profile</h2>
}

// Login
export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const error = useAppSelector(state => state.app.error)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)

   if(isLoggedIn)navigate('/profile');

    const formik = useFormik({
        initialValues: {
            email: 'darrell@gmail.com',
            password: '123',
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        }
    });

    return (
        <div>
            {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
            {isLoading && <Loader/>}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input placeholder={'Введите email'}
                           {...formik.getFieldProps('email')}/>
                </div>
                <div>
                    <input type={'password'}
                           placeholder={'Введите пароль'}
                           {...formik.getFieldProps('password')}/>
                </div>
                <button type="submit">Залогиниться</button>
            </form>
        </div>
    );
}

// App
export const App = () => {
    return (
        <Routes>
            <Route path={''} element={<Login/>}/>
            <Route path={'profile'} element={<Profile/>}/>
        </Routes>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)


// 📜 Описание:
// ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить успешный запрос.
// Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
// Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.

// Напишите правильную строку кода
// 🖥 Пример ответа:  console.log('If login => redirect to profile')
