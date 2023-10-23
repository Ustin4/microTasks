import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// На странице отображен список юзеров из 3-человек.
// Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// при этом запрещено в ответе использовать символы вопроса и амперсанда.
// В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)


// 🖥 Пример ответа: return instance.get('users=pageSize=3=pageNumber=2')