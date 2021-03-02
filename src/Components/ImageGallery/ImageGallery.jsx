import st from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={st.ImageGallery}>{gallery.map(<ImageGalleryItem />)}</ul>
  );
};

export default ImageGallery;
