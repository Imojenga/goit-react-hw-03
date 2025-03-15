import css from './SearchBox.module.css';

export default function SearchBox({ inputValue, onFilter }) {
  return (
    <div className={css.search}>
      <label>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
