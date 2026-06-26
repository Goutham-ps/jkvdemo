import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-offwhite min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl text-forest mb-6"
          >
            Contact Us
          </motion.h1>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
          <p className="text-forest/70 font-light text-sm max-w-2xl mx-auto">
            We are here to assist you with any inquiries regarding our collections, your orders, or bespoke requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 border border-gold/10 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
            <h3 className="font-serif text-2xl text-forest mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-forest/70 mb-2 font-bold">Name</label>
                <input type="text" className="w-full border-b border-gold/30 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-forest" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-forest/70 mb-2 font-bold">Email Address</label>
                <input type="email" className="w-full border-b border-gold/30 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-forest" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-forest/70 mb-2 font-bold">Subject</label>
                <input type="text" className="w-full border-b border-gold/30 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-forest" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-forest/70 mb-2 font-bold">Message</label>
                <textarea rows={4} className="w-full border-b border-gold/30 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent resize-none text-forest"></textarea>
              </div>
              <button type="submit" className="w-full bg-forest text-white py-4 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-forest/90 transition-colors mt-4">
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-serif text-2xl text-forest mb-6">Boutique Location</h3>
              <p className="text-forest/70 font-light text-sm leading-relaxed">
                124 Heritage Lane,<br />
                Textile District,<br />
                Chennai, Tamil Nadu 600001<br />
                India
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-forest mb-6">Contact Information</h3>
              <div className="space-y-4 text-forest/70 font-light text-sm">
                <p><span className="font-bold text-forest uppercase tracking-widest text-[10px]">Phone:</span> <br/>+91 44 2345 6789</p>
                <p><span className="font-bold text-forest uppercase tracking-widest text-[10px]">Email:</span> <br/>boutique@jkvtextiles.com</p>
                <p><span className="font-bold text-forest uppercase tracking-widest text-[10px]">Hours:</span> <br/>Mon-Sat, 10:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="bg-lightbg border border-gold/20 p-8">
              <h4 className="font-serif text-xl text-forest mb-4">Private Appointments</h4>
              <p className="text-sm text-forest/70 font-light leading-relaxed">
                We offer personalized styling and viewing sessions for our premium silk collections. Please contact us to schedule a private appointment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
