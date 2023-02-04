import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Dashboards",
	path: "/dashboards",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Our Aim",
		path: "/dashboards/aim",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Our Vision",
		path: "/dashboards/vision",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Segmentation Analytics",
	path: "/segmentation-analytics",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Service 1",
		path: "/segmentation-analytics/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 2",
		path: "/segmentation-analytics/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 3",
		path: "/segmentation-analytics/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Next Best Actions Management",
	path: "/next-best-actions-management",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Next Best Offers Management",
	path: "/next-best-offers-management",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Event 1",
		path: "/next-best-offers-management/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Event 2",
		path: "/next-best-offers-management/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Models and Data Sources Configuration",
	path: "/models-and-data-sources-configuration",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
