import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'anime', name: 'Anime' },
    { id: 'manga', name: 'Manga' },
    { id: 'promo', name: 'Promo Art' },
    { id: 'fanart', name: 'Fan Art' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'anime',
      title: 'Denji Transformation',
      image: 'https://i.pinimg.com/236x/1f/8f/14/1f8f1440a01e35f571047f0ec56ee8ac.jpg',
      aspectRatio: 'aspect-video',
      featured: true
    },
    {
      id: 2,
      category: 'manga',
      title: 'First Encounter',
      image: 'https://i.pinimg.com/236x/4b/9d/5a/4b9d5a2a8c1f12da02a2817d6225476c.jpg',
      aspectRatio: 'aspect-square'
    },
    {
      id: 3,
      category: 'anime',
      title: 'Power vs Zombie Devil',
      image: 'https://i.pinimg.com/236x/b8/78/f4/b878f49d1bc4544cc5785f351d9e9fe2.jpg',
      aspectRatio: 'aspect-video'
    },
    {
      id: 4,
      category: 'promo',
      title: 'Season One Key Visual',
      image: 'https://i.pinimg.com/236x/64/6d/8c/646d8cc7f759adce46e7d31442b67a3d.jpg',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 5,
      category: 'manga',
      title: 'Makima Reveal',
      image: 'https://i.pinimg.com/736x/96/02/67/960267fcc566eecb2bf2305e36a46b8c.jpg',
      aspectRatio: 'aspect-square',
      featured: true
    },
    {
      id: 6,
      category: 'fanart',
      title: 'Fanart Contest Winner',
      image: 'https://i.pinimg.com/236x/e3/41/d5/e341d54980f3eb6952d40dd1f543c4a1.jpg',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 7,
      category: 'anime',
      title: 'Aki and the Future Devil',
      image: 'https://i.pinimg.com/236x/a1/03/77/a1037705a08827783eb4fbfe4e951792.jpg',
      aspectRatio: 'aspect-video'
    },
    {
      id: 8,
      category: 'promo',
      title: 'Manga Volume Cover',
      image: 'https://i.pinimg.com/474x/6c/ec/a9/6ceca9dae1c006ff061b1b9c39f2d66a.jpg',
      aspectRatio: 'aspect-[3/4]'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Manga panel effect */}
      <div className="absolute inset-x-10 top-0 h-[4px] bg-black"></div>
      <div className="absolute inset-x-10 bottom-0 h-[4px] bg-black"></div>
      
      {/* Manga style decorative elements */}
      <div className="absolute top-20 left-20 transform rotate-12">
        <div className="border-4 border-black h-24 w-24 bg-white"></div>
      </div>
      
      {/* Section header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-wider mb-4 border-2 border-black uppercase">
            VISUAL SHOWCASE
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 relative inline-block">
            <span className="border-b-4 border-black">Gallery</span>
            <div className="absolute -top-4 -right-8 transform rotate-12 text-sm font-black">ギャラリー</div>
          </h2>
          
          {/* Category navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-bold transition-colors uppercase tracking-wide border-2 border-black ${
                  activeCategory === category.id 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gallery grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.aspectRatio} ${item.featured ? 'sm:col-span-2 sm:row-span-2' : ''} group cursor-pointer relative overflow-hidden border-4 border-black transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="w-full h-full bg-white relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Manga-style action lines */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div className="absolute top-0 left-1/2 h-full w-2 bg-black"></div>
                  <div className="absolute top-1/2 left-0 h-2 w-full bg-black"></div>
                  <div className="w-[200%] h-[2px] bg-black rotate-[30deg] transform translate-y-[40px]"></div>
                  <div className="w-[200%] h-[1px] bg-black rotate-[15deg] transform translate-y-[100px]"></div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 border-2 border-black m-4">
                  <h3 className="text-black text-lg font-black mb-2">{item.title}</h3>
                  <span className="text-black text-sm uppercase font-bold">{item.category}</span>
                  <button className="mt-4 bg-black hover:bg-white hover:text-black text-white text-xs uppercase py-2 px-4 transition-colors border-2 border-black font-bold">
                    View Full Size
                  </button>
                </div>
                
                {/* Manga corner mark */}
                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-black border-l-[20px] border-l-transparent border-b-[20px] border-b-transparent"></div>
                
                {/* Category tag */}
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 text-xs text-black border-2 border-black font-bold">
                  #{item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View more button */}
      <div className="container mx-auto px-6 mt-12 flex justify-center">
        <button className="group border-2 border-black bg-white text-black hover:bg-black hover:text-white py-3 px-8 transition-colors relative overflow-hidden">
          <span className="relative z-10 flex items-center text-sm font-bold uppercase tracking-wide transition-colors">
            View All Artwork
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
      
      {/* Manga sound effect */}
      <div className="absolute bottom-30 right-20 transform -rotate-12">
        <div className="text-black font-black text-3xl">バン!</div>
      </div>
      
      {/* Additional manga elements */}
      <div className="absolute bottom-10 right-10">
        <div className="border-r-4 border-b-4 border-black h-16 w-16"></div>
      </div>
    </div>
  );
};

export default Gallery;