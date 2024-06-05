import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from './AddModal';
import { useState } from "react";
import { Movie } from '../types/types';

interface CrudButtonsProps {
  onDelete: () => void;
  onUpdate: (updatedMovie: Movie) => Promise<void>;
  movie: Movie;   
}

export const CrudButtons = ({ onDelete, onUpdate, movie }: CrudButtonsProps): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const buttons: Array<{ icon: IconProp, key: string, color: string, hover: string, margin: string, action?: () => void }> = [
    { icon: faEdit, key: 'faEdit', color: 'bg-slate-500', hover: 'hover:bg-yellow-500', margin: 'mr-2', action: toggleModal },
    { icon: faDeleteLeft, key: 'faDeleteLeft', color: 'bg-slate-900', hover: 'hover:bg-red-500', margin: 'ml-2', action: onDelete },
  ];

  return (
    <div className="container">
      {buttons.map(({ icon, color, margin, hover, key, action }) => (
        <button
          key={key}
          className={`button w-full ${color} ${hover} my-1 rounded-xl ${margin}`}
          onClick={action}
        >
          <FontAwesomeIcon icon={icon} size={'lg'} color={'white'} />
        </button>
      ))}

      <Modal isOpen={isModalOpen} toggleModal={toggleModal} onUpdateMovie={onUpdate} movie={movie} />
    </div>
  );
}
