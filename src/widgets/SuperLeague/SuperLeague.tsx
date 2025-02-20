import './SuperLeague.scss';
import {useState} from 'react';
import ClubCard from './ClubCard/ClubCard.tsx';
import AddClubForm from './AddClubForm/AddClubForm.tsx';


const SuperLeague = () => {
	const [clubs, setClubs] = useState<{
		clubName: string;
		parentLeague: string
	}[]>([
		{clubName: 'Manchester United', parentLeague: 'Premier League'},
		{clubName: 'Arsenal', parentLeague: 'Premier League'},
		{clubName: 'Grunden Bois', parentLeague: 'ZTV'},
		{clubName: 'Barcelona', parentLeague: 'La Liga'},
		{clubName: 'AC Milan', parentLeague: 'Serie A'},
	]);

	const [inputClub, setInputClub] = useState<{
		clubName: string;
		parentLeague: string
	}>({
		clubName: '',
		parentLeague: '',
	});

	const handleClickRelegate = (index: number) => {
		setClubs(clubs.filter((_, i) => i !== index));
	};

	const handleClickPromote = () => {
		if (inputClub.clubName && inputClub.parentLeague) {
			setClubs([...clubs, inputClub]);
			setInputClub({clubName: '', parentLeague: ''});
		}
	};

	const handleChange = (field: 'clubName' | 'parentLeague', value: string) => {
		setInputClub((prev) => ({...prev, [field]: value}));
	};

	return (
		<div className="ClubContainer">
			<h2>Super League</h2>
			<AddClubForm
				club={'Club...'}
				parentLeague={'Parent league...'}
				inputClub={inputClub}
				onChange={handleChange}
				onClick={handleClickPromote}
			/>
			<section>
				{clubs.map((club, index) => (
					<ClubCard key={index} club={club} index={index}
					          deleteClub={handleClickRelegate} />
				))}
			</section>
		</div>
	);
};

export default SuperLeague;