import { useState } from 'react';
import './index.css'
function App(){
  const [value, setValue] = useState('')
  return(
    <div className='w-[100%] h-[100vh] flex justify-center items-center bg-blue-600'>
      <div className='p-[20px] rounded-lg bg-white'>
        <form action="">
          <div className='flex mt-[5px] mr-[0] mb-[15px] ml-[0] justify-end'>
            <input className=' flex-1 text-right outline-none border-none w-[60px] h-[60px] size-[25px] bg-gray-500 rounded-lg text-white font-bold' type="text" value={value}/>
          </div>
          <div>
            <input className='boder-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white' type="button" value="AC" onClick={e => setValue('')} />
            <input className='boder-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white' type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            <input className='boder-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white' type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input className='boder-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white' type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input className="border-none w-[60px] h-[60px] size-[16px] bg-blue-400 m-[2px] rounded-lg font-bold hover:bg-purple-500 text-white" type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input className="w-[60px] h-[60px] size-[16px] border-none bg-blue-400 m-[2px] rounded-lg hover:bg-purple-500 font-bold hover:bg-purple-500 text-white" type="button" value="0" onClick={e => setValue(value + e.target.value)}/> 
            <input className="w-[60px] h-[60px] size-[16px] border-none bg-blue-400 m-[2px] rounded-lg hover:bg-purple-500 font-bold hover:bg-purple-500 text-white" type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input className="w-[123px] h-[60px] size-[16px] border-none bg-blue-400 m-[2px] rounded-lg hover:bg-purple-500 font-bold hover:bg-purple-500 text-white" type="button" value="=" onClick={e => setValue(eval(value))}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;