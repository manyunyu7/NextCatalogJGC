"use client";
import React from "react";


const SearchFilterBar = () => {
    return (
        <div className="w-full p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                {/* Search Bar */}
                <div className="w-full lg:w-1/5">
                    <h3 className="text-md text-black-500 mb-2">Cari</h3>
                    <div className="flex items-center w-full bg-white border rounded-md shadow-sm">
                        <span className="pl-3 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.9 14.32a8 8 0 111.41-1.41l4.27 4.27a1 1 0 01-1.41 1.41l-4.27-4.27zm-5.9 0a6 6 0 100-12 6 6 0 000 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Dropdown Filters */}
                <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
                    {/* Proyek Filter */}
                    <div className="w-full lg:w-auto">
                        <h3 className="text-md text-black-500 mb-2">Proyek</h3>
                        <div className="relative flex items-center">
                            <span className="text-white font-semibold rounded-l-md px-2 py-2 absolute left-0 top-0 bottom-0" style={{ backgroundColor: '#05864D' }}>
                                <img
                                    src="/img/proyek.png"
                                    alt="Proyek"
                                    className="w-6 h-6"
                                />
                            </span>
                            <select className="pl-10 pr-2 py-2 border-[0.1px] border-black rounded-md focus:outline-none">
                                <option value="all">Semua Proyek</option>
                                <option value="perumahan">Perumahan</option>
                                <option value="apartement">Apartement</option>
                                <option value="komersil">Komersil</option>
                            </select>
                        </div>
                    </div>

                    {/* Rentang Harga Filter */}
                    <div className="w-full lg:w-auto">
                        <h3 className="text-md text-black-500 mb-2">Rentang Harga</h3>
                        <div className="relative flex items-center">
                            <span className="text-white font-semibold rounded-l-md px-2 py-2 absolute left-0 top-0 bottom-0" style={{ backgroundColor: '#05864D' }}>
                                Rp
                            </span>
                            <select className="pl-10 pr-2 py-2 border-[0.1px] border-black rounded-md focus:outline-none">
                                <option value="all">Semua</option>
                                <option value="below2m">Rp &lt; 2M</option>
                                <option value="2m-3m">Rp 2M - 3M</option>
                                <option value="3m-4m">Rp 3M - 4M</option>
                                <option value="above4m">Rp &gt; 4M</option>
                            </select>
                        </div>
                    </div>

                    {/* Luas Bangunan Filter */}
                    <div className="w-full lg:w-auto">
                        <h3 className="text-md text-black-500 mb-2">Luas Bangunan</h3>
                        <div className="relative flex items-center">
                            <span className="text-white font-semibold rounded-l-md px-2 py-2 absolute left-0 top-0 bottom-0" style={{ backgroundColor: '#05864D' }}>
                                <img
                                    src="/img/luasbangunan.png"
                                    alt="Luas Bangunan"
                                    className="w-6 h-6"
                                />
                            </span>
                            <select className="pl-10 pr-2 py-2 border-[0.1px] border-black rounded-md focus:outline-none">
                                <option value="0-60">0 m2 - 60 m2</option>
                                <option value="61-80">61 m2 - 80 m2</option>
                                <option value="81-120">81 m2 - 120 m2</option>
                                <option value="121-200">121 m2 - 200 m2</option>
                            </select>
                        </div>
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="w-full lg:w-auto">
                        <h3 className="text-md text-black-500 mb-2">Sortir Berdasarkan</h3>
                        <div className="relative flex items-center">
                            <span className="text-white font-semibold rounded-l-md px-2 py-2 absolute left-0 top-0 bottom-0" style={{ backgroundColor: '#05864D' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                                    />
                                </svg>
                            </span>
                            <select className="pl-10 pr-2 py-2 border-[0.1px] border-black rounded-md focus:outline-none">
                                <option value="newest">Terbaru</option>
                                <option value="price-asc">Harga: Rendah ke Tinggi</option>
                                <option value="price-desc">Harga: Tinggi ke Rendah</option>
                                <option value="size-asc">Luas: Kecil ke Besar</option>
                                <option value="size-desc">Luas: Besar ke Kecil</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Cari Button */}
                <div className="w-full lg:w-auto">
                    <h3 className="text-lg text-black-700 mb-2 invisible">.</h3>
                    <button style={{ backgroundColor: '#05864D' }} className="w-full lg:w-auto px-4 py-2 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
                        Cari
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterBar;

