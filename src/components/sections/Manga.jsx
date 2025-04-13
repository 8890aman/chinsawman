import React from 'react';

const Manga = () => {
  const mangaVolumes = [
    {
      id: 1,
      title: "Chainsaw Man Vol.1",
      cover: "vol1",
      releaseDate: "Dec 2020",
      chapters: "1-7",
      price: "$9.99"
    },
    {
      id: 2,
      title: "Chainsaw Man Vol.2",
      cover: "vol2",
      releaseDate: "Feb 2021",
      chapters: "8-13",
      price: "$9.99"
    },
    {
      id: 3,
      title: "Chainsaw Man Vol.3",
      cover: "vol3",
      releaseDate: "Apr 2021",
      chapters: "14-18",
      price: "$9.99"
    },
    {
      id: 4,
      title: "Chainsaw Man Vol.4",
      cover: "vol4",
      releaseDate: "Jun 2021",
      chapters: "19-23",
      price: "$9.99"
    }
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-white">
      {/* Manga panel borders and elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-40 bg-black"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[4px] h-40 bg-black"></div>
      <div className="absolute left-10 top-10 w-20 h-20 border-4 border-black bg-white rotate-12"></div>
      <div className="absolute right-10 bottom-10 w-20 h-20 border-4 border-black bg-white -rotate-12"></div>
      
      {/* Section header */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-wider mb-4 border-2 border-black uppercase">
            READ THE STORY
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-3 flex items-center relative">
            <span className="border-b-4 border-black">Manga</span>
            <span className="ml-3 text-white text-base font-bold px-2 py-1 bg-black border-2 border-black">
              PART 1 COMPLETE
            </span>
            <div className="absolute -top-5 -right-5 transform rotate-12 text-sm font-black">漫画</div>
          </h2>
          <p className="text-black max-w-2xl text-center font-medium border-l-4 border-r-4 border-black px-4 py-2">
            Follow Denji's bloody journey from the beginning. The complete first part of Tatsuki Fujimoto's groundbreaking series is now available.
          </p>
        </div>
      </div>
      
      {/* Manga volumes section */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mangaVolumes.map((volume) => (
            <div key={volume.id} className="flex flex-col group">
              {/* Manga cover */}
              <div className="h-64 sm:h-80 bg-white border-4 border-black mb-4 relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
                {/* Volume cover image */}
                <div className="absolute inset-0 bg-white">
                  {volume.id === 1 ? (
                    <img 
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLiPXToHHvel-q1Lj-YuVnKEabcBdIb8HLWXPiNudjbyxc3Acd"
                      alt="Chainsaw Man Volume 1 Cover"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : volume.id === 2 ? (
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGJRYoLUxv0J5BFBkI6ZVnaW4Ey1-JXfjWc1ntTGKSLbIbGT0A"
                      alt="Chainsaw Man Volume 2 Cover"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : volume.id === 3 ? (
                    <img
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTe3L6R3Bkvk8g_b4es3TZmD5IC4Pfvx-0rehKfzdw-3l8ISyQG"
                      alt="Chainsaw Man Volume 3 Cover"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : volume.id === 4 ? (
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJYvRruXAeqDIX6aKL1NOOqGdk4Ek8a_LFGZS73WovGrSnFVm_"
                      alt="Chainsaw Man Volume 4 Cover"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-black font-black text-8xl opacity-20">
                        {volume.id}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-black font-bold text-2xl border-2 border-black p-6">
                          VOL. {volume.id}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Manga details overlay */}
                <div className="absolute bottom-0 left-0 w-full p-3 bg-white border-t-2 border-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-black text-xs mb-1 font-bold">
                    Chapters {volume.chapters}
                  </div>
                  <div className="text-black text-sm mb-2 font-medium">
                    Released: {volume.releaseDate}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold">{volume.price}</span>
                    <button className="bg-black text-white text-xs py-1 px-3 border-2 border-black hover:bg-white hover:text-black transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                {/* Manga corner mark */}
                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-black border-l-[20px] border-l-transparent border-b-[20px] border-b-transparent"></div>
                
                {/* Manga-style action lines */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50">
                  <div className="w-[200%] h-[2px] bg-black rotate-[30deg] transform translate-y-[40px]"></div>
                  <div className="w-[200%] h-[1px] bg-black rotate-[15deg] transform translate-y-[100px]"></div>
                  <div className="w-[200%] h-[1px] bg-black rotate-[60deg] transform translate-y-[160px]"></div>
                </div>
              </div>
              
              {/* Volume title */}
              <h3 className="text-black text-base font-black mb-1 border-b-2 border-black inline-block">{volume.title}</h3>
              <div className="text-black text-sm font-medium">Tatsuki Fujimoto</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="container mx-auto px-6 mt-16 relative z-10">
        <div className="bg-white border-4 border-black p-8 flex flex-col md:flex-row items-center justify-between relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-white border-4 border-black transform rotate-45"></div>
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-black text-2xl font-black mb-2">Start Reading Today</h3>
            <p className="text-black max-w-xl font-medium">
              Dive into the world of Chainsaw Man with digital or physical copies. Available worldwide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="whitespace-nowrap bg-black text-white py-2 px-6 font-bold transition-colors uppercase tracking-wide border-2 border-black hover:bg-white hover:text-black">
              Buy Physical
            </button>
            <button className="whitespace-nowrap border-2 border-black bg-white text-black py-2 px-6 font-bold transition-colors uppercase tracking-wide hover:bg-black hover:text-white">
              Read Digital
            </button>
          </div>
        </div>
      </div>
      
      {/* Manga sound effect */}
      <div className="absolute bottom-40 right-20 transform rotate-12">
        <div className="text-black font-black text-4xl">ゴゴゴ!</div>
      </div>
    </div>
  );
};

export default Manga;