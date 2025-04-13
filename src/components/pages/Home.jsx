import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Characters from '../sections/Characters'
import Manga from '../sections/Manga'
import Gallery from '../sections/Gallery'
import News from '../sections/News'
import Footer from '../sections/Footer'

const Home = () => {
  // Define page transition variants
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Define section animation variants
  const sectionVariants = {
    initial: {
      y: 50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white text-black relative overflow-hidden flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Background texture */}
      <div className="fixed inset-0 bg-[url('https://img.freepik.com/free-photo/vintage-comic-style-dots-texture_22448-22.jpg?t=st=1744475600~exp=1744479200~hmac=d8ae348824abdd4dc60f967ae338bbbec6d36dca75ae049d2965edd05d3b3e47&w=740')] opacity-10 pointer-events-none"></div>
      
      {/* Manga panel borders */}
      <motion.div 
        className="fixed inset-0 border-[12px] border-black pointer-events-none z-10"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      
      {/* Main content */}
      <Navbar />
      <main className="flex-grow">
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants} 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Characters />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Manga />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Gallery />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <News />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home