import { FaTimes } from 'react-icons/fa'
import styles from './Task.module.scss';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`${styles.Task} ${task.reminder ? styles.reminder : ''}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3
				className={styles.Task__title}
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{task.text}
				<FaTimes
				 	style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{task.day}
			</p>
		</div>
	)
}

export default Task
