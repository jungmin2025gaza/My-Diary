import "./styles.css";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return (
    <div>{id} 일기</div>
  );
};

export default Diary;
