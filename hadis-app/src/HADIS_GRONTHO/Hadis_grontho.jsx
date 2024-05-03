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


export default function Hadis_grontho() {
  return (
    <div className=''>
      
        {/* Navbar start  */}

    <div className='bg-gray-100 py-4 md:fixed w-full z-10'>
      
      <div className='px-4'>

          <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>


              <div className='flex gap-6 items-center'>

                  <a href=""><img src="./Images/home-logo.png" alt="" className='h-[40px] w-[42px]'/></a>

                  <h1 className='text-[16px] font-semibold'>হাদিস গ্রন্থসমূহ</h1>

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


             <h1>সকল বই</h1>

        
        </div>

        <div className=''>

        <input type="text" class="bg-gray-50 flex search1 pl-12 border-[1px] border-gray-600 py-3 pr-3 rounded-lg" placeholder="Search For Filter"/>

        </div>

    </div>



<div className='absolute top-[200px] left-[70px] grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:px-[190px]'>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>B</p>
     </div>

     <div>
      
      <p>সহিহ বুখারী</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৭৫৬৩</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>M</p>
     </div>

     <div>
      
      <p>সহিহ মুসলিম</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৭৪৫৩</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>N</p>
     </div>

     <div>
      
      <p>সুনানে আন-নাসায়ী</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৫৭৫৮</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>AD</p>
     </div>

     <div>
      
      <p>সুনানে আবু দাউদ</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৫২৭৪</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>T</p>
     </div>

     <div>
      
      <p>জামে' আত-তিরমিজি</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৩৯৫৬</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>IM</p>
     </div>

     <div>
      
      <p>সুনানে ইবনে মাজাহ</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৪৩৪১</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>MI</p>
     </div>

     <div>
      
      <p>মুয়াত্তা ইমাম মালিক</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ১৮৩২</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>RS</p>
     </div>

     <div>
      
      <p>রিয়াদুস সলেহিন</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ১৯০৫</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>BM</p>
     </div>

     <div>
      
      <p>বুলুগুল মারাম</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ১৫৬৮</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>B</p>
     </div>

     <div>
      
      <p>সহিহ বুখারী</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৭৫৬৩</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>M</p>
     </div>

     <div>
      
      <p>সহিহ মুসলিম</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৭৪৫৩</p>
      </div>

     </div>
      
 </div>

 <div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
     <div className='flex gap-4 items-center'>

     <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
     <p className='text-[18px] font-semibold flex justify-center items-center py-3'>N</p>
     </div>

     <div>
      
      <p>সুনানে আন-নাসায়ী</p>
      <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৫৭৫৮</p>
      </div>

     </div>
      
 </div>



<div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
   
   <div className='flex gap-4 items-center'>

   <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
   <p className='text-[18px] font-semibold flex justify-center items-center py-3'>AD</p>
   </div>

   <div>
    
    <p>সুনানে আবু দাউদ</p>
    <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৫২৭৪</p>
    </div>

   </div>
    
</div>

<div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
 
   <div className='flex gap-4 items-center'>

   <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
   <p className='text-[18px] font-semibold flex justify-center items-center py-3'>T</p>
   </div>

   <div>
    
    <p>জামে' আত-তিরমিজি</p>
    <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৩৯৫৬</p>
    </div>

   </div>
    
</div>

<div className='bg-white hover:bg-green-100 py-6 pl-6 w-[380px] rounded-2xl mx-auto hover:cursor-pointer shadow-xl'>
 
   <div className='flex gap-4 items-center'>

   <div className='h-[50px] w-[50px] rounded-full hover:bg-primary hover:text-white text-gray-600 bg-gray-200'>
   <p className='text-[18px] font-semibold flex justify-center items-center py-3'>IM</p>
   </div>

   <div>
    
    <p>সুনানে ইবনে মাজাহ</p>
    <p className='text-[14px] text-gray-600'>হাদিসের রেঞ্জ: ৪৩৪১</p>
    </div>

   </div>
    
</div>



</div>

</div>


{/* All books end */}



    </div>
  )
}
