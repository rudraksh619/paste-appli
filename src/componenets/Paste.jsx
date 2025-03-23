import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefrompastes } from "../redux/paste.Slice";
import toast from "react-hot-toast";
import ViewPaste from "./ViewPaste";
import { NavLink } from "react-router-dom";

function Pastes() {
  const paste = useSelector((state) => state.paste.pastes);
  console.log(paste);
  const [searchTerm, setsearchTerm] = useState("");

  //  filter the content

  const filter_data = paste.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  //   console.log("gkdf");
  // console.log(filter_data.length)

  const dispatch = useDispatch();

  function handledelete(paste_id) {
    console.log("dshfb");
    dispatch(removefrompastes(paste_id));
  }

  function handleview()
  {
    
    // <ViewPaste/>
  }

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px] border mt-[4rem]"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-[2rem] mt-[2rem]">
        {filter_data.length > 0 &&
          filter_data.map((paste) => {
            return (
              <div key={paste._id} className="border ">
                <div>{paste.title}</div>
                <div>{paste.content}</div>

                {/* buttlon content  */}
                <div className="flex flex-row justify-evenly">
                  <button>
                   {/* <a href={`/?pasteID=${paste?._id}`}>Edit</a> */}
                   <NavLink to={`/?paste_id=${paste?._id}`}>Edit</NavLink>
                  </button>
                  <button>
                    <NavLink to={`./pastes/?paste_id=${paste._id}`}>View</NavLink>
                  </button>
                  <button onClick={() => handledelete(paste._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("copied succesfully");
                    }}
                  >
                    Copy
                  </button>
                  <button>Share</button>
                </div>

                {/* date */}

                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Pastes;
