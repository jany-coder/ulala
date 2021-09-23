import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";


export default function UserDashboard() {
    return (
        <div>
            <div className=" md:w-8/12 mx-auto pt-4 px-3">

                <div className="flex flex-col md:flex-row md:justify-between md:space-x-6">

                    <div className="md:w-4/12 rounded-lg shadow mb-10 md:mb-0">
                        <img src="https://i.ibb.co/ZXYgzfJ/useBg.jpg" className="w-full rounded-t-lg" alt="" />
                        <div className="flex justify-center -mt-8">
                            <FaUserCircle className="rounded-full shadow  text-8xl text-gray-50 -mt-10 bg-gray-400 " />
                            <FaCamera className="text-green-400 text-2xl mt-4 -ml-5" />
                        </div>
                        <div className="pl-8 py-6 ">
                            <p>My profile</p>
                            <p>Review your Watch</p>
                            <p>Recommended</p>
                            <p>Watched Video</p>
                        </div>
                    </div>

                    {/* form */}
                    <div className="md:w-8/12 rounded-lg shadow p-3">
                        <form className="">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block  text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input className="block w-full bg-gray-50 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:outline-none" id="grid-first-name" type="text" placeholder="Mohaiminul" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block  text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input className="block w-full bg-gray-50 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:outline-none" id="grid-last-name" type="text" placeholder="Islam" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block  text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Password
                                    </label>
                                    <input className="block w-full bg-gray-50 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:outline-none" id="grid-password" type="password" placeholder="" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block  text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        City
                                    </label>
                                    <input className="block w-full bg-gray-50 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:outline-none" id="grid-city" type="text" placeholder="Dhaka" />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block  text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        State
                                    </label>
                                    <div className="relative">
                                        <select className="block w-full bg-gray-50 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:outline-none" id="grid-state" >
                                            <option>Dhaka</option>
                                            <option>Barishal</option>
                                            <option>Rangpur</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block  text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Zip
                                    </label>
                                    <input className="block w-full bg-gray-50 text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:bg-white focus:outline-none" id="grid-zip" type="text" placeholder="51325" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </div>
    );
};
