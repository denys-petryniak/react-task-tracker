import PropTypes from 'prop-types'
import styles from './Button.module.scss';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={styles.btn}
    >
        { text }
    </button>
  )
}

Button.defaultProps = {
  color: 'blue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
