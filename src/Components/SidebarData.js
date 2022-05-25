import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'The Game',
        path: '/game',
        icon: <IoIcons.IoGameControllerOutline />,
        cName: 'nav-text'
    },
    {
        title: 'The Project',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    }, {
        title: 'Video',
        path: '/video',
        icon: <AiIcons.AiOutlineVideoCamera />,
        cName: 'nav-text'
    },


]