import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import PetModal from './PetModal';
// import { useState } from 'react';

function PetsTableItem(props) {
  const { pet } = props;
  // const [modalShow, setModalShow] = useState(false);

  const birthDate = new Date(pet.date_of_birth).toISOString().split('T')[0];

  return (
    <>
      <td className='tableItem'><img className="petTableImg" src={pet.pet_img_url}
        alt={`${pet.name} the ${pet.variant}`}/> </td>
      <td className='tableItem'>{pet.name}</td>
      <td className='tableItem'>{birthDate}</td>
      <td className='tableItem'>{pet.variant}</td>
      <td className='tableItem'>{pet.food}</td>
      <td className='tableItem'>{pet.weight} kg</td>
      <td className='tableItem'>{pet.comment}</td>
    </>
  );
}

export default PetsTableItem;
