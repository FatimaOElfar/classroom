import React from 'react';
import logo from '../../assets/logo.png';
// import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { capitalize } from '@mui/material';

const index = () => {
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <SearchIcon fontSize="medium" className="ml-1" />
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to="./" className="hidden md:block">
          <img src={logo} alt="user" className="w-14 h-12 rounded-lg" />
        </Link>
        <Link
          to="./"
          className="bg-black text-white  rounded-lg w-10 h-10 md:w-14 md:h-12 flex justify-center items-center"
        >
          <AddIcon />
        </Link>
      </div>
    </div>
  );
};

export default index;
