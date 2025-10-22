import { TypewriterText } from "../components/typrwriter-text"

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden font-sans">
      <div className="absolute inset-0 " />

      {/* Decorative blurred circles - positioned absolutely for layering */}
      {/* Large cyan circle - bottom left */}
      <div className="absolute top-40 sm:top-60 md:top-80 left-20 sm:left-40 md:left-100 w-60 sm:w-80 md:w-100 h-60 sm:h-80 md:h-100 bg-cyan-200 rounded-full blur-3xl opacity-25" />
      {/* Large pink circle - top left */}
      <div className="absolute top-10 sm:top-20 md:top-40 left-10 sm:left-20 md:left-30 w-60 sm:w-80 md:w-100 h-60 sm:h-80 md:h-100 bg-pink-200 rounded-full blur-3xl opacity-45" />

      {/* Medium cyan circle - middle right */}

      {/* Small accent circle - bottom left */}
      <div className="absolute bottom-1/3 left-1/3 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-purple-100 rounded-full blur-3xl opacity-15" />

      {/* Content container - relative to appear above background */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-sm sm:max-w-lg md:max-w-xl">
          <TypewriterText />
          <p className="text-sm sm:text-base md:text-lg text-[#0000008A] mb-6 sm:mb-8 font-sans">
            Your one-stop digital platform for 3D models and digital creations. Join our community of creators and
            collectors today.
          </p>
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-[#0284C7] hover:bg-blue-600 text-white rounded-full font-medium transition-colors overflow-hidden relative shine-infinite font-sans">
            Explore all products
          </button>
        </div>
      </div>
    </main>
  )
}
