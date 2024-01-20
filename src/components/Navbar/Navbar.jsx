import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HeaderSocials from '../HeaderSocials/HeaderSocials';

import Home from '../../pages/Home/Home';

export default function Navbar() {
    const [menuOpenend, setMenuOpenend] = useState(false);

  return (
    <>
      <header className="header">
      <div className="header__wrap container">
          <Link to="/" className="header__logo"></Link>
          <nav
            className={menuOpenend ? 'header__menu active' : 'header__menu'}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="h-menu__wrap">
              <div className="h-menu__btn">
                  Call +79097982752
              </div>
            </ul>
          </nav>

        </div>


      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery"  />
        <Route path="/price"  />
        <Route path="/contacts" />
        <Route path="*" />
      </Routes>
    </>
  );
}
