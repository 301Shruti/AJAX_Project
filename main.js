document.getElementById('search').addEventListener("search", function (event) {
    event.preventDefault(); // Prevent form submission

    let foodName = document.getElementById("foodName").value.trim();
    let type = document.getElementById('type').value.trim();
   

    const xhr = new XMLHttpRequest();
    const urlAll = `https://indnutrientsapi.tech/food`;
    const urlName = `https://indnutrientsapi.tech/food/name/${foodName}`;
    // const urlType = `https://indnutrientsapi.tech/food?type=${type}`;
    let url;
   
    if (foodName !== "") {
        url=urlName;
    }
    // else if (type !== "") {
    //    url=urlType;
    // }
    else {
        url=urlAll;
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
                    <div class="box">
                        <h4>Food Name: ${res[i].food_name}</h4>
                        <ul>
                            <li>Calories: ${res[i].calories}</li>
                            <li>Type of Food: ${res[i].type}</li>
                            <li>Quantity: ${res[i].quantity}</li>
                            <li>Food Nutrition: ${res[i].food_nutrition}</li>
                        </ul>
                    </div>`;
                }
                console.log(output);
                document.getElementById('property').innerHTML = output;
            } 
            // else {
            //     console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
            // }
        }
    };
    xhr.send();
});