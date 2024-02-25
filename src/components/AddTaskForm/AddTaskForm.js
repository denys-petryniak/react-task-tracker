import React from "react";
import { useState } from 'react';
import styles from './AddTaskForm.module.scss';
import btnStyles from '../UI/Button/Button.module.scss';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!text) {
            alert('Please add a task')
            return
        };
        
        onAdd({ text, day, reminder }) 

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className={styles.addForm} onSubmit={onSubmit}>
            <div className={styles.formControl}>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                />
            </div>
            <div className={styles.formControl}>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => {setDay(e.target.value)}}
                />
            </div>
            <div className={`${styles.formControl} ${styles.formControlCheck}`}>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => {setReminder(e.currentTarget.checked)}}
                />
            </div>
            <input
                type='submit'
                value='Save Task'
                className={`${btnStyles.btn} ${btnStyles.btnBlock}`}
            />
        </form>
    )
}

export default AddTask
