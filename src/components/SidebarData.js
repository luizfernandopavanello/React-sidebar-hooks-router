import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDropDownSFill />,
    iconOpened: <RiIcons.RiArrowDropUpSFill />,
    subNav: [
      {
        title: 'Cyber',
        path: '/products/cyber',
        icon: <GiIcons.GiLightningMask/>,
      },
      {
        title: 'Eletric',
        path: '/products/cyber',
        icon: <GiIcons.GiCube/>,
      }
    ],
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoIosPeople />,
    iconClosed: <RiIcons.RiArrowDropDownSFill />,
    iconOpened: <RiIcons.RiArrowDropUpSFill />,
    subNav: [
      {
        title: 'Devs',
        path: '/products/cyber',
        icon: <GiIcons.GiSkullShield/>,
      }
    ],
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle/>,
    cName: 'nav-text'
  }
]