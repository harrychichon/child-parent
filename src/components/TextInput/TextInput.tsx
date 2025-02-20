import './TextInput.scss';

type TextInputProps = {
	text: string;
	inputValue: string;
	onChange: (value: string) => void;
};

const TextInput = ({text, inputValue, onChange}: TextInputProps) => {
	return (
		<div className="TextInput">

			<input
				className="input"
				type="text"
				name={text.replace(' ', '')}
				id={text.replace(' ', '')}
				value={inputValue}
				onChange={(e) => onChange(e.target.value)}
				maxLength={20}
				placeholder={text}
				required
			/>
		</div>
	);
};

export default TextInput;