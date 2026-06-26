import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white text-forest border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-8">
              <img src="/logo.png" alt="JKV Logo" className="h-12 w-max object-contain" />
            </Link>
            <p className="text-forest/70 text-[11px] leading-relaxed uppercase tracking-wider mt-4">
              Preserving the rich heritage of Indian textiles through masterful craftsmanship and uncompromising quality since 1985.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Shop</h4>
            <ul className="space-y-4 text-[11px] text-forest/70 uppercase tracking-wider">
              <li><Link to="/shop?category=mens-dhoti" className="hover:text-gold font-semibold transition-colors">Men's Dhotis</Link></li>
              <li><Link to="/shop?category=traditional-shirts" className="hover:text-gold font-semibold transition-colors">Traditional Shirts</Link></li>
              <li><Link to="/shop?category=kids-wear" className="hover:text-gold font-semibold transition-colors">Kids Traditional Wear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Help</h4>
            <ul className="space-y-4 text-[11px] text-forest/70 uppercase tracking-wider">
              <li><Link to="#" className="hover:text-gold font-semibold transition-colors">Customer Service</Link></li>
              <li><Link to="#" className="hover:text-gold font-semibold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-gold font-semibold transition-colors">Care Instructions</Link></li>
              <li><Link to="/contact" className="hover:text-gold font-semibold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Newsletter</h4>
            <p className="text-forest/70 text-[11px] mb-4 uppercase tracking-wider">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-gold/30 text-forest px-4 py-2 w-full focus:outline-none focus:border-gold transition-colors text-[11px]"
              />
              <button
                type="submit"
                className="bg-forest text-white font-bold px-4 py-2 hover:bg-forest/90 transition-colors text-[11px] uppercase tracking-[0.2em]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[9px] text-forest/50 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} JKV Traditional Textiles. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-forest">Ethically Handwoven</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-forest">Pure Mulberry Silk</span>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-[10px] uppercase tracking-widest text-forest cursor-pointer hover:text-gold transition-colors">Instagram</span>
            <span className="text-[10px] uppercase tracking-widest text-forest cursor-pointer hover:text-gold transition-colors">Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
