'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

const logins = [
  { name: 'Admin', description: 'Admin login', href: '#' },
  { name: 'Teacher', description: 'Teacher login', href: '#' },
  { name: 'Student', description: 'Student login', href: '#' },
]

const products = [
  { name: 'Introduction', href: '#' },
  { name: 'Chairman Message', href: '#' },
  { name: 'Message from MD', href: '#' },
  { name: 'Principal Message', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Our Faculty', href: '#' },
  { name: 'Core Values', href: '#' },
  { name: 'Our Partners', href: '#' },
  { name: 'Partnership', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"  
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            Menu
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* About Us Dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900 hover:bg-orange-400 h-10 w-40 justify-center p-8">
              About Us <span aria-hidden="true">▼</span>
            </PopoverButton>
            <PopoverPanel className="absolute z-10 mt-3 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md">
              <div className="py-1">
                {products.map((item) => (
                  <a key={item.name} href={item.href} className="block px-4 py-2 text-gray-700 hover:bg-amber-100">
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Other Links */}
          {['Program', 'Admission', 'News/Event', 'Student Forms', 'Payment'].map((item) => (
            <a key={item} href="#" className="font-semibold text-gray-900 hover:bg-orange-400 h-10 w-25 flex items-center justify-center p-8">
              {item}
            </a>
          ))}
        </PopoverGroup>

        {/* Login Dropdown */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900 hover:bg-orange-400 h-10 w-25 justify-center">
              Log in <span aria-hidden="true">▼</span>
            </PopoverButton>
            <PopoverPanel className="absolute z-10 mt-3 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md">
              <div className="py-1">
                {logins.map((login) => (
                  <a key={login.name} href={login.href} className="block px-4 py-2 text-gray-700 hover:bg-amber-100">
                    {login.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="Logo" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 text-gray-700">
              Close
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {/* Mobile About Us Dropdown */}
            <Disclosure as="div">
              <DisclosureButton className="w-full py-2 text-left font-semibold text-gray-900 hover:bg-gray-50">
                About Us
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {products.map((item) => (
                  <DisclosureButton key={item.name} as="a" href={item.href} className="block py-2 pl-6 text-gray-900 hover:bg-amber-100">
                    {item.name}
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>

            {/* Other Links */}
            {['Program', 'Admission', 'News/Event', 'Student Forms', 'Payment'].map((item) => (
              <a key={item} href="#" className="block py-2 text-gray-900 hover:bg-gray-50">
                {item}
              </a>
            ))}

            {/* Mobile Login Dropdown */}
            <Disclosure as="div">
              <DisclosureButton className="w-full py-2 text-left font-semibold text-gray-900 hover:bg-gray-50">
                Login
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {logins.map((login) => (
                  <DisclosureButton key={login.name} as="a" href={login.href} className="block py-2 pl-6 text-gray-900 hover:bg-amber-100">
                    {login.name}
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
