import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { LuMoonStar } from "react-icons/lu";
import { BiSolidLike } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { RiFolderCloseFill } from "react-icons/ri";

export default function Bookmark() {
  return (
    <div className=''>
      
        {/* Navbar start  */}

    <div className='bg-gray-100 py-4 md:fixed w-full z-10'>
      
      <div className='px-4'>

          <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>


              <div className='flex gap-6 items-center'>

                  <a href=""><img src="./Images/home-logo.png" alt="" className='h-[40px] w-[42px]'/></a>
              
                <h1 className='text-[16px] font-semibold'>বুকমার্ক পেইজ</h1>
                

              </div>


            
             

              <div className='flex items-center gap-6'>

              <div className=''>

                <input type="text" class="flex search pl-12 border-[1px] border-gray-600 py-4 pr-3 rounded-lg" placeholder="Search Hadith"/>

             </div>

              <div className='bg-primary hover:cursor-pointer rounded-lg px-6 py-4 flex gap-2 justify-center items-center'>

                   <a href=""><p className='text-white font-semibold text-[14px]'>সাপোর্ট করুন</p></a>
                   <img src="./Images/hand.svg" alt="" />

              </div>

              

              <a href=''> 
              
              <div className='bg-gray-200 px-2.5 py-2.5 rounded-lg hover:bg-gray-300 hover:transition hover:duration-500'>
                  
                  
                  <LuMoonStar className='text-[20px]' />

              </div> 
              </a>
                  


              </div>


          </div>

      </div>

  </div>

{/* Navbar end */}



{/* sidebar start  */}

    
    <div className='bg-gray-100 h-screen w-[100px] md:fixed mt-[90px]'>

         <div className='flex flex-col justify-center items-center gap-8 pt-[100px]'>

            <div className='p-3 hover:bg-gray-200 hover:text-primary rounded-lg'>

            <a href=""><IoHome className='text-[30px]' /></a>

            </div>

            <div className='p-3 hover:bg-gray-200 hover:text-primary rounded-lg'>

            <a href=""><FaAddressBook className='text-[30px]' /></a> 
            
            </div>

            <div className='p-3 hover:bg-gray-200 hover:text-primary rounded-lg'>

            <a href=""><IoBookOutline className='text-[30px]' /> </a> 
            
            </div>

            <div className='p-3 hover:bg-gray-200 hover:text-primary rounded-lg'>

            <a href=""><CiBookmark className='text-[30px]' /></a>  
            
            </div> 

            <div className='p-3 hover:bg-gray-200 hover:text-primary rounded-lg'>

            <a href=""><FaBorderAll className='text-[30px]' /></a>  
            
            </div>   

            <div className='p-3 hover:bg-gray-200 hover:text-primary rounded-lg'>

            <a href=""><BsSend className='text-[30px]' /></a> 
            
            </div> 
            
                 
   
         </div>


    </div>



{/* sidebar end */}



{/* All books start*/}

<div className=''>

    <div className='absolute shadow-lg top-[100px] left-[17%] px-8 flex items-center justify-between mt-4 py-4 rounded-lg mx-auto bg-white w-[1138px]'>

        <div className='text-[20px] font-semibold'>


             <h1>বুকমার্ক পেইজ</h1>

        
        </div>

        <div className=''>

                <input type="text" class="bg-gray-50 flex search1 pl-12 border-[1px] border-gray-600 py-3 pr-3 rounded-lg" placeholder="Search For Filter"/>

        </div>

    </div>



<div className='absolute top-[250px] left-[600px] mt-10 md:px-[190px]'>


<RiFolderCloseFill className='text-[150px] text-primary'/>



</div>

<div className='relative'>
    
<h1 className='text-[25px] absolute top-[500px] left-[680px] text-center'>কোন বুকমার্ক ফোল্ডার পাওয়া যায়নি</h1>

</div>

</div>


{/* All books end */}



    </div>
  )
}
