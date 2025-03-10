import "./styles.css";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>Home</div>
  );
};

export default Home;
