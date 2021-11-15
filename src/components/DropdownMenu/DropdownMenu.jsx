import './DropdownMenu.scss';
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

export const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const parameters = useMemo(() => ['home', 'price>500', 'price<500', 'river'], []);

  let query = useQuery().get('filter');

  return (
    <>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='dropdown'>
        sort: {query || 'select'}
      </div>

      {isDropdownOpen ? (
        <div className='dropdown-items'>
          {parameters.map((item, index) => {
            return (
              <div key={index} onClick={() => setIsDropdownOpen(false)} className='dropdown-item'>
                <Link to={`/?filter=${item}`} style={{ textDecoration: 'none', color: 'black', display: 'flex', justifyContent: 'center' }}>
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
