import { useState } from 'react';
import st from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchQwery, setsearchQwery] = useState('');

  const handleChange = e => {
    setsearchQwery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchQwery);
  };

  return (
    <header className={st.Searchbar}>
      <form className={st.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={st.SearchForm_button}>
          <span className={st.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={st.SearchForm_input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
