import './ClubCard.scss';
import Button from '../../../components/Button/Button.tsx';

type ClubItemProps = {
	name: string,
	index: number,
	deleteClub: (index: number) => void;
}

const ClubCard = ({name, index, deleteClub}: ClubItemProps) => {
	return (
		<>
			<article className="ClubCard" id={name.replace(' ', '')}>
				{name}
				<Button title="Relegate" handleClick={() => {
					deleteClub(index);
				}}/>
			</article>
		</>
	);
};

export default ClubCard;