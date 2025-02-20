import './Button.scss';

type ButtonProps = {
	title: string,
	onClick: () => void;
}

const Button = ({title, onClick}: ButtonProps) => {

	return (
		<button onClick={onClick} className="Button">
			{title}
		</button>
	);
};

export default Button;