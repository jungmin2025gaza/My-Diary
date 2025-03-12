import "./styles.css";
import { emotionList } from "../../utils/util";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((item) => item.id === emotionId);
  console.log("emotionItem", emotionItem);
  return (
    <div className="Viewer">
      <section>
        <h4>오늘의 감정</h4>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotionId}`
          ].join(" ")}
        >
          <img src={emotionItem.img} alt={emotionItem.name} />
          <div className="emotion_descript">{emotionItem.name}</div>
        </div>
      </section >

      <section>
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div >);
}

export default Viewer;
