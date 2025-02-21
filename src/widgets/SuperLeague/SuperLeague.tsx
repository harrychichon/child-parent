import "./SuperLeague.scss";
import { useState } from "react";
import ClubCard from "./ClubCard/ClubCard.tsx";
import AddClubForm from "./AddClubForm/AddClubForm.tsx";
import Modal from "../../components/modal/modal.tsx";

const SuperLeague = () => {
  const [clubs, setClubs] = useState<
    {
      clubName: string;
      parentLeague: string;
    }[]
  >([
    { clubName: "Manchester United", parentLeague: "Premier League" },
    { clubName: "Arsenal", parentLeague: "Premier League" },
    { clubName: "Grunden Bois", parentLeague: "ZTV" },
    { clubName: "Barcelona", parentLeague: "La Liga" },
    { clubName: "AC Milan", parentLeague: "Serie A" },
  ]);

  const [inputClub, setInputClub] = useState<{
    clubName: string;
    parentLeague: string;
  }>({
    clubName: "",
    parentLeague: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<{
    clubName: string;
    parentLeague: string;
  } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClickRelegate = (index: number) => {
    setClubs(clubs.filter((_, i) => i !== index));
  };

  const handleClickPromote = () => {
    if (inputClub.clubName && inputClub.parentLeague) {
      setClubs([...clubs, inputClub]);
      setInputClub({ clubName: "", parentLeague: "" });
    }
  };

  const handleChange = (field: "clubName" | "parentLeague", value: string) => {
    setInputClub((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditClub = (index: number) => {
    setSelectedClub(clubs[index]);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleSaveClub = (updatedClub: {
    clubName: string;
    parentLeague: string;
  }) => {
    if (selectedIndex !== null) {
      const updatedClubs = [...clubs];
      updatedClubs[selectedIndex] = updatedClub;
      setClubs(updatedClubs);
    }
    setIsModalOpen(false);
    setSelectedClub(null);
    setSelectedIndex(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
    setSelectedIndex(null);
  };

  return (
    <div className="ClubContainer">
      <h2>Super League</h2>
      <AddClubForm
        club={"Club..."}
        parentLeague={"Parent league..."}
        inputClub={inputClub}
        onChange={handleChange}
        onClick={handleClickPromote}
      />
      <section>
        {clubs.map((club, index) => (
          <ClubCard
            key={index}
            club={club}
            index={index}
            deleteClub={handleClickRelegate}
            editClub={() => handleEditClub(index)}
          />
        ))}
      </section>
      {isModalOpen && selectedClub && (
        <Modal
          club={selectedClub}
          onSave={handleSaveClub}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SuperLeague;
