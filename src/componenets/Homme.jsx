import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addtoPastes } from '../redux/paste.Slice';
import { updatetopastes } from '../redux/paste.Slice';

function Homme() {

    const[title,settitle]=useState('');
    const[value,setvalue] =useState('');

    //  by using the use param you will get the paramter of
    // your route 


    const[searchParams,setsearchParams]=useSearchParams();
    console.log(searchParams);
    
    const pasteId=searchParams.get("paste_id");

    const paste_data = useSelector((state=>state.paste.pastes));

    useEffect(()=>{ 

      const paste = paste_data.find((e) => e._id === pasteId);

      paste && settitle(paste.title);
      paste && setvalue(paste.content);
     console.log(paste);

    },[pasteId])


    // console.log(title);

    const dispatch=useDispatch();

    function send_to_store()
    {

      // create a paste 
      const paste={

        title:title,
        content:value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString()   
      }

      //  providing a paste to store through action 
 
      if(pasteId)
      {
        //  update the paste
        dispatch(updatetopastes(paste));
      }
      else{
        // crate the paste
        dispatch(addtoPastes(paste));
      }

      // afeter creation of paste or upadtion clear the state
      // cleaning task;
      settitle('');
      setvalue('');
      setsearchParams({});

    }

    console.log({value});
  return (
   <div>
     <div className='flex gap-[2rem] mt-[2rem]'>
      <input type="text" placeholder='Enter your Title' value={title}
      onChange={(e)=>{settitle(e.target.value)}} className='border p-[1rem] bg-black rounded-3xl mt-2'/>


       <button className='hover: shadow-amber-50' onClick={send_to_store}>
        {
       pasteId ? "update paste" : "Create My Paste"
        }
       </button>
      
    </div>

    <div>
      <textarea name="Enter your content" placeholder='Enter your thought' value={value}
      rows={10} cols={30} onChange={(e)=>{
        setvalue(e.target.value)
      }} className='border mt-[3rem] min-w-[500px] p-[2rem] rounded-2xl '></textarea>
    </div> 
   </div>
  );
};

export default Homme 
