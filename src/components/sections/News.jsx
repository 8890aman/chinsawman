import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Chainsaw Man Part 2 New Chapter Release",
      date: "July 15, 2023",
      category: "Manga",
      excerpt: "The latest chapter of Chainsaw Man Part 2 has been released! Follow Denji's continuing adventures in this thrilling new installment.",
      featured: true,
      image: "chapter-release"
    },
    {
      id: 2,
      title: "Season 2 Anime Announcement",
      date: "June 28, 2023",
      category: "Anime",
      excerpt: "MAPPA studio has officially announced that Chainsaw Man Season 2 is in production. Stay tuned for more updates!",
      featured: true,
      image: "https://i.pinimg.com/236x/26/72/e6/2672e618e4f91167acc076fe75a3355d.jpg"
    },
    {
      id: 3,
      title: "New Chainsaw Man Merchandise Collection",
      date: "June 10, 2023",
      category: "Merch",
      excerpt: "Check out the latest Chainsaw Man merchandise, including figurines, apparel, and collectibles.",
      image: "merch"
    },
    {
      id: 4,
      title: "Creator Interview: Tatsuki Fujimoto",
      date: "May 22, 2023",
      category: "Interview",
      excerpt: "Read our exclusive interview with Chainsaw Man creator Tatsuki Fujimoto about his inspirations and future plans.",
      image: "interview"
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden px-4 sm:px-6">
      {/* Manga panel border */}
      <div className="absolute inset-x-0 top-0 h-[6px] bg-black"></div>
      <div className="absolute inset-y-0 right-4 sm:right-10 w-[4px] bg-black"></div>
      
      {/* Manga decorative elements */}
      <div className="absolute -bottom-10 -left-10 border-t-8 border-r-8 border-black w-40 sm:w-60 h-40 sm:h-60 transform rotate-45"></div>
      
      {/* Section header */}
      <div className="container mx-auto mb-8 sm:mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-wider mb-4 border-2 border-black uppercase">
            LATEST UPDATES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-4 sm:mb-6 relative inline-block">
            <span className="border-b-4 border-black">News</span> & Announcements
            <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 transform rotate-12 text-xs sm:text-sm font-black">ニュース</div>
          </h2>
          <p className="text-black max-w-2xl text-center font-medium border-l-4 border-r-4 border-black px-3 sm:px-4 py-2 text-sm sm:text-base">
            Stay updated with the latest news, releases, and announcements from the world of Chainsaw Man.
          </p>
        </div>
      </div>
      
      {/* Featured news */}
      <div className="container mx-auto mb-8 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-white border-2 sm:border-4 border-black overflow-hidden transition-transform hover:-translate-y-1 group relative">
              {/* Image container */}
              <div className="h-40 sm:h-48 bg-white border-b-2 border-black relative overflow-hidden">
                {/* Rest of the image content remains the same */}
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-black opacity-20 font-black text-6xl uppercase">{item.image}</div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 border border-black">
                  {item.category}
                </div>
                
                {/* Manga style corner mark */}
                <div className="absolute top-0 right-0 border-t-[30px] border-r-[30px] border-black border-l-[30px] border-l-transparent border-b-[30px] border-b-transparent"></div>
                
                {/* Manga action lines */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div className="w-[200%] h-[2px] bg-black rotate-[30deg] transform translate-y-[40px]"></div>
                  <div className="w-[200%] h-[1px] bg-black rotate-[15deg] transform translate-y-[80px]"></div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-black font-bold text-sm mb-2">{item.date}</div>
                <h3 className="text-black text-xl font-black mb-3 group-hover:bg-black group-hover:text-white transition-colors px-1">
                  {item.title}
                </h3>
                <p className="text-black text-sm mb-4 font-medium">
                  {item.excerpt}
                </p>
                <button className="flex items-center text-black bg-white border-2 border-black text-sm font-bold group-hover:bg-black group-hover:text-white transition-colors py-1 px-3">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent news list */}
      <div className="container mx-auto">
        <h3 className="text-black text-lg sm:text-xl font-black mb-6 sm:mb-8 border-l-4 border-black pl-4">Recent Updates</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newsItems.filter(item => !item.featured).map((item) => (
            <div key={item.id} className="bg-white border-2 border-black p-5 transition-transform hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-3">
                <div className="text-black text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </div>
                <div className="text-black text-xs font-medium">
                  {item.date}
                </div>
              </div>
              <h4 className="text-black text-lg font-bold mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <p className="text-black text-sm mb-4 line-clamp-3 font-medium">
                {item.excerpt}
              </p>
              <div className="pt-3 border-t-2 border-black">
                <button className="text-black text-sm font-bold flex items-center hover:bg-black hover:text-white px-2 transition-colors">
                  Read Article
                  <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View all news button */}
      <div className="container mx-auto px-6 mt-12 flex justify-center">
        <button className="bg-white border-2 border-black text-black hover:bg-black hover:text-white py-3 px-6 transition-colors flex items-center text-sm font-bold uppercase tracking-wide">
          Browse All News
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
      {/* Newsletter banner */}
      <div className="container mx-auto mt-12 sm:mt-20">
        <div className="bg-white border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 relative overflow-hidden">
          {/* Newsletter content */}
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 space-y-4 md:space-y-0">
            <div className="mb-4 md:mb-0 md:mr-10 text-center md:text-left">
              <h3 className="text-black text-xl sm:text-2xl font-black mb-2">Stay Updated with Chainsaw Man</h3>
              <p className="text-black max-w-lg font-medium text-sm sm:text-base">
                Subscribe to our newsletter to receive the latest news, chapter releases, and exclusive content.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-2 border-black text-black px-3 sm:px-4 py-2 sm:py-3 focus:outline-none w-full md:w-64 font-medium text-sm"
              />
              <button className="bg-black hover:bg-white hover:text-black text-white py-2 sm:py-3 px-4 sm:px-6 font-bold transition-colors uppercase tracking-wide whitespace-nowrap border-2 border-black text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Manga sound effect */}
      <div className="absolute bottom-20 right-20 transform rotate-12">
        <div className="text-black font-black text-4xl">ダッ!</div>
      </div>
    </div>
  );
};

export default News;