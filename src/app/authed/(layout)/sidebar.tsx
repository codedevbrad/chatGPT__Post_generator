'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, Cog6ToothIcon, HomeIcon, UsersIcon, XMarkIcon, } from '@heroicons/react/24/outline'

import UserAvatar from './profile';

const navigation = [
  { name: 'Dashboard', href: '/authed/dashboard', icon: HomeIcon, current: true },
  { name: 'Chat',      href: '/authed/chat', icon: UsersIcon, current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function AppSidebarMenu ( ) {
    return (
      <ul role="list" className="-mx-2 space-y-1">
        { navigation.map((item) => (
          <li key={item.name}>
            <a href={item.href} className={classNames( item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'  )} >
              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    )
}

function ImageComponent ( { src } ) {
    return (
      <img className="h-8 w-8 rounded-full bg-gray-50" src={ src } alt="" />
    )
}

/* === CHAT Component === */
function ChatHistory ( ) {
  
    const chats = [
      { id: 1, name: 'Waves splashing ...', href: '#', initial: 'W', current: false },
      { id: 2, name: 'New York umbrella ...', href: '#', initial: 'N', current: false },
      { id: 3, name: 'Field of Roses ...', href: '#', initial: 'F', current: false },
    ]
    return (
        <>
              <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {chats.map(( chat ) => (
                  <li key={ chat.name}>
                    <a
                      href={ chat.href}
                      className={classNames(
                        chat.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                        {chat.initial}
                      </span>
                      <span className="truncate">{chat.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
        </>
    )
}

function MobileSidebarView ( { sidebarOpen, setSidebarOpen } ) {
    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                        <ImageComponent src={ "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" } />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                            <ChatHistory />
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
    )
}

function DesktopSidebarView ( ) {
    return (
        <>
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                    <ImageComponent src={ "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" } />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <AppSidebarMenu />
                    </li>
                    <li>
                        <ChatHistory />
                    </li>
                    <li className="mt-auto">
                      <a href="#" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                        <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
        </>
    )
}

function SidebarTop ( ) {
    return (
        <>
            <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
              
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <UserAvatar />
              </div>
            </div>
        </>
    )
}


/* === MAIN COMPONENT === */

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>

        <MobileSidebarView sidebarOpen={ sidebarOpen } setSidebarOpen={ setSidebarOpen } />

        <DesktopSidebarView />

        <div className="lg:pl-72">

          { /* top bar */ }

          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            
              { /* menu to toggle sidbar viewable in mobile */ }
              <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <SidebarTop />

          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
                { children }
            </div>
          </main>

        </div>
      </div>
    </>
  )
}
