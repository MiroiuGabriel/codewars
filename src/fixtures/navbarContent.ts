import { v4 } from 'uuid';
import {
	ChatIcon,
	DiscussionsIcon,
	DocsIcon,
	FreestyleSparringIcon,
	LeaderboardsIcon,
	OpportunitiesIcon,
	PracticeIcon,
} from '../assets/icons';
import { navbarLinks } from './navbarLinks';

export const navbarContent = [
	{
		id: v4(),
		label: 'Home',
		description: 'Report home for your next assignment',
		link: navbarLinks.home,
		type: 'link',
	},
	{
		id: v4(),
		label: 'Training',
		type: 'section',
	},
	{
		id: v4(),
		label: 'Practice',
		description:
			'Complete challenging Kata to earn honor and ranks. Re-train to hone technique',
		link: navbarLinks.practice,
		icon: PracticeIcon,
		type: 'link',
	},
	{
		id: v4(),
		label: 'Freestyle Sparring',
		description:
			'Take turns remixing and refactoring others code through Kumite',
		link: navbarLinks.freestyleSparring,
		icon: FreestyleSparringIcon,
		type: 'link',
	},
	{
		id: v4(),
		label: 'Career',
		type: 'section',
	},
	{
		id: v4(),
		label: 'Opportunities',
		description:
			'Find your next career challenge – powered by Qualified Jobs',
		link: navbarLinks.opportunities,
		icon: OpportunitiesIcon,
		type: 'link',
		isExternal: true,
	},
	{
		id: v4(),
		label: 'Community',
		type: 'section',
	},
	{
		id: v4(),
		label: 'Leaderboards',
		description: 'Achieve honor and move up the global leaderboards',
		link: navbarLinks.leaderboards,
		icon: LeaderboardsIcon,
		type: 'link',
	},
	{
		id: v4(),
		label: 'Chat',
		description:
			'Join our Discord server and chat with your fellow code warriors',
		link: navbarLinks.chat,
		icon: ChatIcon,
		type: 'link',
		isExternal: true,
	},
	{
		id: v4(),
		label: 'Discussions',
		description:
			'View our Github Discussions board to discuss general Codewars topics',
		link: navbarLinks.disscusions,
		icon: DiscussionsIcon,
		type: 'link',
		isExternal: true,
	},
	{
		id: v4(),
		label: 'About',
		type: 'section',
	},
	{
		id: v4(),
		label: 'Docs',
		description: 'Learn about all of the different aspects of Codewars',
		link: navbarLinks.docs,
		icon: DocsIcon,
		type: 'link',
		isExternal: true,
	},
];
