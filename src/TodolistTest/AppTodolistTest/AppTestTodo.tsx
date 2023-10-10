
import React, {useState} from 'react';
/*
import './App.css';
import {Todolist} from './TodolistTest/Todolist';
import {v1} from 'uuid';

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}


export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();
    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todoListsID: string, id: string) {
        setTasks({...tasks, [todoListsID]: tasks[todoListsID].filter(t => t.id != id)})

        //let filteredTasks = tasks.filter(t => t.id != id);
        //setTasks(filteredTasks);
    }

    function addTask(todoListsID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListsID]: [newTask, ...tasks[todoListsID]]})

    }

    function changeStatus(todoListsID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListsID]: tasks[todoListsID].map(m => m.id === taskId ? {...m, isDone} : m)})
    }
        /!*let tasksForTodolist = tasks;*!/


        function changeFilter(todoListsID: string, value: FilterValuesType) {
            setTodolists(todolists.map(filtred => filtred.id === todoListsID ? {...filtred, filter: value} : filtred))
            /!*setTodolists(value); *!/
        }

        return (
            <div className="App">

                {todolists.map((mapTodoLists) => {

                    let tasksForTodolist = tasks[mapTodoLists.id];

                    if (mapTodoLists.filter === "active") {
                        tasksForTodolist = tasks[mapTodoLists.id].filter(t => t.isDone === false);
                    }
                    if (mapTodoLists.filter === "completed") {
                        tasksForTodolist = tasks[mapTodoLists.id].filter(t => t.isDone === true);
                    }

                    return (
                        <Todolist
                            key={mapTodoLists.id}
                            todoListsID={mapTodoLists.id}
                            title={mapTodoLists.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={mapTodoLists.filter}
                        />
                    )
                })}
            </div>
        );
    }

export default App;
*/
