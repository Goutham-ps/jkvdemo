import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-offwhite min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=1200&q=80"
          alt="Weaving loom"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[1.1]">Our Heritage</h1>
            <p className="text-gold uppercase tracking-[0.2em] text-[11px] font-bold">Weaving traditions since 1985</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center"
        >
          <h2 className="font-serif text-4xl text-forest">The Story of JKV</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          
          <p className="text-sm text-forest/70 font-light leading-relaxed text-justify max-w-2xl mx-auto">
            Founded in the heart of India's textile producing regions, JKV was born from a profound respect for the artistry of traditional weaving. For over three decades, we have been dedicated to preserving and elevating the classic Indian garments—the Dhoti and the Traditional Shirt.
          </p>
          
          <p className="text-sm text-forest/70 font-light leading-relaxed text-justify max-w-2xl mx-auto">
            What began as a small family endeavor has grown into a beacon of premium quality. We work directly with master artisans whose skills have been passed down through generations. Every thread we weave carries the weight of history and the promise of enduring elegance.
          </p>

          <p className="text-sm text-forest/70 font-light leading-relaxed text-justify max-w-2xl mx-auto">
            At JKV, we don't just sell clothing; we offer a piece of heritage. Our rigorous quality control ensures that only the finest cottons, luxurious silks, and pristine zari borders make it into our collections. Whether it's for a momentous occasion or celebrating daily traditions, JKV stands as a symbol of uncompromised luxury and cultural pride.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
