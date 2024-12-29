import { useEffect, useState } from "react";

const API_KEY = "0c4da4697e53453aae58bb5c02748d85";
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
export default function Search({ setfoodData }) {
  const [query, setQuery] = useState("pizza");

  //Sintax of useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setfoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
