import './Header.scss';
import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link className='header-logo' to={'/?filter=home'} style={{ textDecoration: 'none', color: 'black' }}>
        fish market
      </Link>
      <div className='header-sort'>
        <div className='header-dropdown'>
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};
export const MemoHeader = React.memo(Header);
