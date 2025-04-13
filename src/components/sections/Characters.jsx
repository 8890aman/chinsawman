import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Characters = () => {
  const characters = [
    {
      id: 1,
      name: "Denji",
      title: "Chainsaw Devil",
      description: "A former Devil Hunter who merged with Pochita and became the Chainsaw Man. He has a simple dream: to live a normal life.",
      stats: { power: 95, speed: 85, intelligence: 45, potential: 100 },
      image: "/chainsaw-man-manga.jpg",
      icon: "game-icons:chainsaw"
    },
    {
      id: 2,
      name: "Makima",
      title: "Control Devil",
      description: "The leader of Public Safety Devil Hunters. A mysterious woman with powerful abilities and unknown motives.",
      stats: { power: 90, speed: 70, intelligence: 100, potential: 95 },
      image: "/makima-character.jpg",
      icon: "game-icons:hypnosis"
    },
    {
      id: 3,
      name: "Power",
      title: "Blood Devil",
      description: "A fiend with the Blood Devil's power. Unpredictable, selfish and childish, but becomes Denji's closest friend.",
      stats: { power: 75, speed: 80, intelligence: 50, potential: 85 },
      image: "https://i.pinimg.com/736x/c9/44/e6/c944e6857a1ee4621a909d9680936c30.jpg",
      icon: "game-icons:drop"
    },
    {
      id: 4,
      name: "Aki Hayakawa",
      title: "Devil Hunter",
      description: "A serious and dedicated devil hunter who works alongside Denji and Power. He has contracts with multiple devils.",
      stats: { power: 65, speed: 70, intelligence: 85, potential: 75 },
      image: "https://i.pinimg.com/736x/70/3a/7a/703a7ad870e26011d141dc22972d7836.jpg",
      icon: "game-icons:katana"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const statBarVariants = {
    hidden: { width: 0 },
    visible: (value) => ({
      width: `${value}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      {/* Manga panel borders */}
      <div className="absolute left-6 top-0 bottom-0 w-[4px] bg-black"></div>
      <div className="absolute right-6 top-0 bottom-0 w-[4px] bg-black"></div>
      
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[url('https://api.iconify.design/game-icons:notebook.svg?color=black')] opacity-5 bg-no-repeat transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[url('https://api.iconify.design/game-icons:notebook.svg?color=black')] opacity-5 bg-no-repeat transform -rotate-12"></div>
        
        {/* Manga style action lines */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-10">
          <div className="w-full h-[2px] bg-black rotate-[15deg] transform translate-y-[100px]"></div>
          <div className="w-full h-[1px] bg-black rotate-[25deg] transform translate-y-[130px]"></div>
          <div className="w-full h-[3px] bg-black rotate-[35deg] transform translate-y-[160px]"></div>
        </div>
      </div>
      
      {/* Section header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-wider mb-4 border-2 border-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            FEATURED
          </div>
          
          <h2 className="relative">
            <span className="text-5xl lg:text-6xl font-black text-black mb-3 inline-block border-b-4 border-black z-999">Devil Characters</span>
            <motion.div 
              className="absolute -top-3 -right-4 transform rotate-12 text-xs font-black"
              animate={{ 
                y: [0, -5, 0],
                rotate: [12, 15, 12]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              デビル
            </motion.div>
          </h2>
          
          <motion.p 
            className="text-black max-w-2xl text-center font-medium border-l-4 border-r-4 border-black px-4 py-2 bg-white/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            In a world where Devils are born from human fears, these characters navigate the dangerous line between humanity and monstrosity.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Characters grid */}
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {characters.map((character) => (
            <motion.div 
              key={character.id} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-lg overflow-hidden border-4 border-black transition-all duration-300 group h-[650px] flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.9)]"
            >
              {/* Character image container with fixed height */}
              <div className="h-[300px] relative overflow-hidden flex-shrink-0">
                {/* Character image with grayscale filter */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-[70%] contrast-125 brightness-110"
                    onError={(e) => {
                      e.target.src = `/placeholder-${character.id}.jpg`;
                      e.target.onerror = null;
                    }}
                  />
                </motion.div>
                
                {/* Enhanced overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Character name badge with hover effect */}
                <div className="absolute top-4 left-0 bg-black text-white px-4 py-1 font-bold text-sm uppercase tracking-wider clip-path-[polygon(0_0,100%_0,95%_100%,0%_100%)] group-hover:bg-red-700 transition-colors duration-300">
                  {character.name}
                </div>
                
                {/* Devil symbol overlay - customized per character */}
                <motion.div 
                  className="absolute bottom-6 right-6 w-16 h-16 opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className={`w-full h-full bg-[url('https://api.iconify.design/${character.icon}.svg?color=white')] bg-contain bg-no-repeat`}></div>
                </motion.div>
                
                {/* Manga-style action lines */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden opacity-70">
                  <div className="w-[200%] h-[3px] bg-black rotate-[25deg] transform translate-y-[30px]"></div>
                  <div className="w-[200%] h-[2px] bg-black rotate-[15deg] transform translate-y-[45px]"></div>
                  <div className="w-[200%] h-[1px] bg-black rotate-[35deg] transform translate-y-[60px]"></div>
                </div>
              </div>
              
              {/* Character title banner with enhanced hover effect */}
              <div className="w-full bg-black text-white py-2 px-4 flex justify-between items-center flex-shrink-0 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                <h3 className="font-bold">{character.title}</h3>
                <motion.div 
                  className="h-4 w-4 rounded-full bg-white relative overflow-hidden"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </motion.div>
              </div>
              
              {/* Stats and description section with flex-grow */}
              <div className="p-5 bg-white flex-grow flex flex-col">
                <p className="text-black text-sm mb-5 font-medium border-l-2 border-black pl-3 h-[60px] overflow-hidden">
                  {character.description}
                </p>
                
                {/* Stats bars with animated entry */}
                <div className="space-y-3 flex-grow">
                  {Object.entries(character.stats).map(([statName, value]) => (
                    <div key={statName} className="flex items-center">
                      <span className="text-black text-xs uppercase w-24 font-bold">{statName}</span>
                      <div className="flex-1 h-3 bg-gray-200 rounded-sm overflow-hidden">
                        <motion.div 
                          className="h-full bg-black"
                          variants={statBarVariants}
                          custom={value}
                        ></motion.div>
                      </div>
                      <span className="text-black text-xs ml-2 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Call-to-action button at bottom with enhanced hover effect */}
              <div className="p-4 bg-white border-t border-black mt-auto flex-shrink-0">
                <button className="w-full py-2 border-2 border-black text-black hover:bg-black hover:text-white rounded-md text-sm font-bold transition-all duration-300 uppercase tracking-wide shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px]">
                  View Profile
                </button>
              </div>
              
              {/* Manga corner mark styled */}
              <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-black border-l-[20px] border-l-transparent border-b-[20px] border-b-transparent group-hover:border-t-red-700 group-hover:border-r-red-700 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Enhanced manga style decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-20 transform -rotate-12"
        animate={{ 
          x: [0, -5, 0, 5, 0],
          y: [0, -3, 0, 3, 0],
          rotate: [-12, -14, -12, -10, -12],
          scale: [1, 1.05, 1, 0.95, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "loop" 
        }}
      >
        <div className="text-black font-black text-lg">ドドド!</div>
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-10"
        initial={{ rotate: -12 }}
        animate={{ rotate: [-12, -10, -14, -12] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      >
        <div className="border-4 border-black h-20 w-20 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
      </motion.div>
    </section>
  );
};

export default Characters; 