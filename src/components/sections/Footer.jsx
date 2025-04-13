import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black relative px-4 sm:px-6">
      {/* Manga style corner elements */}
      <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-r-4 border-b-4 border-black"></div>
      <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-l-4 border-b-4 border-black"></div>
      
      <div className="container mx-auto py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Logo column */}
          <div className="text-center sm:text-left">
            <Link to="/" className="inline-flex items-center group mb-4 sm:mb-5 justify-center sm:justify-start">
              <div className="font-black text-lg sm:text-xl text-black mr-1 flex items-center">
                <span className="border-b-2 border-black group-hover:bg-black group-hover:text-white transition-colors">CHAINSAW</span>
                <span className="ml-1 border-b-2 border-black group-hover:bg-black group-hover:text-white transition-colors">MAN</span>
              </div>
            </Link>
            <p className="text-black text-sm mb-4 sm:mb-5 font-medium border-l-3 border-black pl-2 max-w-xs mx-auto sm:mx-0">
              The official website for Tatsuki Fujimoto's groundbreaking manga and anime series.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              {/* Social media icons */}
              {['twitter', 'instagram', 'youtube', 'discord'].map((social) => (
                <a key={social} href="#" className="text-black hover:text-white hover:bg-black transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center border-2 border-black hover:bg-black transition-colors">
                    <i className={`fab fa-${social}`}></i>
                    {/* Simple placeholders for social icons */}
                    <div className="w-4 h-4 bg-current"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation columns */}
          <div className="text-center sm:text-left">
            <h3 className="text-black font-bold mb-4 sm:mb-5 uppercase text-sm tracking-wider border-b-2 border-black pb-1 inline-block">Explore</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Manga', 'Anime', 'Characters', 'Devils', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-black hover:bg-black hover:text-white transition-colors text-sm font-medium px-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-black font-bold mb-4 sm:mb-5 uppercase text-sm tracking-wider border-b-2 border-black pb-1 inline-block">Information</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['News', 'Events', 'Merchandise', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-black hover:bg-black hover:text-white transition-colors text-sm font-medium px-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-black font-bold mb-4 sm:mb-5 uppercase text-sm tracking-wider border-b-2 border-black pb-1 inline-block">Newsletter</h3>
            <p className="text-black text-sm mb-4 font-medium max-w-xs mx-auto sm:mx-0">
              Subscribe to get the latest news and updates on Chainsaw Man.
            </p>
            <div className="flex flex-col space-y-3 max-w-xs mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-2 border-black text-black p-2 focus:outline-none text-sm w-full"
              />
              <button className="bg-black hover:bg-white hover:text-black text-white p-2 text-sm font-bold transition-colors uppercase tracking-wider border-2 border-black w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t-2 border-black mt-8 sm:mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-black text-xs text-center sm:text-left font-medium">
            © 2023 CHAINSAW MAN. All Rights Reserved. Created by Tatsuki Fujimoto. 
            Published by Shueisha. Licensed by VIZ Media.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} to="#" className="text-black hover:bg-black hover:text-white transition-colors text-xs font-bold px-1">
                {item}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Manga sound effect */}
        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 transform rotate-12 z-10">
          <div className="text-black font-black text-xl sm:text-2xl">ズン!</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer