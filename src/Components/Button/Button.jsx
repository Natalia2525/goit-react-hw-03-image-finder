import st from './ButtonLoadMore.module.css';

const ButtonLoadMore = () => {
  const scrollFunction = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  return (
    <button onClick={scrollFunction} className={st.button} type="button">
      Load more
    </button>
  );
};

export default ButtonLoadMore;
