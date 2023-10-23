import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {FullInput} from "./Component/FullInput";
import {Button} from "./Component/Button";
import {Input} from "./Component/input";
import {EditableSpan} from "./EditableSpan";

function App() {
    const [value, setValue] = useState('Ivan');

    const handleValueChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="App">
            <EditableSpan onChange={handleValueChange} value={value}/>
        </div>
    );
}

export default App;
