import "./styles.css";
import Button from "../Button";
import Header from "../Header";
import Editor from "../Editor";

import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            text={"긍정버튼 "}
            type="positive"
            onClick={() => {
              alert("positive")
            }}
          />
        }
        rightChild={
          <Button
            text={"부정버튼 "}
            type="negative"
            onClick={() => {
              alert("negative")
            }}
          />
        }
      />
      <Editor
        onSubmit={() => {
          alert("editor submit");
        }}
      />
    </div>
  );
};

export default Home;
