import st from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ gallery }) => {
  return (
    <>
      {gallery.map(img => (
        <li className="ImageGalleryItem" key={img.id}>
          <img
            src={img.webformatURL}
            alt=""
            className={st.ImageGalleryItem_image}
            data-image={img.largeImageURL}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
