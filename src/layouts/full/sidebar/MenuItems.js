import {
  IconAperture,IconAB2, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus,IconUsers,IconOlympics,IconReceiptTax,IconBellRinging2,IconFilePencil,IconPhoneCall,IconFileReport,IconUserCheck  } from '@tabler/icons';

  

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUsers ,
    href: '/users',
  },
  {
    id: uniqueId(),
    title: 'Organizer',
    icon: IconAB2 ,
    href: '/organizer',
  },
  {
    id: uniqueId(),
    title: 'Add Sports',
    icon: IconOlympics ,
    href: '/addsports',
  },
  {
    id: uniqueId(),
    title: 'Sub Admin',
    icon: IconUserCheck ,
    href: '/subadmin',
  },
  {
    id: uniqueId(),
    title: 'Fess & Offer',
    icon: IconReceiptTax ,
    href: '/fessoffer',
  },
  {
    id: uniqueId(),
    title: 'Notification',
    icon: IconBellRinging2 ,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Content Manager',
    icon: IconFilePencil ,
    href: '/content',
  },
  {
    id: uniqueId(),
    title: 'HelpDesk',
    icon: IconPhoneCall,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Reporting',
    icon: IconFileReport ,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'typography',
    icon: IconTypography,
    href: '/ui/typography',
  },
 
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },
];

export default Menuitems;
