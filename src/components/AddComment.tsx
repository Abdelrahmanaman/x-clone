import React from 'react'
import Image from 'next/image'
const AddComment = () => {
  
  return (
    <form className="flex flex-col gap-2 pl-2 md:ml-10 border-y-2 border-zinc-900 py-4">
      <div className="flex gap-2 items-center">
        <div className="relative size-10">
          <Image className="rounded-full object-cover" alt="User Profile Image" fill src={"/default-profile.svg"} />
        </div>
        <div className="w-full h-20 md:h-32">
          <label className="sr-only" htmlFor="comment">
            Post your reply
          </label>
          <textarea maxLength={200} className="size-full resize-none outline-none bg-black pt-7 px-4 text-white focus:outline-primary rounded-md  placeholder:text-xl placeholder:font-medium" name="comment" id="comment" placeholder="Post your reply" />
        </div>
      </div>
      <div className=" flex justify-end">
        <button className="bg-primary rounded-full py-2 px-5 hover:bg-secondary">Reply</button>
      </div>
    </form>
  );
}

export default AddComment;