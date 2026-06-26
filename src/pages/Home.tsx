import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Men's Dhotis",
    image: "https://images.unsplash.com/photo-1594912953285-8022d2ee7f1a?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=mens-dhoti"
  },
  {
    name: "Traditional Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce3?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=traditional-shirts"
  },
  {
    name: "Kids Wear",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=kids-wear"
  }
];

const bestSellers = [
  {
    id: 1,
    name: "Premium Silk Blend Dhoti with Gold Zari",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1594912953285-8022d2ee7f1a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Pure Cotton Traditional Shirt",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Kids Festive Dhoti Set",
    price: "₹2,199",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Royal Tissue Silk Dhoti",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section className="h-[85vh] w-full flex flex-col md:flex-row overflow-hidden relative bg-offwhite">
        <div className="w-full md:w-[40%] bg-offwhite flex flex-col justify-center px-8 md:px-16 py-12 relative z-20">
          <div className="h-[1px] w-12 bg-gold mb-6"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-forest leading-[1.1] mb-6"
          >
            Timeless Elegance, <br/>
            <span className="italic text-gold">Woven in Tradition.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-forest/70 font-light leading-relaxed mb-8 max-w-xs"
          >
            Discover the finest collection of traditional Dhotis and Shirts, woven with heritage and luxury.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center w-max px-10 py-4 bg-forest text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-forest/90 transition-all"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
        <div className="w-full md:w-[60%] relative bg-lightbg flex-1 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-offwhite to-transparent z-10 w-32 hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-offwhite to-transparent z-10 h-32 bottom-0 block md:hidden"></div>
          <div className="w-full h-full bg-forest/5 flex items-center justify-center p-4 md:p-12 lg:p-24">
            <div className="w-full h-full border border-gold/30 p-2 relative">
              <img
                src="https://images.unsplash.com/photo-1583391733959-b00693a1d3f9?auto=format&fit=crop&w=800&q=80&w=2000"
                alt="Luxury Traditional Indian Textiles"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-forest mb-4">Curated Collections</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-lightbg border border-gold/10 mb-4 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-forest/5" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-forest mb-2">{category.name}</h3>
                <Link 
                  to={category.link}
                  className="inline-flex items-center text-[10px] uppercase tracking-widest text-gold font-bold hover:text-forest transition-colors"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Heritage Section */}
      <section className="bg-white py-24 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-4 border border-gold/20 bg-lightbg"
            >
              <img 
                src="https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=1200&q=80" 
                alt="Craftsmanship" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/jkv1/800/1200";
                }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 pl-0 lg:pl-12"
            >
              <div className="h-[1px] w-12 bg-gold mb-6"></div>
              <h2 className="font-serif text-5xl text-forest leading-[1.1]">A Legacy of <br/><span className="text-gold italic">Craftsmanship</span></h2>
              <p className="text-forest/70 font-light leading-relaxed text-sm">
                Since 1985, JKV has been at the forefront of preserving India's rich textile heritage. Every garment is a testament to the skill of our master weavers, combining centuries-old techniques with modern elegance.
              </p>
              <p className="text-forest/70 font-light leading-relaxed text-sm">
                We believe that true luxury lies in the details—the purity of the fabric, the precision of the weave, and the timelessness of the design.
              </p>
              <Link 
                to="/about"
                className="inline-block bg-forest text-white px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-forest/90 transition-colors mt-4 rounded-sm"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-offwhite">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="font-serif text-4xl text-forest mb-4">Signature Pieces</h2>
          <div className="h-[1px] w-12 bg-gold mb-6"></div>
          <Link to="/shop" className="text-[10px] uppercase tracking-widest text-gold hover:text-forest transition-colors font-bold">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-lightbg mb-4 border border-gold/10 p-2">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/5 transition-colors duration-300" />
                <button className="absolute bottom-6 left-6 right-6 bg-forest text-white py-3 uppercase tracking-[0.2em] text-[10px] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-forest/90">
                  Add to Cart
                </button>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-md text-forest mb-2">{product.name}</h3>
                <p className="text-[11px] text-gold font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose JKV */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl text-forest mb-4">The JKV Standard</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-forest text-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-gray-900">Uncompromising Quality</h3>
              <p className="text-gray-600 leading-relaxed font-light">Only the finest silks and pure cottons are selected for our garments, ensuring a luxurious feel and exceptional durability.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-forest text-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-gray-900">Master Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed font-light">Woven by multi-generational artisans using techniques refined over centuries to preserve India's textile legacy.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-forest text-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-gray-900">Elegant Gifting</h3>
              <p className="text-gray-600 leading-relaxed font-light">Each piece arrives in our signature JKV luxury packaging, making it a perfect gift for weddings and special occasions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-forest mb-4">Client Experiences</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The quality of the tissue silk dhoti is exceptional. It draped perfectly for my wedding day. True luxury.", author: "Arjun K.", role: "Groom" },
              { text: "I've been wearing traditional shirts for decades, and JKV's craftsmanship is unmatched. The fabric breathes beautifully.", author: "Rajesh V.", role: "Loyal Patron" },
              { text: "The kids festive collection is adorable yet maintains the premium feel of the adult line. Highly recommended.", author: "Priya S.", role: "Mother" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white p-10 shadow-sm border border-gray-100"
              >
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-light leading-relaxed mb-8 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-serif text-forest text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gold tracking-widest uppercase">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
