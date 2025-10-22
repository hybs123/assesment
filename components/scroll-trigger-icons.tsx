"use client"

import {
  Box,
  Tag,
  Download,
  Heart,
  Star,
  Headphones,
  Search,
  ShoppingCart,
  Grid,
  Upload,
  Users,
} from "lucide-react"

export default function ScrollTriggerIcons() {
  const bubbleClasses =
    "relative rounded-full backdrop-blur-lg bg-white/70 dark:bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-2 sm:p-3 flex items-center justify-center border border-white/40 dark:border-white/10 bg-gradient-to-r"
  const innerClasses = "w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center"
  const cardBase =
    "absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 sm:w-72 bg-white/95 dark:bg-neutral-900 rounded-lg shadow-xl text-card-foreground z-50 pointer-events-auto transition-all duration-200 ease-out scale-95 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-focus-within:opacity-100"

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* ---------- SHARED HELPER ---------- */}
      {/* Each card now centers below icon with dashed border and extra padding */}

      {/* ---------- MD / SMALL (explicit positions you provided) ---------- */}

      {/* ShoppingCart (md) */}
      <div
        className="absolute will-change-transform flex lg:hidden group pointer-events-auto"
        style={{ transform: "translate(38vw, -30vh)", zIndex: 50 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-emerald-50`} aria-hidden>
          <div className={innerClasses}>
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-emerald-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-emerald-50">
                <ShoppingCart className="w-4 h-4 text-emerald-600" />
              </span>
              Checkout
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Fast and secure payments for your 3D model purchases.
            </p>
          </div>
        </div>
      </div>

      {/* Box (md) */}
      <div
        className="absolute will-change-transform flex lg:hidden group pointer-events-auto"
        style={{ transform: "translate(-40vw, -30vh)", zIndex: 50 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-indigo-50`} aria-hidden>
          <div className={innerClasses}>
            <Box className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-indigo-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-indigo-50">
                <Box className="w-4 h-4 text-indigo-600" />
              </span>
              3D Models
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Discover thousands of high-quality 3D models for your projects.
            </p>
          </div>
        </div>
      </div>

      {/* Tag (md) */}
      <div
        className="absolute will-change-transform flex lg:hidden group pointer-events-auto"
        style={{ transform: "translate(-28vw, 22vh)", zIndex: 50 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-amber-50`} aria-hidden>
          <div className={innerClasses}>
            <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-amber-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-amber-50">
                <Tag className="w-4 h-4 text-amber-600" />
              </span>
              Pricing
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Flexible pricing options for creators and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Search (md) */}
      <div
        className="absolute will-change-transform flex lg:hidden group pointer-events-auto"
        style={{ transform: "translate(27vw, 22vh)", zIndex: 50 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-purple-50`} aria-hidden>
          <div className={innerClasses}>
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-purple-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-purple-50">
                <Search className="w-4 h-4 text-purple-600" />
              </span>
              Search
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Find exactly what you need with our powerful search tools.
            </p>
          </div>
        </div>
      </div>

      {/* Users (md) */}
      <div
        className="absolute will-change-transform flex lg:hidden group pointer-events-auto"
        style={{ transform: "translate(0vw, 40vh)", zIndex: 50 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-violet-50`} aria-hidden>
          <div className={innerClasses}>
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-violet-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-violet-50">
                <Users className="w-4 h-4 text-violet-600" />
              </span>
              Community
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Join thousands of 3D artists and designers — collaborate and sell.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- LG & ABOVE (explicit, literal classes so Tailwind includes them) ---------------- */}

      {/* ShoppingCart */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(40vw, -38vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-emerald-50`}>
          <div className={innerClasses}>
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-emerald-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-emerald-50">
                <ShoppingCart className="w-4 h-4 text-emerald-600" />
              </span>
              Checkout
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Fast and secure payments for your 3D model purchases.
            </p>
          </div>
        </div>
      </div>

      {/* Box */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-40vw, -42vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-indigo-50`}>
          <div className={innerClasses}>
            <Box className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-indigo-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-indigo-50">
                <Box className="w-4 h-4 text-indigo-600" />
              </span>
              3D Models
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Discover thousands of high-quality 3D models for your projects.
            </p>
          </div>
        </div>
      </div>

      {/* Tag */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-28vw, -22vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-amber-50`}>
          <div className={innerClasses}>
            <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-amber-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-amber-50">
                <Tag className="w-4 h-4 text-amber-600" />
              </span>
              Pricing
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Flexible pricing options for creators and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Download */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-29vw, 15vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-cyan-50`}>
          <div className={innerClasses}>
            <Download className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-cyan-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-cyan-50">
                <Download className="w-4 h-4 text-cyan-600" />
              </span>
              Downloads
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Quickly download purchased models and assets to integrate into your projects.
            </p>
          </div>
        </div>
      </div>

      {/* Heart */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-40vw, 40vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-rose-50`}>
          <div className={innerClasses}>
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-red-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-rose-50">
                <Heart className="w-4 h-4 text-red-600" />
              </span>
              Favorites
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Save items you love and collect assets for future projects.
            </p>
          </div>
        </div>
      </div>

      {/* Star */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-22vw, 47vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-yellow-50`}>
          <div className={innerClasses}>
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-yellow-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-yellow-50">
                <Star className="w-4 h-4 text-yellow-600" />
              </span>
              Featured
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Curated and highlighted assets from top creators.
            </p>
          </div>
        </div>
      </div>

      {/* Headphones */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-5vw, 42vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-gray-50`}>
          <div className={innerClasses}>
            <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-gray-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-gray-50">
                <Headphones className="w-4 h-4 text-gray-600" />
              </span>
              Audio Packs
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Browse and download sound effects and audio assets for your projects.
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(30vw, -6vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-purple-50`}>
          <div className={innerClasses}>
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-purple-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-purple-50">
                <Search className="w-4 h-4 text-purple-600" />
              </span>
              Search
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Find exactly what you need with our powerful search tools.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(25vw, 42vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-orange-50`}>
          <div className={innerClasses}>
            <Grid className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-orange-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-orange-50">
                <Grid className="w-4 h-4 text-orange-600" />
              </span>
              Collections
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Explore curated collections and catalogs of assets.
            </p>
          </div>
        </div>
      </div>

      {/* Upload */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(40vw, 20vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-teal-50`}>
          <div className={innerClasses}>
            <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-teal-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-teal-50">
                <Upload className="w-4 h-4 text-teal-600" />
              </span>
              Start Selling
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Sell 3D models, e-books and digital products effortlessly — manage your store and deliver assets.
            </p>
          </div>
        </div>
      </div>

      {/* Users */}
      <div
        className="absolute will-change-transform hidden lg:flex group pointer-events-auto"
        style={{ transform: "translate(-44vw, -4vh)", zIndex: 40 }}
      >
        <div className={`${bubbleClasses} from-white/70 to-violet-50`}>
          <div className={innerClasses}>
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
          </div>
        </div>

        <div className={`${cardBase} border-2 border-dashed border-violet-600`} role="tooltip">
          <div className="p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <span className="p-1 rounded-full bg-violet-50">
                <Users className="w-4 h-4 text-violet-600" />
              </span>
              Community
            </h3>
            <p className="mt-3 text-xs text-[#0000008A] dark:text-neutral-400">
              Join hundreds of creators, collaborate, and sell — keep 100% of your earnings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
