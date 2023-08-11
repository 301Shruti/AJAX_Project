document.getElementById('search').addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('property').style.display = "block";
    document.getElementById("property").scrollIntoView({ behavior: "smooth" });

    let foodName = document.getElementById("foodName").value.trim();
    // let type = document.getElementById('type').value.trim();
    const xhr = new XMLHttpRequest();
    const urlAll = `https://indnutrientsapi.tech/food`;
    const urlName = `https://indnutrientsapi.tech/food/name/${foodName}`;
    // const urlType = `https://indnutrientsapi.tech/food?type=${type}`;
    let url;

    if (foodName !== "") {
        url = urlName;
    }

    else {
        url = urlAll;
    }
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const jsonRes = xhr.responseText;
                const res = JSON.parse(jsonRes);
                console.log(res);

                let output = "";
                for (let i = 0; i < res.length; i++) {
                    output += `
                    <div class="box" >
                        <h3>Nutrition Information for ${res[i].food_name}</h3>
                        <p>Calories: ${calories} kcal</p>
                            <p>Protein: ${protein} g</p>
                            <p>Carbohydrates: ${carbs} g</p>
                            <p>Fat: ${fat} g</p>
                    </div>`;
                }
                console.log(output);
                document.getElementById('property').innerHTML = output;
            }

        }
    };
    xhr.send();
});
 // <ul>
                        //     <li>Calories: ${res[i].calories}</li>
                        //     <li>Type of Food: ${res[i].type}</li>
                        //     <li>Quantity: ${res[i].quantity}</li>
                        //     <li>Food Nutrition: ${res[i].food_nutrition}</li>
                        // </ul>