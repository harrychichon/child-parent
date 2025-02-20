import './ClubCard.scss';
import Button from '../../../components/Button/Button.tsx';

export type ClubCardType = {
	clubName: string,
	parentLeague: string
}

type ClubCardProps = {
	club: ClubCardType
	index: number,
	deleteClub: (index: number) => void;
}

const ClubCard = ({club, index, deleteClub}: ClubCardProps) => {
	return (
		<>
			<article className="ClubCard" id={club.clubName.replace(' ', '')}>
				<div className="ClubName">
					{club.clubName}
				</div>
				<div className="ParentLeague">{club.parentLeague}</div>
				<Button title="Relegate" onClick={() => {
					deleteClub(index);
				}} />
			</article>
		</>
	);
};

export default ClubCard;