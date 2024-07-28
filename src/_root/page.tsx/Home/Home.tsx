import Feed from "./Feed";
import RightFeed from "./RightFeed";

const Home = () => {
  return (
    <div className="flex flex-1">
      <Feed />
      <RightFeed />
    </div>
  );
};

export default Home;
