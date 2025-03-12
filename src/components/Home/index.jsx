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
        if (new Date(singleData.date).getFullYear() == pivotDate.getFullYear() &&
          new Date(singleData.date).getMonth() === pivotDate.getMonth()) {
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
