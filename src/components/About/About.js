import { Link } from 'react-router-dom';
import styles from './About.module.scss';

const About = () => {
	return (
		<div className={styles.About}>
			<h4>Version 1.0.0</h4>
			<Link to='/'>Go Back</Link>
		</div>
	);
}

export default About;
