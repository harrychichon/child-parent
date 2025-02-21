import "./ClubCard.scss";
import Button from "../../../components/Button/Button.tsx";

export type ClubCardType = {
  clubName: string;
  parentLeague: string;
};

type ClubCardProps = {
  club: ClubCardType;
  index: number;
  deleteClub: (index: number) => void;
  editClub: () => void;
};

const ClubCard = ({ club, index, deleteClub, editClub }: ClubCardProps) => {
  return (
    <>
      <article className="ClubCard" id={club.clubName.replace(" ", "")}>
        <div className="ClubName">{club.clubName}</div>
        <div className="ParentLeague">{club.parentLeague}</div>
        <div className="ButtonContainer">
          <Button className="edit-button" title="Edit" onClick={editClub} />
          <Button
            className="relegate-button"
            title="Relegate"
            onClick={() => deleteClub(index)}
          />
        </div>
      </article>
    </>
  );
};

export default ClubCard;
