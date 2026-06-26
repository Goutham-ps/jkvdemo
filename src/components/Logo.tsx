export default function Logo({ className = "h-16" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className} select-none`}>
      <span className="font-serif italic text-forest text-[11px] sm:text-[13px] font-bold tracking-wide mb-1 leading-none whitespace-nowrap">
        Our Traditional... Our Culture...
      </span>
      <div className="relative flex items-center justify-center mt-1">
        {/* Background intricate gold frame approximation */}
        <div className="absolute inset-[-6px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 rounded-[50%] scale-x-[1.3] shadow-md border-[2px] border-yellow-200">
        </div>
        <div className="absolute inset-[-4px] bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-500 rounded-[50%] scale-x-[1.25] shadow-inner">
        </div>
        
        {/* Red Oval */}
        <div className="bg-[#E31837] rounded-[50%] px-6 py-2 scale-x-[1.15] flex items-center justify-center shadow-[inset_0px_2px_4px_rgba(0,0,0,0.3)] z-10">
          <span className="font-serif text-white font-black text-3xl tracking-widest transform scale-x-[0.85] origin-center -ml-1">
            JKV
          </span>
        </div>
        
        {/* Trademark symbol */}
        <span className="absolute -right-16 -top-2 text-[10px] text-gray-800 font-bold z-20 font-sans bg-white/50 rounded-full px-1">
          ®
        </span>
      </div>
    </div>
  );
}
