import "./styles.css";
import Button from "../Button";
import DiaryItem from "../DiaryItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const copyList = JSON.parse(JSON.stringify(data));
    const compare = (a, b) => (
      (sortType === "latest") ? Number(new Date(b.date)) - Number(new Date(a.date)) : Number(new Date(a.date)) - Number(new Date(b.date))
    );

    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((option, idx) => (
              <option key={idx} value={option.value}>{option.name}</option>
            ))}
          </select>
        </div>

        <div className="right_col">
          <Button
            type="positive"
            text="새 일기 쓰기"
            onClick={onClickNew}
          />
        </div>
      </div>

      <div className="list_wrapper">
        {sortedData.map((data) => (
          <DiaryItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
