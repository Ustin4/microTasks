import React from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'

type StudentType = {
    id: number
    name: string
    age: number
}

const initState = {
    students:
        [
            {id: 1, name: 'Bob', age: 23},
            {id: 2, name: 'Alex', age: 22}
        ] as Array<StudentType>
}
type AddStudentAT = {
    type: 'ADD-STUDENT'
    name: string
    age: number
    id: number
}

type InitialStateType = typeof initState

const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
    switch (action.type) {
        case 'ADD-STUDENT':
            return {
                ...state,
                students: [...state.students, {
                    name: action.name,
                    age: action.age,
                    id: action.id
                }]
            }
    }
    return state
}

const appStore = createStore(studentsReducer)
type RootStateType = ReturnType<typeof studentsReducer>


const StudentList = () => {
    const students = useSelector((state: RootStateType) => state.students)
    return (
        <ul>
            {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
        </ul>
    )
}
const App = () => {
    return <StudentList/>
}

ReactDOM.render(<div>
        <Provider store={appStore}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('root')
)

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?