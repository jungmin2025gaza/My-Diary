import Button from "../Button";
import Header from "../Header";
import Editor from "../Editor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text="< 뒤로 가기" />}
        onClick={goBack}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
