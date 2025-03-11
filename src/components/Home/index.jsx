import "./styles.css";
import Button from "../Button";
import Header from "../Header";
import DiaryList from "../DiaryList";
import { DiaryStateContext } from "../App";
import { useState, useContext, useEffect } from "react";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [filteredData, setFilteredData] = useState([]);
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  useEffect(() => {
    setFilteredData(
      data.filter((singleData) => {
        if (singleData.date.split("-")[0] == pivotDate.getFullYear() &&
          singleData.date.split("-")[1] == (pivotDate.getMonth() + 1).toString().padStart(2, "0")) {
          return singleData;
        }
      })
    );
  }, [pivotDate, data]);

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList
        data={filteredData}
      />
    </div>
  );
}

export default Home;
