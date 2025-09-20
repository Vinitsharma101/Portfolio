import React from 'react';
import { motion } from 'framer-motion';
import { Send} from 'lucide-react';
interface ScrollToTopButtonProps {
  onOpenContact: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onOpenContact }) => {
  const handleClick = () => {
    onOpenContact();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-red-500 to-purple-600 rounded-full p-2 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Send size={18} className="m-2" />
    </motion.div>
  );
};

export default ScrollToTopButton;