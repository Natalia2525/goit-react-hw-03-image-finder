import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import { fetchImages } from './Components/service';
import ImageGallery from './Components/ImageGallery';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setsearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);

    return fetchImages({ page, searchQuery })
      .then(hits => setImages(hits))
      // .then(() => {
      //   window.scrollTo({
      //     top: document.body.scrollHeight,
      //     behavior: 'smooth',
      //   });
      // })
      .catch(error => toast.error('Error'))
      .finally(() => setIsLoading(false));
  }, [page, searchQuery]);

  const scrollTo = () => {
    setTimeout(() => {
      window.scrollTo(
        {
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        },
        2000,
      );
    });
  };
  const handleSubmit = searchQuery => {
    setsearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery gallery={images} />
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default App;
