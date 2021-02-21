import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tasks from './components/Tasks/Tasks'
import AddTask from './components/AddTaskForm/AddTaskForm'
import About from './components/About/About'

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false)

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

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000 + 1)
		const newTask = { id, ...task }

		setTasks([...tasks, newTask])
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => 
			task.id === id ? { ...task, reminder: !task.reminder } : task)
		)
	}

  return (
	<Router>
		<div className="container">
			<Header
				showAdd={showAddTask}
				onAdd={() => setShowAddTask(!showAddTask)}
			/>
			<Route
				path='/'
				exact
				render={(props) => (
				<>
					{showAddTask ? (<AddTask onAdd={addTask} />) : null}
					{tasks.length ? (
						<Tasks
							tasks={tasks}
							onDelete={deleteTask}
							onToggle={toggleReminder}
						/>
					) : (
						'No tasks to show'
					)}
				</>
			)} />
			<Route path='/about' component={About} />
			<Footer />
    	</div>
	</Router>
  );
}

export default App;
