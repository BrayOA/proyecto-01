
import { useState } from "react"
import Sidebar from "./components/shared/Sidebar"
import {
      RiMenu3Fill, 
      RiUser3Line, 
      RiAddLine, 
      RiPieChartLine,
      RiCloseLine,
      RiSearch2Line,
      RiArrowDownSLine} 
      from "react-icons/ri"


function App() {

  const [showMenu, setShowMenu] = useState (false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">  
    <Sidebar showMenu={showMenu}/>
    {/* Menu movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 
      py-2 px-8 flex items-center justify-between rounded-tl-xl rounden-tr-xl
      justify-between rounded-tl-xl rounded-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4">
        <div className="lg:col-span-6 ">
          {/* Header */}
            <header>
              {/* title and search */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
               <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">06 julio 2023</p>
               </div>
               <form>
                <div className=" w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-nome" placeholder="Search"/> 
                </div>
               </form>
              </div>
              {/* Tabs */}
              <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#16a34a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#16a34a]" >Hot dishes</a>
                <a href="#" className=" py-2 pr-4">Cold dishes</a>
                <a href="#" className=" py-2 pr-4">Soup</a>
                <a href="#" className=" py-2 ">Grill</a>

              </nav>
            </header>
              {/* title content */}
              <div className=" flex item-center justify-between mb-16">
                <h2 className="text-xl text-gray-300">Choese Dishes</h2>
                <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                  <RiArrowDownSLine/> Dine in
                </button>
              </div>
              {/* Content */}
              <div className="p-8 grid grid-cols-1 gap-16">
                {/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>
                {/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>
              </div>
        </div>
        <div className="lg:col-span-2  fixed lg:static right-0">Carrito</div>
      </main>
    </div> 
    )
      
  
}

export default App
