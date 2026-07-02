import Silk from '../ui/Silk';
import CircularText from '../ui/CircularText';

export default function Hero1() {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-dark">
      {/* 3D Background */}
      <Silk
        speed={3.3}
        scale={1}
        color="#E8A020"
        noiseIntensity={2.6}
        rotation={0}
      />
      
      {/* Dark Overlay for content readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] font-light mb-6 flex flex-col items-center">
          <span className="text-white drop-shadow-2xl">Precision-built</span>
          <span className="gold-text italic font-normal text-glow-gold mt-2">digital experiences.</span>
        </h1>
        <p className="text-white/80 max-w-2xl text-[clamp(1.1rem,1.5vw,1.3rem)] font-light leading-relaxed mb-4">
          Fast. Reliable. Built to grow your business.
        </p>
        <p className="text-white/60 max-w-2xl text-[clamp(0.9rem,1.1vw,1rem)] font-light leading-relaxed">
          We craft fast, conversion-focused websites that help ambitious businesses earn trust, attract customers, and grow <span className="gold-text italic font-normal text-glow-gold">online</span>.
        </p>
      </div>

      {/* Bottom Gradient for seamless transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-dark to-transparent pointer-events-none" />

      <div className="absolute bottom-6 right-6 z-20 scale-50 sm:scale-75 md:scale-100 origin-bottom-right">
        <CircularText
          text=" CRAFTED WITH INTENTION • ENGINEERED FOR GROWTH •"
          onHover="pause"
          spinDuration={20}
          className="custom-class"
        />
      </div>
    </div>
  );
}