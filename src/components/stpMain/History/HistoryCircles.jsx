import {useState} from "react"
import Pic1 from '../../../assets/Committees.png'
import Pic2 from '../../../assets/Committees2.png'
import Pic3 from '../../../assets/Awards1.png'
import Pic4 from '../../../assets/Committees.png'
import Pic5 from '../../../assets/Committees2.png'
import MobileCarousel from "../../common/MobileCarousel"

const items = [
  {id: 1, image: Pic1, alt: "Image 1"},
  {id: 2, image: Pic2, alt: "Image 2"},
  {id: 3, image: Pic3, alt: "Image 3"},
  {id: 4, image: Pic4, alt: "Image 4"},
  {id: 5, image: Pic5, alt: "Image 5"},
]

export default function HistoryCircles () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className="container mx-auto  py-10">
      {/* Large screen layout */}
      <div className="hidden md:flex justify-between gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-3 border-primary  transition-all"
          >
            <img src={item.image} alt={item.alt} className="w-48 h-48 object-cover   transition-all" />
          </div>
        ))}
      </div>

      {/* Small screen layout */}
      <div className="block md:hidden">
        <MobileCarousel slides={items} />
      </div>
    </div>
  )
}
