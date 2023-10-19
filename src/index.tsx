import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

type UserType = {
    id: string;
    name: string;
    age: number;
}

// API
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const api = {
    getUsers() {
        return instance.get('users', {
            params: {
                pageSize: 3,
                pageNumber: 2
            }
        });
    },
}

// App
export const App = () => {

    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        api.getUsers()
            .then((res) => {
                setUsers(res.data.items)
            })
    }, [])


    return (
        <>
            <h1>👪 Список пользователей</h1>
            {
                users.map(u => {
                    return <div style={{display: 'flex', gap: '10px'}} key={u.id}>
                        <p><b>name</b>: {u.name}</p>
                        <p><b>age</b>: {u.age}</p>
                    </div>
                })
            }
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// На странице отображен список юзеров из 3-человек.
// Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// при этом запрещено в ответе использовать символы вопроса и амперсанда.
// В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)


// 🖥 Пример ответа: return instance.get('users=pageSize=3=pageNumber=2')