import AppsIcon from '@mui/icons-material/Apps';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { NavLink } from 'react-router-dom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArchiveIcon from '@mui/icons-material/Archive';

import logo from '../../assets/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import './sidebar.module.css';

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/home',
      name: 'Home',
      icon: <HomeIcon />,
    },
    {
      path: '/calender',
      name: 'Calender',
      icon: <CalendarTodayIcon />,
    },
    {
      path: '/tasks',
      name: 'Tasks',
      icon: <AssignmentIndIcon />,
    },
    {
      path: '/departments',
      name: 'Departments',
      icon: <ApartmentIcon />,
    },
    {
      path: '/archive',
      name: 'Archive',
      icon: <ArchiveIcon />,
    },

    // {
    //   path: '/projects',
    //   name: 'Projects',
    //   icon: <ContentPasteIcon />,
    // },

    {
      path: '/settings',
      name: 'Settings',
      icon: <SettingsIcon />,
    },
  ];
  const sidebarOpenWidth = '100px';
  const sidebarClosedWidth = '0';

  return (
    <div style={{ display: 'flex', marginRight: '10px' }}>
      <div
        className="sidebar"
        style={{
          background: '#fff',

          width: isOpen ? '250px' : '60px',
          textAlign: 'center',
          transition: 'all 0.5s',
          padding: '15px',
          height: '100vh',
        }}
      >
        <div
          className="top_section"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isOpen ? '20px 15px' : '20px 18px',
          }}
        >
          <div
            className="logo"
            style={{
              display: isOpen ? 'block' : 'none',
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: isOpen ? sidebarOpenWidth : sidebarClosedWidth,
              }}
            />
          </div>
          <div
            style={{
              marginLeft: isOpen ? '50px' : '0px',
            }}
            className="bars-side"
          >
            <MenuIcon
              onClick={toggle}
              style={{
                fontSize: '30px',
                color: '#034488',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>

        {/* Rest of your JSX code with inline styles */}
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link-side"
            style={{
              display: 'flex',
              color: '#034488',
              gap: '5px',
              marginBottom: '0.2rem',
              padding: isOpen ? '10px' : '10px 5px',
            }}
          >
            <div
              className="icon"
              style={{
                padding: isOpen ? '' : '5px 0',
                transition: 'color 0.3s',
              }}
            >
              {item.icon}
            </div>
            <div
              className="link_text"
              style={{
                display: isOpen ? 'block' : 'none',

                transition: 'color 0.3s',
                color: '#a3aed0',
              }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}

        <button
          className="btn-main mt-md-4"
          style={{
            display: isOpen ? 'block' : 'none',
            position: 'absolute',
            bottom: '20px',
            left: '20px',
          }}
        >
          <span>
            <LogoutIcon />
          </span>{' '}
          Log out
        </button>
      </div>

      <Container fluid="md " className="overflow-hidden">
        <main className="content-pages mt-2 mb-2 ">
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
export default index;
