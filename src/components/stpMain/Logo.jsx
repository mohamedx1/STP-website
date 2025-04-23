import placeholderLogo from "../../assets/StpLogo.png"

function Logo () {
  return (
    <a href="/" className="flex items-center">
      <div className="relative h-12 w-12 overflowshidden rounded-full bg-white p-1">
        <img src={placeholderLogo || "/placeholder.svg"} alt="Logo" className="w-full h-full object-contain" />
      </div>
    </a>
  )
}

export default Logo
