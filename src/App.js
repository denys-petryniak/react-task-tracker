import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctor',
			day: 'Feb 5th at 2:30pm',
			reminder: true
		},
		{
			id: 2,
			text: 'Meeting at University',
			day: 'Feb 6th at 2:30pm',
			reminder: true
		},
		{
			id: 3,
			text: 'Shopping',
			day: 'Feb 7th at 2:30pm',
			reminder: false
		}
	])

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => 
			task.id === id ? { ...task, reminder: !task.reminder } : task)
		)
	}

  return (
    <div className="container">
      <Header />
			{tasks.length ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				'No Tasks To Show'
			)}
    </div>
  );
}

export default App;
