/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useState, useEffect } from 'react';
import { Spiner } from '../Spiner/Spiner';
import { fetchFish } from '../../api/index';
import { useQuery } from '../../hooks/useQuery';
import './Tiles.scss';

const Tile = React.lazy(() => import('./Tile/Tile'));

export const Tiles = ({ setFishForPopup, setIsPopupOpened }) => {

  const [fishData, setFishData] = useState();
  const [sortedFish, setSortedFish] = useState();
  const getFish = async () => {
    try {
      const fetchedFish = await fetchFish();
      if (query) {
        filterFish(fetchedFish);
      }
      setFishData(fetchedFish);
    } catch (e) {
      console.log(e);
    }
  };

  let query = useQuery().get('filter');

  useEffect(() => {
    getFish();
  }, []);

  const filterFish = (fetchedFish) => {
    switch (query) {
      case 'price<500':
        setSortedFish(Object.fromEntries(Object.entries(fetchedFish).filter((elem) => elem[1].price < 500)));
        break;
      case 'price>500':
        setSortedFish(Object.fromEntries(Object.entries(fetchedFish).filter((elem) => elem[1].price >= 500)));
        break;
      case 'river':
        setSortedFish(Object.fromEntries(Object.entries(fetchedFish).filter((elem) => elem[1].availability.location === 'River')));
        break;
      case 'home':
        setSortedFish(fetchedFish);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (fishData) {
      filterFish(fishData);
    }
  }, [query]);

  return (
    <>
      <div className='tiles'>
        {sortedFish || fishData
          ? Object.keys(sortedFish || fishData).map((key, index) => {
              return (
                <Suspense fallback={<Spiner />}>
                  <Tile
                    key={index}
                    fish={sortedFish ? sortedFish[key] : fishData[key]}
                    setIsPopupOpened={setIsPopupOpened}
                    setFishForPopup={setFishForPopup}
                  />
                </Suspense>
              );
            })
          : null}
      </div>
    </>
  );
};
