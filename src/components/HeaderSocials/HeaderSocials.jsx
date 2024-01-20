import React from 'react';

export default function HeaderSocials({ onClickMenu, onCloseMenu }) {
  return (
    <div>
      <ul className="header__socials">
        <div
          onClick={() => onCloseMenu(!onClickMenu)}
          className={
            onClickMenu ? 'header__open-menu active' : 'header__open-menu'
          }
        >
          <span></span>
        </div>
      </ul>
    </div>
  );
}
