"use client";

export function HeroCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[65vh] min-h-[460px] sm:h-[80vh] md:h-[calc(100vh-4.5rem)] w-full overflow-hidden flex flex-col justify-center">
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

      {/* Dark cinematic gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-darkBg/50 via-black/20 to-brand-darkBg dark:from-brand-darkBg/75 dark:via-black/30 dark:to-brand-darkBg" />

      {/* Hero Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}