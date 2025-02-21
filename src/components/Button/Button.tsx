import './Button.scss';

type ButtonProps = {
	title: string,
	onClick: () => void;
	className: string;
}

const Button = ({title, onClick}: ButtonProps) => {

	return (
		<button onClick={onClick} className="Button">
			{title}
		</button>
	);
};

export default Button;