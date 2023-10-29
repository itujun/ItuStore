import { Navbar, Typography, Button, IconButton, Badge, Collapse, Avatar, MenuItem, MenuList, Menu, MenuHandler } from '@material-tailwind/react';
import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none opacity-[.9] px-4 py-2 lg:px-12 lg:py-4" color="light-blue" variant="gradient">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" variant="h5" className="cursor-pointer py-1.5 font-bold" color="white">
            ItuStore
          </Typography>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
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
                    <Avatar variant="circular" alt="tania andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    <div className="flex flex-col gap-1">
                      <Typography variant="small" color="gray" className="font-semibold">
                        Tania send you a message
                      </Typography>
                      <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">13 minutes ago</Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                    <Avatar variant="circular" alt="natali craig" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" />
                    <div className="flex flex-col gap-1">
                      <Typography variant="small" color="gray" className="font-semibold">
                        Natali replied to your email.
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                    <Avatar variant="circular" alt="paypal" src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png" />
                    <div className="flex flex-col gap-1">
                      <Typography variant="small" color="gray" className="font-semibold">
                        You&apos;ve received a payment.
                      </Typography>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Button variant="gradient" size="sm" className="hidden lg:flex" onClick={() => (window.location.href = '/login')}>
                <span>Logout</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </Button>
            </div>
            <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" size="md" className="flex justify-center" onClick={() => (window.location.href = '/login')}>
              <span>Logout</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
