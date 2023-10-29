import { Navbar, Typography, Button, IconButton, Badge, Collapse, Avatar, MenuItem, MenuList, Menu, MenuHandler } from '@material-tailwind/react';
import { createElement, useState } from 'react';
import { ChevronDownIcon, Cog6ToothIcon, InboxArrowDownIcon, LifebuoyIcon, PowerIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useLogin } from '../../hooks/useLogin';

const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Edit Profile',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Inbox',
    icon: InboxArrowDownIcon,
  },
  {
    label: 'Help',
    icon: LifebuoyIcon,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const username = useLogin();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="outlined" color="white" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Typography variant="small" className="normal-case font-medium mx-2">
            {username}
          </Typography>
          <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem key={label} onClick={isLastItem ? handleLogout : closeMenu} className={`flex items-center gap-2 rounded ${isLastItem ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10' : ''}`}>
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal" color={isLastItem ? 'red' : 'inherit'}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function StickyNavbar({ cart }) {
  // const [openNav, setOpenNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none opacity-[.9] px-4 py-2 lg:px-12 lg:py-4" color="light-blue" variant="gradient">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <CartMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <ProfileMenu />
            </div>
            {/* <IconHumberger openNav={openNav} setOpenNav={setOpenNav} /> */}
          </div>
        </div>
      </Navbar>
    </>
  );
}

function Logo() {
  return (
    <Typography as="a" href="#" variant="h5" className="cursor-pointer py-1.5 font-bold" color="white">
      ItuStore
    </Typography>
  );
}

function CartMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <Menu placement="bottom-end" open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        {/* <Badge content="5" className="mr-5 text-xs"> */}
        <IconButton variant="text" className={`mr-4 ${isMenuOpen ? 'bg-white' : ''} `}>
          <ShoppingCartIcon className="h-6 w-6" />
        </IconButton>
        {/* </Badge> */}
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar variant="rounded" alt="tania andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
          <div className="flex flex-col gap-0">
            <Typography variant="small" color="gray" className="font-semibold">
              Tania send you a message
            </Typography>
            <Typography className="flex items-center gap-1 text-sm font-bold" color="green">
              $12.99
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <Button size="sm" color="light-blue" variant="gradient" className="py-1">
              <b>-</b>
            </Button>
            <span className="px-2">1</span>
            <Button size="sm" color="light-blue" variant="gradient" className="py-1">
              <b>+</b>
            </Button>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar variant="rounded" alt="tania andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
          <div className="flex flex-col gap-0">
            <Typography variant="small" color="gray" className="font-semibold">
              Tania send you a message
            </Typography>
            <Typography className="flex items-center gap-1 text-sm font-bold" color="green">
              $12.99
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <Button size="sm" color="light-blue" variant="gradient" className="py-1">
              <b>-</b>
            </Button>
            <span className="px-2">1</span>
            <Button size="sm" color="light-blue" variant="gradient" className="py-1">
              <b>+</b>
            </Button>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
          <Avatar variant="rounded" alt="tania andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
          <div className="flex flex-col gap-0">
            <Typography variant="small" color="gray" className="font-semibold">
              Tania send you a message
            </Typography>
            <Typography className="flex items-center gap-1 text-sm font-bold" color="green">
              $12.99
            </Typography>
          </div>
          <div className="flex justify-center items-center">
            <Button size="sm" color="light-blue" variant="gradient" className="py-1">
              <b>-</b>
            </Button>
            <span className="px-2">1</span>
            <Button size="sm" color="light-blue" variant="gradient" className="py-1">
              <b>+</b>
            </Button>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

// function IconHumberger({ openNav, setOpenNav }) {
//   return (
//     <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
//       {openNav ? (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       ) : (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       )}
//     </IconButton>
//   );
// }
