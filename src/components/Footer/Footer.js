import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<p>Copyright &copy; 2021</p>
			<Link to="/about">About</Link>
		</footer>
	);
}

export default Footer;
