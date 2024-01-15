import search from '../assets/search.svg'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (

    <div>
    <div className='flex justify-between items-center px-32 py-5 '>
      <img src={logo} alt="" />
     <div className='flex justify-between items-center gap-10'>
       <h3 className='h-[25px] bg-[#d8d7d7f1] w-[1px]'></h3>
        <h3>Marketplace</h3>
        <h3>Resource</h3>
        <h3>About</h3>
     </div>
   
   
   
   <div className='flex justify-between items-center gap-4'>
   <div className="relative w-80">
  <label htmlFor="Search" className="sr-only"> Search </label>

  <input
    type="text"
    id="Search"
    placeholder="Search"
    className="w-full rounded-3xl border px-6 border-gray-200 py-3 pe-10 shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns={search}
        fill="none"
        viewBox="0 0 28 28"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5  "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>
<button className='bg-[#3D00B7] text-white px-8 py-[10px] rounded-3xl'>Upload</button>
<button className='text-[#3D00B7] bg-white px-7 py-[10px] border border-[#3D00B7] rounded-3xl'>Connect Wallet</button>
   </div>

    </div>
    <div className='h-[1px] w-screen bg-[#EFEFEF]'></div>
    </div>
  )
}

export default Navbar
