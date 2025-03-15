import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({
  contact: { name, number, id },
  onDeleteBtn,
}) {
  return (
    <>
      <div className={css.card}>
        <div className={css.infoWrp}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.infoWrp}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.delete} onClick={() => onDeleteBtn(id)}>
        Delete
      </button>
    </>
  );
}
