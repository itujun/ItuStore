import { Navbar, Typography, Button, IconButton, Avatar, MenuItem, MenuList, Menu, MenuHandler, Chip } from '@material-tailwind/react';
import { createElement, useContext, useEffect, useState } from 'react';
import { ChevronDownIcon, Cog6ToothIcon, InboxArrowDownIcon, LifebuoyIcon, PowerIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useLogin } from '../../hooks/useLogin';
import { getProducts } from '../../services/products.service';
import { useCart } from '../../hooks/useCart';
import { ButtonDarkMode } from '../Elements/ButtonDarkMode';
import { DarkModeContext } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

export function StickyNavbar() {
  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none opacity-[.9] px-4 py-2 lg:px-12 lg:py-4" color="light-blue" variant="gradient">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Logo />
          <ButtonDarkMode className="ml-24" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <CartMenu />
              <ProfileMenu />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

function Logo() {
  return (
    <Link to="/products">
      <Typography as="h6" variant="h5" className="cursor-pointer py-1.5 font-bold" color="white">
        ItuStore
      </Typography>
    </Link>
  );
}

function CartMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartState, dispatch } = useCart();
  const [isDarkMode] = useContext(DarkModeContext);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const addToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };

  const deleteFromCart = (item) => {
    dispatch({
      type: 'DELETE_CART',
      payload: item,
    });
  };

  return (
    <Menu placement="bottom-end" open={isMenuOpen} handler={setIsMenuOpen}>
      <Chip
        size="sm"
        value={cartState.data.length > 0 ? cartState.data.reduce((acc, item) => acc + item.qty, 0) : ''}
        color="amber"
        className={`rounded-full relative -mr-12 mb-6 ${isMenuOpen ? 'z-10' : ''} ${cartState.data.length > 0 ? '' : 'hidden'}`}
      />
      <MenuHandler>
        <IconButton variant="text" className={`mr-4 ${isMenuOpen ? 'bg-white' : ''} `}>
          <ShoppingCartIcon className="h-6 w-6" />
        </IconButton>
      </MenuHandler>
      <MenuList className={`flex flex-col gap-2 max-h-96 ${isDarkMode === 'dark' ? 'bg-blue-gray-100 border' : ''}`}>
        {cartState.data.length > 0 ? (
          <>
            {cartState.data.map((item) => {
              const prod = products.find((p) => p.id === item.id);
              if (!prod) return null;
              return (
                <MenuItem key={item.id} className="flex items-center max-w-md mr-2 gap-4 py-2 pl-2 pr-8">
                  <Avatar variant="rounded" alt={prod.title} src={prod.image} />
                  <div className="flex flex-col gap-0 w-10/12">
                    <Typography variant="small" color="gray" className="font-semibold mr-2">
                      {prod.title}
                    </Typography>
                    <Typography className="flex items-center gap-1 text-sm font-bold" color="green">
                      ${prod.price}
                    </Typography>
                  </div>
                  <div className="flex justify-center items-center ml-2 w-2/12">
                    <div
                      className="py-1 px-4 font-bold cursor-pointer bg-light-blue-500 rounded-s-xl text-white hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteFromCart(item.id);
                      }}
                    >
                      &minus;
                    </div>
                    <span className="px-2">{item.qty}</span>
                    <div
                      className="py-1 px-4 font-bold cursor-pointer bg-light-blue-500 rounded-e-xl text-white hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({ id: item.id, qty: 1 });
                      }}
                    >
                      +
                    </div>
                  </div>
                </MenuItem>
              );
            })}
          </>
        ) : (
          <MenuItem className="flex  items-center h-1">
            <Typography as="span" variant="small" className="font-bold">
              Cart is still empty 😕
            </Typography>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}

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
  const [isDarkMode] = useContext(DarkModeContext);
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
      <MenuList className={`p-1 ${isDarkMode === 'dark' ? 'bg-blue-gray-100 text-black' : ''}`}>
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
