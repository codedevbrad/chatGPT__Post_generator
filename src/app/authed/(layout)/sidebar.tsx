'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, Cog6ToothIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import classNames from '@/app/utils/classNames'
import UserAvatar from '../(clerk)/profile';
import { navigation } from '../data'
import ThemeSwitch from '@/app/(themeSwitch)/themeSwitcher'


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


/* === Other Sidebar Component === */
function PostHistory ( ) {
  
    const posts = [
      { id: 1, name: 'Come up with post ideas for my travel agency advertising for someone Dreaming of an unforgettable vacation.', href: '#', initial: 'W', current: false },
      { id: 2, name: 'Show me some ideas for my fitness Business. I want to get new users pumped and interested in working out.', href: '#', initial: 'N', current: false },
      { id: 3, name: 'I need some post ideas for my E-Commerce store that sells Tshirts. Make sure to add that there is limited stock.', href: '#', initial: 'F', current: false },
    ]

    return (
        <>
            <div className="text-xs font-semibold leading-6 text-gray-400">
                Post search History
            </div>

            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {posts.map(( post ) => (
                <li key={ post.name}>
                  <a
                    href={ post.href}
                    className={classNames(
                      post.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                      {post.initial}
                    </span>
                    <span className="truncate">{post.name}</span>
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
                            <PostHistory />
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
                        <PostHistory />
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
            <div className="bg-white dark:bg-inherit flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
              
              <div className="flex items-center gap-x-4 lg:gap-x-6">

                <ThemeSwitch />

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

          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4  sm:gap-x-6 sm:px-6 lg:px-8">
            
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
