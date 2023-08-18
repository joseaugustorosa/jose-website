import React from 'react';
import '../styles/header.css'

function Header() {
    return (
      <div className='container_header'>
        <ul className='group_list_header_name'>
          <li className='list_item_header_name'>José Augusto Rosa</li>
        </ul>
        <ul className='group_list_header'>
          <li className='list_item_header'>Sobre mim</li>
          <li className='list_item_header'>Experiências</li>
          <li className='list_item_header'>Skills</li>
        </ul>
      </div>
    );
}

export default Header;