import AddComment from "@/components/AddComment";
import TweetCard from "@/components/TweetCard";

const TweetDetail = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <TweetCard />
      <AddComment />
    </div>
  );
};

export default TweetDetail;
