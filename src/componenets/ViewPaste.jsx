import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
function ViewPaste() {


  //  ypu can get the id directly also 
  const paste_data = useSelector((state)=>state.paste.pastes)
  const[searchParams,setsearchParams]=useSearchParams();
  console.log(searchParams);
  const paste_id=searchParams.get("paste_id");
  const paste = paste_data.find((e)=> e._id === paste_id)

  return (
   <div>
   
    <input type="text" value={paste.title} className=' w-[300px] h-[4rem] p-[2rem]  mt-[3rem] rounded-4xl bg-black
                border '/>
   <div>
    <textarea value={paste.content} disabled className='border bg-black mt-[4rem] rounded-2xl px-2 py-4 w-[500px] h-[450px]'></textarea>
   </div>
   </div>
  )
}

export default ViewPaste
