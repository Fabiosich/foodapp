import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("");
  return (
    <div className="App">
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <FoodList setfoodId={setfoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
