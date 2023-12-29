import { useState } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [allowedNumbers, setAllowedNumbers] = useState(false);
  const [allowedSpecialSymbols, setAllowedSpecialSymbols] = useState(false);
  const changeTheme = () => {
    const theme = localStorage.getItem("theme");
    if ( theme == "light" ) {
      document.documentElement.classList.remove( "light" )
      document.documentElement.classList.add( "dark" )
      localStorage.setItem("theme",'dark')
    } 
    else {
      document.documentElement.classList.remove( "dark" )
      document.documentElement.classList.add('light')
      localStorage.setItem("theme",'light')
    }
  }
  return (
    <>
    <div className='w-100 h-[100vh] dark:bg-black dark:text-white pt-10'>

      <button className="px-4 py-2 border-white border-2 rounded-lg float-right mb-4" onClick={changeTheme}>
        click me
      </button>
      
      <div className="main-app bg-slate-400 p-10 rounded-2xl w-[50%] mx-auto clear-both">
        <div className="flex w-full">
          <input type="text" readOnly className='flex-grow p-4 rounded-l-lg' />
          <button className="p-3 bg-blue-500 text-white rounded-r-lg px-6 text-xl">Copy</button>
        </div>
        <div className="flex gap-5 mt-4">
          <div className='flex gap-3 py-3'>
            <input type="range" className="py-2 range pr-6 accent-violet-500" id='password-length' min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="password-length" className='text-lg cursor-pointer select-none'>Length ( {length} )</label>
          </div>
          <div className='flex gap-1 py-3'>
            <input type="checkbox" className='w-5 peer' id='allowed-numbers' defaultChecked={allowedNumbers} onChange={()=>setAllowedNumbers(!allowedNumbers)} />
            <label htmlFor="allowed-numbers" className='text-lg cursor-pointer select-none peer-checked:bg-green-700'> Numbers </label>
          </div>
          <div className='flex gap-1 py-3'>
            <input type="checkbox" className='w-5 peer' id='allowed-specialSymbols' defaultChecked={allowedSpecialSymbols} onChange={()=>setAllowedSpecialSymbols(!allowedSpecialSymbols)} />
            <label htmlFor="allowed-specialSymbols" className='text-lg cursor-pointer peer-checked:bg-green-700 select-none'> Special Symbols </label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
