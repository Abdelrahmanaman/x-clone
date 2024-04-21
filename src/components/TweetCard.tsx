import { HeartIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

import Image from "next/image";
import { FaRetweet } from "react-icons/fa6";

const TweetCard = () => {
  return (
    <article className="flex gap-2 overflow-x-auto">
      <div className=" ">
        <div className="size-10 relative border-black">
          <Image className="rounded-full" src="/default-profile.svg" alt="Profile Image" fill />
        </div>
      </div>
      <div className=" w-full flex flex-col gap-4">
        <div className="">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <span className="inline-block">Abdelrahman Aman</span>
            <span className="inline-block text-xs text-gray-400">@abdelrahmanaman</span>
          </div>
          <p>Hello this is my first TweetCard</p>
          <div className=" relative h-60 w-full md:h-96">
            <Image className="block rounded-md bg-cover" src="/post.jpg" alt="Profile Image" fill />
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex gap-2 items-center">
            <ChatBubbleOvalLeftIcon className="text-gray-400 cursor-pointer size-5 hover:text-primary" />
            10
          </span>
          <span className="flex gap-2 items-center">
            <HeartIcon className="text-gray-400 cursor-pointer size-5 hover:text-red-500" />
            {/* <HeartIconSolid className="size-5 text-red-600"/> */}
            10
          </span>
          <span className="flex gap-2 items-center">
            <FaRetweet className="text-gray-400 cursor-pointer size-5 hover:text-primary" />
            10
          </span>
        </div>
      </div>
    </article>
  );
};

export default TweetCard;
