import { DiaryStateContext } from "../components/App";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useDiary = (id, action = "view") => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();
  const alertTriggered = useRef(false);

  useEffect(() => {
    const matchedDiary = data.find((singleData) => String(singleData.id) === String(id));
    if (matchedDiary) {
      setDiary(matchedDiary);
    } else {
      if (!alertTriggered.current && action === "view") {
        alertTriggered.current = true;
        alert("일기가 존재하지 않아요");
        navigate("/", { replace: true });
      }
    }
  }, [id, data]);

  return diary;
};

export default useDiary;
