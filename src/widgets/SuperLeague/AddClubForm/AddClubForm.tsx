import './AddClubForm.scss';
import TextInput from '../../../components/TextInput/TextInput.tsx';
import Button from '../../../components/Button/Button.tsx';

type AddClubFormProps = {
	club: string;
	parentLeague: string;
	inputClub: { clubName: string; parentLeague: string };
	onChange: (field: 'clubName' | 'parentLeague', value: string) => void;
	onClick: () => void;
};

const AddClubForm = ({
	                     club,
	                     parentLeague,
	                     inputClub,
	                     onChange,
	                     onClick,
                     }: AddClubFormProps) => {
	return (
		<div className="AddClubForm">
			<TextInput text={club} inputValue={inputClub.clubName}
			           onChange={(value) => onChange('clubName', value)} />
			<TextInput text={parentLeague} inputValue={inputClub.parentLeague}
			           onChange={(value) => onChange('parentLeague', value)} />
			<Button className="promte-club"title={'Promote Club'} onClick={onClick} />
		</div>
	);
};

export default AddClubForm;