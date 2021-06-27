// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
// .then(response => response.json())
// .then(data => { 
//     console.log(data);
//     console.log(data.meals[2].strMeal);});

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
.then(response => response.json())
.then(data => displayMeals(data));

const displayMeals = meals =>{
    //console.log(meals);
    const mealsDiv = document.getElementById("meals");

    for (let i = 0; i < meals.meals.length; i++) {
        const meal = meals.meals[i];
        //console.log(meal.strMeal)

        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";

        const mealInfo = `
            <img width="150" src="${meal.strMealThumb}">
            <h3 class="meal-name">${meal.strMeal}</h3>
            <button onclick="displayMealDetail('${meal.strMeal}')">Details</button>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    }
}

const displayMealDetail = name =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url).then(response => response.json().then(data => mealDetailInfo(data.meals[0])));
}

const mealDetailInfo = meal => {
    console.log(meal);
    console.log(meal.strMeal);
    const mealDiv = document.getElementById("meal-detail");
    const mealDetailsInfo = `
            <img width="150" src="${meal.strMealThumb}">
            <h3 class="meal-name">${meal.strMeal}</h3>
            <button onclick="displayMealDetail('${meal.strMeal}')">Details</button>
        `
    mealDiv.innerHTML = mealDetailsInfo;
    
}

// document.getElementById("find-meal").addEventListener('click', function(){
//     const inputMealName = document.getElementById("input-meal-name");
//     displayMealDetail(inputMealName.value);
// })