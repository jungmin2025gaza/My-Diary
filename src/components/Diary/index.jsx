import "./styles.css";
import Header from "../Header";
import Button from "../Button";
import Viewer from "../Viewer";
import useDiary from "../../hooks/useDiary";
import { useParams, useNavigate } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>데이터를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    return (
      <div>
        <Header
          title={date.concat(" 기록")}
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer
          content={content}
          emotionId={emotionId}
        />
      </div>
    );
  };
};

export default Diary;
