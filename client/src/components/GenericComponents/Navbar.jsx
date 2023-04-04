import React from 'react'
import { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
import { FaShoppingCart } from 'react-icons/fa'

import CompanyLogo from './CompanyLogo'

const Navbar = () => {
    return (
        <div className=' w-full text-white bg-stone-800'>
            <div className=' mx-auto max-w-screen-xl w-full flex justify-center sm:justify-between items-center py-2 px-4  text-white bg-stone-800 font-body flex-wrap'>

                {/*----------- Company Logo ------------ */}
                <CompanyLogo linkRoute='/' />
                {/* ------------- Links ----------------- */}

                <ul className='flex items-center '>

                    {/* ------------- Bikes Menu ------------- */}

                    <li className='p-4 text-white'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button>
                                Bikes
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute Left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/trail"
                                                    className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                                                >
                                                    Trail
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/allmountain"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    All Mountain
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/enduro"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Enduro
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/downhill"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Downhill
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>

                    {/* --------------Components Menu --------------- */}

                    <li className='p-4 text-white'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button>
                                Components
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute Left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/drivetrain"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Drivetrain
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/suspension"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Suspension
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/brakes"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Brakes
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/tires"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Tires
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/wheels"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Wheels
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>

                    {/* ----------- Accessories Menu -------------- */}

                    <li className='p-4 text-white'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button>
                                Accessories
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none">
                                    <div className='py-1'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/bags"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Bags
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/tools"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Tools
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/hydration"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Hydration
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/products/subcategory/racks"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Racks
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    <li className='px-4'>
                        <a href='/cart'><FaShoppingCart size="1.2em" /></a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar