import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'

import { useNavigate, NavLink } from 'react-router'
import { useUserAuth } from '../../store/auth'
import imageLogo from '../../assets/login_logo.png'

const navigation = [
  { name: 'Inicio', href: '/dashboard', current: true },
  { name: 'Departamentos', href: '/departments', current: false },
  { name: 'Menús', href: '#', current: false },
  { name: 'Horarios', href: '/schedules', current: false },
  { name: 'Usuarios', href: '/users'}
]

const userNavigation = [
  { name: 'Inicio', href: '/dashboard', current: true },
  { name: 'Menús', href: '#', current: false },
  { name: 'Horarios', href: '/schedules', current: false },
]

const manageNavigation = [
  { name: 'Inicio', href: '/dashboard', current: true },
  { name: 'Departamentos', href: '/departments', current: false },
  { name: 'Menús', href: '#', current: false },
  { name: 'Horarios', href: '/schedules', current: false }
]

const manageITNavigation = [
  { name: 'Inicio', href: '/dashboard', current: true },
  { name: 'Departamentos', href: '/departments', current: false },
  { name: 'Menús', href: '#', current: false },
  { name: 'Horarios', href: '/schedules', current: false },
]

export const NavBar = () => {

    const { user, logout } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    if (user?.role === 'admin') {
      return (
        <Disclosure as="nav" className="bg-red-600">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <a href="/dashboard">
                    <img
                        alt="Logo VTV"
                        src={imageLogo}
                        className="h-8 w-8"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-white">

                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-white"
                      >
                        {item.name}
                      </NavLink>

                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {/* <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Configuración
                      </a>
                    </MenuItem> */}
                    <MenuItem>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )
    } else if (user?.role === 'manage') {
      return (
        <Disclosure as="nav" className="bg-red-600">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <a href="/dashboard">
                    <img
                      alt="Logo VTV"
                      src={imageLogo}
                      className="h-8 w-8"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-white">

                    {manageNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-white"
                      >
                        {item.name}
                      </NavLink>

                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {/* <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Configuración
                      </a>
                    </MenuItem> */}
                    <MenuItem>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {manageNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )
    } else if (user?.role === 'manageIT') {
      return (
        <Disclosure as="nav" className="bg-red-600">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <a href="/dashboard">
                    <img
                      alt="Logo VTV"
                      src={imageLogo}
                      className="h-8 w-8"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-white">

                    {manageITNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-white"
                      >
                        {item.name}
                      </NavLink>

                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {/* <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Configuración
                      </a>
                    </MenuItem> */}
                    <MenuItem>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {manageITNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )
    } else if (user?.role === 'user') {
      return (
        <Disclosure as="nav" className="bg-red-600">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <a href="/dashboard">
                    <img
                      alt="Logo VTV"
                      src={imageLogo}
                      className="h-8 w-8"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-white">

                    {userNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-white"
                      >
                        {item.name}
                      </NavLink>

                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {/* <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Configuración
                      </a>
                    </MenuItem> */}
                    <MenuItem>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                        onClick={handleLogout}
                      >
                        Cerrar Sesión
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className="text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )
    }
}
