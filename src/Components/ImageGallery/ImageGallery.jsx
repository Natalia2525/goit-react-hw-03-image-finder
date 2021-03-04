import st from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={st.ImageGallery}>
      {<ImageGalleryItem gallery={gallery} />}
    </ul>
  );
};

export default ImageGallery;
