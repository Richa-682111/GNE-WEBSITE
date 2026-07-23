"use client";

export function HeroCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hero-video-wrap relative h-[65vh] min-h-[380px] sm:min-h-[460px] sm:h-[80vh] md:h-[calc(100vh-4.5rem)] w-full overflow-hidden flex flex-col justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-droneshot.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      {/* Dark cinematic gradient overlay with warm forest-green tint */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to bottom, rgba(26,71,49,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(10,30,20,0.85) 100%)' }} />

      {/* Hero Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}