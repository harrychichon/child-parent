import './Button.scss';

type ButtonProps = {
	title: string,
	handleClick: () => void;
}

const Button = ({title, handleClick}: ButtonProps) => {

	return (
		<button onClick={handleClick} className="Button">
			{title}
		</button>
	);
};

export default Button;