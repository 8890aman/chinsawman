import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-row items-center gap-4">
      {["Manga", "Characters", "Devils", "Gallery", "News"].map((item, index) => (
        <motion.li 
          key={item}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to={`/${item.toLowerCase()}`} 
              className="text-black hover:bg-black hover:text-white text-sm font-medium tracking-wide transition-colors px-4 py-2 rounded-lg"
            >
              {item}
            </Link>
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );

  const mobileNavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-4">
      {["Manga", "Characters", "Devils", "Gallery", "News"].map((item, index) => (
        <motion.li 
          key={item} 
          className="border-b border-black/10 pb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link 
            to={`/${item.toLowerCase()}`} 
            className="flex w-full text-black tracking-wide font-medium"
          >
            {item}
          </Link>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center group">
              <div className="font-black text-xl text-black mr-1 flex items-center">
                <motion.span 
                  className="group-hover:text-black/70 transition-colors"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  CHAIN
                </motion.span>
                <motion.span 
                  className="text-black/70 group-hover:text-black transition-colors"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  SAW
                </motion.span>
              </div>
              <motion.div 
                className="ml-2 px-2.5 py-1 bg-black text-white rounded-lg text-xs font-medium"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, delay: 0.6 }}
              >
                MAN
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Navigation - Center */}
          <div className="hidden lg:block w-auto mx-auto">
            {navList}
          </div>
          
          {/* Buttons - Right */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-block"
            >
              <Link to="/watch" className="text-sm font-medium text-black hover:bg-black/5 transition-colors px-4 py-2 rounded-lg">
                Watch
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-block"
            >
              <Link to="/read">
                <div className="bg-black text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors hover:bg-black/90">
                  Read Now
                </div>
              </Link>
            </motion.div>
            <motion.button
              className="h-10 w-10 text-black border border-black/20 lg:hidden p-2 rounded-full bg-white/50 backdrop-blur-sm"
              onClick={() => setOpenNav(!openNav)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openNav && (
          <motion.div 
            className="container mx-auto px-6 pb-4 pt-2 bg-white/90 backdrop-blur-sm rounded-b-2xl shadow-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileNavList}
            <div className="flex flex-col gap-3 mt-4">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link to="/watch" className="text-black tracking-wide font-medium text-center py-2.5 border border-black/10 hover:bg-black/5 block rounded-lg">
                  Watch
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="mb-2"
              >
                <Link to="/read" className="block">
                  <div className="bg-black hover:bg-black/90 text-white font-medium py-2.5 rounded-lg text-center transition-colors">
                    Read Now
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar; 