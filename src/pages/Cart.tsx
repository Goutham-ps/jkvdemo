import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Cart() {
  return (
    <div className="bg-offwhite min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl text-forest mb-6"
          >
            Your Cart
          </motion.h1>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-12 text-center border border-gold/10 flex flex-col items-center"
        >
          <div className="bg-lightbg p-6 rounded-full mb-6 text-gold">
            <ShoppingBag size={64} strokeWidth={1} />
          </div>
          <h2 className="font-serif text-2xl text-forest mb-4">Your cart is currently empty.</h2>
          <p className="text-forest/70 font-light text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Before proceeding to checkout, you must add some products to your shopping cart. You will find a curated selection of premium traditional wear on our "Shop" page.
          </p>
          <Link 
            to="/shop"
            className="inline-flex items-center bg-forest text-white px-8 py-4 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-forest/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Shop
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
