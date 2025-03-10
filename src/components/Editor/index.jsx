import "./styles.css";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: new Date().toISOString().split("T")[0],
    emotionId: 3,
    content: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    onSubmit(state);
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" name="date" value={state.date} onChange={handleChange} />
        </div>
      </div>

      <div className="editor_section">
        <h4>오늘의 감정</h4>
      </div>

      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            name="content"
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="editor_section bottom_section">
        <Button text="취소하기" onClick={handleGoBack} />
        <Button text="작성 완료" type="positive" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
