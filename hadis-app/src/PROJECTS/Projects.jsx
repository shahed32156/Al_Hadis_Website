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
import { FaApple } from "react-icons/fa";

export default function Projects() {
  return (
    <div className=''>
      
        {/* Navbar start  */}

    <div className='bg-gray-100 py-4 md:fixed w-full z-10'>
      
      <div className='px-4'>

          <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>


              <div className='flex gap-6 items-center'>

                  <a href=""><img src="./Images/home-logo.png" alt="" className='h-[40px] w-[42px]'/></a>
              
                <div className='flex flex-col gap-1'>

                    <a href=""><h1 className='text-[16px] font-semibold'>প্রজেক্ট সমূহ</h1></a>
                    <a href=""><h1 className='text-[12px] text-gray-600'>আমাদের সকল প্রজেক্ট</h1></a>

                </div>
                

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



<div className='absolute top-[10px] mt-10 md:px-[190px]'>


<div className='bg-blue-100 px-14 pt-6 pb-4 mt-20 mx-4 md:mx-[100px] rounded-[30px]'>


<div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-6'>


<div className='flex flex-col gap-4 justify-center items-center md:items-start'>


        <div>

            <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>ডাউনলোড করুন</h1>

        </div>

        <div className=''>

             <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>আল হাদিস মোবাইল অ্যাপ</h1>
  

        </div>

        <div className='flex items-center justify-center w-[630px] text-[16px] mt-10'>

         
         <p className='leading-8 text-gray-600 w-[350px] md:w-full'> আল হাদিস অ্যাপের মাধ্যমে, হাদিস পড়া, বুকমার্ক, অনলাইন সিংকিং সহ আরও অনেক কিছু সহজেই পারবেন। এখনই আমাদের অ্যাপটি ডাউনলোড করুন!</p>
        
        </div>

        <div className='flex flex-col md:flex-row  items-center gap-4 mt-10'>

                <div className='flex items-center gap-3 bg-green-200 hover:cursor-pointer hover:bg-gray-300 w-[200px] justify-center py-2 rounded-xl'>
               
                     <img src="./Images/play.svg" alt="" className='h-[40px] w-[40px]' />
                     <div>
                        
                     <p className='uppercase font-extralight text-[14px] text-gray-600'>Get it on</p>
                     
                     <p className='text-[18px] font-semibold'>Google Play</p>

                     </div>  
                </div>
                
                   
                <div className='flex items-center gap-3 bg-green-200 hover:cursor-pointer hover:bg-gray-300 w-[200px] justify-center py-2 rounded-xl'>
               
               <FaApple className='text-[30px]' />

               <div>
                  
               <p className='font-extralight text-[14px] text-gray-600'>Download on the</p>
               
               <p className='text-[18px] font-semibold'>App store</p>

               </div>  
          </div>    
                
        
        </div>

</div>


 <div>

  <img src="./Images/mobile.png" alt="" className='h-[500px] w-[250px]' />

</div>       

       

</div>



</div>


</div>



</div>


{/* All books end */}



    </div>
  )
}
