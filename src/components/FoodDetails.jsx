import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "0c4da4697e53453aae58bb5c02748d85";
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong> {food.readyInMinutes} minutes ⏲</strong>
          </span>
          <p>
            <span>Serves {food.servings} people</span>
          </p>
          <p>
            <span>{food.vegan ? "Vegan" : "Non-Vegan"}</span>
          </p>

          <p>
            <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
          </p>
          <p>
            <span>{food.pricePerServing / 100} Per serving</span>
          </p>
          <div>
            <ol>
              <h1>Food Instruction</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
