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
  const icons = [
    { Icon: ShoppingCart, color: "text-emerald-600", bg: "from-white/70 to-emerald-50" },
    { Icon: Box, color: "text-indigo-600", bg: "from-white/70 to-indigo-50" },
    { Icon: Tag, color: "text-amber-600", bg: "from-white/70 to-amber-50" },
    { Icon: Download, color: "text-cyan-600", bg: "from-white/70 to-cyan-50" },
    { Icon: Heart, color: "text-red-600", bg: "from-white/70 to-rose-50" },
    { Icon: Star, color: "text-yellow-600", bg: "from-white/70 to-yellow-50" },
    { Icon: Headphones, color: "text-gray-600", bg: "from-white/70 to-gray-50" },
    { Icon: Search, color: "text-purple-600", bg: "from-white/70 to-purple-50" },
    { Icon: Grid, color: "text-orange-600", bg: "from-white/70 to-orange-50" },
    { Icon: Upload, color: "text-teal-600", bg: "from-white/70 to-teal-50" }, // replaced Wave with Upload
    { Icon: Users, color: "text-violet-600", bg: "from-white/70 to-violet-50" }, // new Users icon
  ]

  // viewport-based positions (tweak these if you want the Users / Upload moved)
  const positions = [
    { x: "40vw", y: "-38vh" }, // cart top-right
    { x: "-40vw", y: "-42vh" }, // box top-left
    { x: "-28vw", y: "-22vh" }, // tag near left middle
    { x: "-29vw", y: "15vh" },  // download further left
    { x: "-40vw", y: "40vh" },  // heart lower left
    { x: "-22vw", y: "47vh" },  // star left bottom area
    { x: "-5vw", y: "42vh" },   // headphones bottom mid
    { x: "30vw", y: "-6vh" },   // search upper right
    { x: "25vw", y: "42vh" },   // grid right mid
    { x: "40vw", y: "20vh" },   // upload (was wave)
    { x: "-44vw", y: "-4vh" },   // users icon at top center
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {icons.map(({ Icon, color, bg }, i) => (
        <div
          key={i}
          className="absolute will-change-transform"
          style={{
            transform: `translate(${positions[i].x}, ${positions[i].y})`,
            zIndex: 5,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div
            className={`
              relative rounded-full backdrop-blur-lg
              bg-white/70 dark:bg-white/10 
              shadow-[0px_2px_10px_rgba(0,0,0,0.1)] 
              p-3 sm:p-3.5 flex items-center justify-center
              border border-white/40 dark:border-white/10
              bg-gradient-to-r ${bg} dark:from-white/10 dark:to-transparent
            `}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
