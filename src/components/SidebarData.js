import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},

	{
		title: 'Products',
		path: '/products',
		cName: 'nav-text',
		icon: <FaIcons.FaCartPlus />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpned: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Items',
				path: '/products/items',
				icon: <FaIcons.FaCartPlus />
			},
			{
				title: 'Category',
				path: '/products/category',
				icon: <FaIcons.FaCartPlus />
			}
		]
	},
	{
		title: 'Reports',
		path: '/reports',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Team',
		path: '/team',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text'
	},
	{
		title: 'Message',
		path: '/message',
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: 'nav-text'
	},
	{
		title: 'Support',
		path: '/support',
		icon: <IoIcons.IoMdHelpCircle />,
		cName: 'nav-text'
	}
];
