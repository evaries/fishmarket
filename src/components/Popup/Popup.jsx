import './Popup.scss';
import close from '../../icons/close.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Popup = ({ isPopupOpened, fishData, setIsPopupOpened }) => {
  return (
    <div style={{ display: isPopupOpened ? 'block' : 'none' }} className='popup'>
      {fishData ? (
        <div className='popup-box'>
          <div className='popup-nav'>
            <img className='popup-nav--close' src={close} onClick={() => setIsPopupOpened(false)} alt='close' />
          </div>
          <div className='popup-content'>
            <div className='popup-image'>
              <LazyLoadImage className='popup-image--img' alt={''} effect='blur' src={fishData['image_uri']} />
            </div>
            <div className='popup-info'>
              <div className='popup-description'>Name: {fishData['file-name']}</div>
              <div className='popup-description'>Price: {fishData['price']}</div>
              <div className='popup-description'>Rarity: {fishData.availability.rarity}</div>
              <div className='popup-description'>Catch phrase: {fishData['catch-phrase']}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
