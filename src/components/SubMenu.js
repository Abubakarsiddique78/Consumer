import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import './Navbar'

const SubMenu = (item) => {
    return (
        <> 
            <SidebarLink to={item.path}>

            </SidebarLink>
        </>
    )
};

export default SubMenu;
