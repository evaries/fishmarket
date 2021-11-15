import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classnames from 'classnames';
import './Tile.scss';

const Tile = ({ setIsPopupOpened, fish, setFishForPopup }) => {

  const [fishData, setFishData] = useState({ data: {} });
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setFishData(fish);
  }, [fish]);

  const handleOnClick = () => {
    setFishForPopup(fish);
    setIsPopupOpened(true);
  };

  const classes = classnames('tile', { 'tile-hovered': isHovered });

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleOnClick} className={classes}>
      <LazyLoadImage className='tile-img' alt={''} effect='blur' src={fishData['image_uri']} />
      <div className='tile-name' style={{ visibility: isHovered ? 'visible' : 'hidden' }}>
        {fishData['file-name']}
      </div>
    </div>
  );
};

const MemoTile = React.memo(Tile);
export default MemoTile;
