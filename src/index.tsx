import axios from 'axios'
import React, { ChangeEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type CommentType = {
    postId: string
    id: string
    name: string
    email: string
    body: string
}

// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

const commentsAPI = {
    getComments() {
        return instance.get<CommentType[]>('comments')
    },
    createComment() {
        const payload = {body: 'Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам'}
        // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
        // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
        return instance.post<CommentType>('comments', payload)
    }
}


// App
export const App = () => {

    const [comments, setComments] = useState<CommentType[]>([])

    useEffect(() => {
        commentsAPI.getComments()
            .then((res) => {
                setComments(res.data)
            })
    }, [])

    const createPostHandler = () => {
        commentsAPI.createComment()
            .then((res: any) => {
                const newComment = res.data
                setComments([newComment, ...comments,])
            })
    };

    return (
        <>
            <h1>📝 Список комментариев</h1>
            <div style={{marginBottom: '15px'}}>
                <button style={{marginLeft: '15px'}}
                        onClick={() => createPostHandler()}>
                    Добавить новый комментарий
                </button>
            </div>

            {
                comments.map(c => {
                    return <div key={c.id}><b>Comment</b>: {c.body} </div>
                })
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// Напишите запрос на сервер для создания нового комментария.
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
//
// 🖥 Пример ответа: return Promise.resolve(payload)
