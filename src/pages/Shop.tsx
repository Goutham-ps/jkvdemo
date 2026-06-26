import { motion } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';

const allProducts = [
  { id: 1, name: "Premium Silk Blend Dhoti with Gold Zari", price: "₹3,499", image: "https://images.unsplash.com/photo-1594912953285-8022d2ee7f1a?auto=format&fit=crop&w=800&q=80", category: "mens-dhoti" },
  { id: 2, name: "Pure Cotton Traditional Shirt", price: "₹1,899", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce3?auto=format&fit=crop&w=800&q=80", category: "traditional-shirts" },
  { id: 3, name: "Kids Festive Dhoti Set", price: "₹2,199", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80", category: "kids-wear" },
  { id: 4, name: "Royal Tissue Silk Dhoti", price: "₹5,999", image: "https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=800&q=80", category: "mens-dhoti" },
  { id: 5, name: "Classic White Half-Sleeve Shirt", price: "₹1,499", image: "https://images.unsplash.com/photo-1594912953285-8022d2ee7f1a?auto=format&fit=crop&w=800&q=80", category: "traditional-shirts" },
  { id: 6, name: "Boys Silk Blend Kurta", price: "₹1,699", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80", category: "kids-wear" },
];

export default function Shop() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter 
    ? allProducts.filter(p => p.category === categoryFilter)
    : allProducts;

  return (
    <div className="bg-offwhite min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h1 className="font-serif text-5xl text-forest mb-6">
            {categoryFilter === 'mens-dhoti' ? "Men's Dhotis" :
             categoryFilter === 'traditional-shirts' ? "Traditional Shirts" :
             categoryFilter === 'kids-wear' ? "Kids Wear" : "All Collection"}
          </h1>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
          <p className="text-forest/70 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Explore our curated selection of premium traditional wear. Each piece is crafted with meticulous attention to detail and reverence for heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar (Mock) */}
          <div className="hidden md:block col-span-1 space-y-8">
            <div>
              <h3 className="font-serif text-xl mb-4 text-forest border-b border-gold/20 pb-2">Categories</h3>
              <ul className="space-y-3">
                <li><Link to="/shop" className={`text-[11px] uppercase tracking-widest ${!categoryFilter ? 'font-bold text-gold' : 'text-forest/70 hover:text-gold'}`}>All Products</Link></li>
                <li><Link to="/shop?category=mens-dhoti" className={`text-[11px] uppercase tracking-widest ${categoryFilter === 'mens-dhoti' ? 'font-bold text-gold' : 'text-forest/70 hover:text-gold'}`}>Men's Dhotis</Link></li>
                <li><Link to="/shop?category=traditional-shirts" className={`text-[11px] uppercase tracking-widest ${categoryFilter === 'traditional-shirts' ? 'font-bold text-gold' : 'text-forest/70 hover:text-gold'}`}>Traditional Shirts</Link></li>
                <li><Link to="/shop?category=kids-wear" className={`text-[11px] uppercase tracking-widest ${categoryFilter === 'kids-wear' ? 'font-bold text-gold' : 'text-forest/70 hover:text-gold'}`}>Kids Wear</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4 text-forest border-b border-gold/20 pb-2">Price Range</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-[11px] uppercase tracking-widest text-forest/70 hover:text-gold">Under ₹2,000</Link></li>
                <li><Link to="#" className="text-[11px] uppercase tracking-widest text-forest/70 hover:text-gold">₹2,000 - ₹5,000</Link></li>
                <li><Link to="#" className="text-[11px] uppercase tracking-widest text-forest/70 hover:text-gold">Above ₹5,000</Link></li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-span-1 md:col-span-3">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gold/10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-forest/50 font-bold">Showing {filteredProducts.length} results</span>
              <select className="border border-gold/30 bg-transparent text-forest px-4 py-2 text-[10px] uppercase tracking-widest focus:outline-none focus:border-gold">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  <div className="text-center px-2">
                    <h3 className="font-serif text-md text-forest mb-2 truncate">{product.name}</h3>
                    <p className="text-[11px] text-gold font-bold">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
