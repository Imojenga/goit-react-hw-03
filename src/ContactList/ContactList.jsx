import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ list, onDelete }) {
  return (
    <ul className={css.list}>
      {list.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <Contact contact={item} onDeleteBtn={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
