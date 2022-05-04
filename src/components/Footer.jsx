import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex justify-between md:justify-center items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer">
            Crypto
          </h1>
        </div>
        <div className="w-full flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
        <p className="text-white text-sm text-center font-medium mt-2">support@crypto.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@crypto2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer