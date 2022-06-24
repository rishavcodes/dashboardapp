import React from 'react';
// import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TopicIcon from '@mui/icons-material/Topic';


export const SidebarData = [
    // {
    //     title: "Home",
    //     icon: <HomeIcon />,
    //     link: "./pages/Home",
    // },
    {
        title:"Profile",
        icon: <AccountCircleIcon />,
        link: "/Myprofile",
    },
    {
        title:"Courses",
        icon: <LibraryBooksIcon />,
        link: "/Courses",
    },
    {
        title:"Fees",
        icon: <AttachMoneyIcon />,
        link: "/Fees",
    },
    {
        title:"Result",
        icon: <TopicIcon />,
        link: "/Result",
    },
    {
        title:"Form",
        icon: <FormatAlignJustifyIcon />,
        link: "/Form",
    },
    {
        title:"Settings",
        icon: <SettingsIcon />,
        link: "/Settings",
    },
];