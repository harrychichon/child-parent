import { useState } from "react";
import "./modal.scss";

type ModalProps = {
  club: {
    clubName: string;
    parentLeague: string;
  };
  onSave: (updatedClub: { clubName: string; parentLeague: string }) => void;
  onClose: () => void;
};

const Modal = ({ club, onSave, onClose }: ModalProps) => {
  const [clubName, setClubName] = useState(club.clubName);
  const [parentLeague, setParentLeague] = useState(club.parentLeague);

  const handleSave = () => {
    onSave({ clubName, parentLeague });
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal-box">
        <h3 className="modal-header">Edit Club</h3>
        <div className="modal-content">
          <label>
            Club Name:
            <input
              type="text"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
            />
          </label>
          <label>
            Parent League:
            <input
              type="text"
              value={parentLeague}
              onChange={(e) => setParentLeague(e.target.value)}
            />
          </label>
        </div>
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
