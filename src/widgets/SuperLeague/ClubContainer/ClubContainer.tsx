import './ClubContainer.scss';
import {useState} from 'react';
import ClubCard from '../ClubCard/ClubCard.tsx';

const ClubContainer = () => {
	const [clubs, setClubs] = useState<string[]>(
		['Manchester United', 'Arsenal', 'Grunden Bois', 'Barcelona', 'AC Milan'],
	);

	const deleteClub = (index: number) => {
		setClubs(clubs.filter((_, i) => i !== index));
	};
	return (
		<>
			<div className="ClubContainer">
				<h2>Super League</h2>
				<section>{clubs.map((club, index) => (
					<ClubCard name={club} index={index} deleteClub={deleteClub}/>
				))}
				</section>

			</div>
		</>
	);

};


export default ClubContainer;