import React from 'react'

const Habot = () => {
  return (
    <div>
      
        <img src="logo.svg" alt="logo" className='m-4 '/>
        <div className='flex justify-end m-3'>
        <span className=' text-lg text-gray-400 font-normal'>Find Suppliers</span>
        <span className='flex justify-end text-lg text-gray-400 font-normal'>Find Service Tags</span>
        <button className='w-40 h-10 rounded-md border-2 border-green-600 text-green-600'>Login/Sign Up</button>
      </div>
      <div className='bg-hero-pattern w-full h-[609px] bg-cover overflow-auto flex flex-col justify-center'>
        {/* <img src='bg.png' alt='bg' className='absolute top-[0px] left-[0px] w-[1512px] h-[609px] object-cover' /> */}
        
        <h4 className='p-6 text-6xl font-semibold text-white'>Are You a Supplier?</h4>
        <h3 className='p-1 text-6xl font-normal text-white'>Explore Matching Opportunities</h3>
        <span className='p-3'>
            <input type="input" placeholder='Search your required service here' className='rounded-sm w-[300px] h-[50px] m-2 text-lg' />
            <input type="input" placeholder='Search your desired location here' className='rounded-sm w-[300px] h-[50px] m-2 text-lg' />
            <button type="button" className='rounded-sm w-[200px] h-[50px] m-2 bg-green-600 text-white font-semibold text-lg'>Search</button>
        </span>
        <h5 className='p-3 text-lg font-normal text-white'>Are you a buyer?</h5>
        <span className='underline p-3 text-lg font-normal text-white'>Click here if you are looking to post a requirements</span>
      
      </div>
      <div className='m-5 flex flex-row'>
        <div>
        <h4 className='p-10 flex items-start font-bold text-2xl'>Ready to dive into HABOT?</h4>
        <p className='p-5 font-normal text-lg w-[500px]'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
        <button type="button" className='flex items-start bg-green-600 rounded-sm text-white font-bold p-2 w-100'>Sign up Today !</button>
        </div>
        <div className='grid grid-cols-2'>
        <span className="font-medium flex items-center justify-center border-[1px] border-solid rounded-md bg-white box-border w-[260px] h-[65px] border-orange-500 text-zinc-700 text-xl">Abu Dhabi</span>
        <span className="font-medium flex items-center justify-center border-[1px] border-solid rounded-md bg-white box-border w-[260px] h-[65px] border-orange-500 text-zinc-700 text-xl">Dubai</span>
        <span className="font-medium flex items-center justify-center border-[1px] border-solid rounded-md bg-white box-border w-[260px] h-[65px] border-orange-500 text-zinc-700 text-xl">Sharja & Ajman</span>
        <span className="font-medium flex items-center justify-center border-[1px] border-solid rounded-md bg-white box-border w-[260px] h-[65px] border-orange-500 text-zinc-700 text-xl">Fujairah</span>
        <span className="font-medium flex items-center justify-center border-[1px] border-solid rounded-md bg-white box-border w-[260px] h-[65px] border-orange-500 text-zinc-700 text-xl">Ras Al Khaimah</span>
        <span className="font-medium flex items-center justify-center border-[1px] border-solid rounded-md bg-white box-border w-[260px] h-[65px] border-orange-500 text-zinc-700 text-xl"> Umm Al Quwain</span>
        </div>
      </div>
      <div className=" bg-indigo-950 w-[1200px] h-[600px] m-30 flex items-center">
        <img src="yt-bg.png" alt="yt-bg" className='max-w-[600px] m-20' />
        <div className="flex flex-col items-start">
        <h2 className='text-orange-500 underline m-5 font-xl'>Buyer</h2>
        <ul className='grid grid-rows-3 text-white font-semibold'>
        <li className='flex items-start'>Post your requirements</li>
        <li className='flex items-start'>Sit back for multiple suppliers to contact you</li>
        <li className='flex items-start'>Choose among the suppliers based on ratings and reviews</li>
        </ul>
        </div>
        <h2 className='font-bold text-white'>Supplier</h2>
      </div>
      <div className='bg-emerald-100 my-50 h-[200px] w-full flex items-center'>
      <p className=' text-black text-4xl font-bold m-20'>Let Suppliers Find You</p>
      <button className='bg-orange-600 rounded-sm w-[120px] text-white h-10'>Get Verified</button>
      </div>
      <div className='my-20 flex items-center flex-col'>
      <h4 className='text-4xl font-bold'>How it Works?</h4>
      <p className='p-8 text-xl font-normal w-[1100px]'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      </div>
      <div className='grid grid-cols-3 mx-10 gap-0 w-[900px]'>
      <div className='bg-emerald-100 w-[300px] h-[200px] flex items-center flex-col p-2 w-15'>
        <img className='p-4' src='group-33.svg' alt='profile'/>
        <p className='text-lg font-semibold p-1'>Select Your Role and Sign Up</p>
      </div>
      <div className=' w-[300px] h-[200px] flex items-center flex-col p-2 w-15'>
        <img className='p-4' src='document-1-1.svg' alt='doc'/>
        <p className='text-lg font-semibold p-1'>Buyers Post Your Requirements</p>
      </div>
      <div className='bg-emerald-100 w-[300px] h-[200px] flex items-center flex-col p-2 w-15'>
        <img className='w-15 p-4' src='layer-x0020-1.svg' alt='select'/>
        <p className='text-lg font-semibold p-1'>Review, Select, and Contact the Best Suppliers</p>
      </div>
      <div className=' w-[300px] h-[200px] flex items-center flex-col p-2 w-15'>
        <img className='w-20 p-4' src='edit-1-1@2x.png' alt='complete'/>
        <p className='text-lg font-semibold'>Suppliers Complete your profile and get notified for opportunities</p>
      </div>
      <div className='bg-emerald-100 w-[300px] h-[200px] flex items-center flex-col p-2 w-15'>
        <img className='p-4' src='quoterequest-1.svg' alt='edit'/>
        <p className='text-lg font-semibold p-1'>Contact to Buyers and Share your Quote for the service</p>
      </div>
      <div className=' w-[300px] h-[200px] flex items-center flex-col p-2 w-15'>
        <img className='p-4' src='group1.svg' alt='connect'/>
        <p className='text-lg font-semibold p-1'>Both the Parties can Connect and Make Business Leave a Feedback</p>
      </div>
      </div>
      <footer className='bg-indigo-950 w-full h-[200px] my-20 flex flex-row text-white'>
        <div className='flex flex-end m-1'>
      <img src="div-2naf1tmz.svg" alt="logo" className='w-[300px]'/>
        <ul className='font-semibold m-2'>Company
          <li>About</li>
          <li>FAQ</li>
        </ul>
        <ul className='font-semibold m-2'>Terms
          <li>Data Privacy</li>
          <li>Terms</li>
          <li>Accesibility</li>
        </ul>
        <ul className='font-semibold m-2'>Related
          <li>Find Buyer</li>
          <li>Feedback</li>
        </ul>
        <img
              className="w-10"
              alt=""
              src="item--link--linkedin.svg"
            />
            <img
              className="w-10"
              alt=""
              src="item--link--twitter.svg"
            />
            <img
              className="w-10"
              alt=""
              src="item--link--facebook.svg"
            />
            <img
              className="w-10"
              alt=""
              src="item--link--instagram.svg"
            />
            </div>
      </footer>
    </div>
  )
}

export default Habot
