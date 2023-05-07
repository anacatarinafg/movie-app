import React from 'react';
import Image from 'next/image';
// import { AiOutlineSearch } from "@react-icons/ai"


const Navbar = (props) => {
  return (
    <header>
      <nav className="navbar">
        <h2 className="navbar__logotype">Movieflix</h2>
        <input type='search' className='navbar__search' placeholder='Find a movie...' value={props.value} onChange={(event) => props.setSearch(event.target.value)}></input>
      </nav>
    </header>
  )
}

export default Navbar