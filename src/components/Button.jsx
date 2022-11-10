import '../css/button.css'

const Button = (props) => {

    const operator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=')
    };

    return (
        <button
            className={`container-button ${operator() ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.handleClick(props.children)} >
            {props.children}
        </button>
    )
}

export default Button