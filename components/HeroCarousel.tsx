"use client";

export function HeroCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[calc(100vh-4.5rem)] w-full overflow-hidden flex flex-col justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/drone2.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/10" />

      {/* Hero Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}