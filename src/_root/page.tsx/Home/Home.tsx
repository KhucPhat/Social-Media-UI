import { RootState } from "@/store/reducer/reducer";
import { useSelector } from "react-redux";

const Home = () => {
  const meInfo = useSelector((state: RootState) => state.userReducer.info);
  console.log(meInfo);
  return <div>Home</div>;
};

export default Home;
