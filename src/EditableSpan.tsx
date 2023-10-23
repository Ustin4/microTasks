import React, { useState, ChangeEvent } from 'react';

export const EditableSpan = (props: any) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    };

    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title); // Сохраняем текущее значение title
    };

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    return editMode ? (
        <input
            autoFocus
            onBlur={activateViewMode}
            onChange={changeTitle}
            type="text"
            value={title}
        />
    ) : (
        <span onDoubleClick={activateEditMode}>{props.value}</span>
    );
};