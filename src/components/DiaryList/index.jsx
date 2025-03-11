import "./styles.css";
import Button from "../Button";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select>
            {sortOptionList.map((option, idx) => (
              <option key={idx} value={option.value}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button type="positive" text="새 일기 쓰기" />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
