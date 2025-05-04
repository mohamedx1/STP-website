import placeholderLogo from "../../assets/StpLogo.png"

function Logo ({w, h}) {
  return (
    <a href="/" className="flex items-center">
      <div className={` ${ w, h } relative  overflowshidden rounded-full bg-white p-1 my-auto mx-auto`}>
        <img src={placeholderLogo || "/placeholder.svg"} alt="Logo" className="w-full h-full object-contain" />
      </div>
    </a>
  )
}

export default Logo
