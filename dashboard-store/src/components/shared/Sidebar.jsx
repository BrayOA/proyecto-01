import React from 'react'
import { RiHome6Line,
        RiPercentLine, 
        RiPieChartLine, 
        RiMailLine, 
        RiNotification3Line, 
        RiSettings4Line,
        RiLogoutCircleRLine
    
       } from "react-icons/ri";

const Sidebar = (props) => {

    const {showMenu} = props

  return (
    <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-24 h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
        <div>
            <ul className='pl-4'>
                <li> 
                  <img src="/public/img/ft.png" alt="Clean Vegan Food Logo" />
                </li>
                <li className='bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl'>
                    <a href='#' className='bg-[#16a34a] p-3 flex justify-center rounded-xl text-white'>
                        <RiHome6Line className='text-2xl '/>
                    </a>
                </li>

                <li className='hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transitions-colors'>
                    <a href='#' className='group-hover:bg-[#16a34a] p-3 flex justify-center rounded-xl text-[#16a34a] group-hover:text-white  transitions-colors  '>
                        <RiPercentLine className='text-2xl '/>
                    </a>
                </li>

                <li className='hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transitions-colors'>
                    <a href='#' className='group-hover:bg-[#16a34a] p-3 flex justify-center rounded-xl text-[#16a34a] group-hover:text-white  transitions-colors  '>
                        <RiPieChartLine className='text-2xl '/>
                    </a>
                </li>

                <li className='hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transitions-colors'>
                    <a href='#' className='group-hover:bg-[#16a34a] p-3 flex justify-center rounded-xl text-[#16a34a] group-hover:text-white  transitions-colors  '>
                        <RiMailLine className='text-2xl '/>
                    </a>
                </li>

                <li className='hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transitions-colors'>
                    <a href='#' className='group-hover:bg-[#16a34a] p-3 flex justify-center rounded-xl text-[#16a34a] group-hover:text-white  transitions-colors  '>
                        <RiNotification3Line className='text-2xl '/>
                    </a>
                </li>

                <li className='hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transitions-colors'>
                    <a href='#' className='group-hover:bg-[#16a34a] p-3 flex justify-center rounded-xl text-[#16a34a] group-hover:text-white  transitions-colors  '>
                        <RiSettings4Line className='text-2xl '/>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='pl-4'>
                <li className='hover:bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl group transitions-colors'>
                <a href='#' className='group-hover:bg-[#16a34a] p-3 flex justify-center rounded-xl text-[#16a34a] group-hover:text-white  transitions-colors  '>
                    <RiLogoutCircleRLine className='text-2xl '/>
                </a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
 