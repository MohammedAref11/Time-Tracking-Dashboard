// Get the Elments from the document
// Change Status buttons elements
const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn =  document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

// Card elements
const current = document.querySelectorAll(".dashboard__card--hours");
const prev = document.querySelectorAll(".dashboard__card--previous");

fetch("./data.json").then((response) => { 
    if(!response.ok) { 
        return console.log("There is no data")
    }

    return response.json()

}).then((el) => { 

    // Display weekly data as default 
    current.forEach((item, index) => { 
            item.textContent = `${el[index].timeframes.weekly.current}hrs`;
        })
    prev.forEach((item, index) => { 
            item.textContent = `Last week - ${el[index].timeframes.weekly.previous}hrs`;
        })
    // Display daily data when daily button is clicked
   dailyBtn.addEventListener('click', () => { 
        current.forEach((item, index) => { 
            item.textContent = `${el[index].timeframes.daily.current}hrs`;
        })
        prev.forEach((item, index) => { 
            item.textContent = `Yesterday - ${el[index].timeframes.daily.previous}hrs`;
        })
   })
    // Display weekly data when weekly button is clicked
   weeklyBtn.addEventListener('click', () => { 
        current.forEach((item, index) => { 
            item.textContent = `${el[index].timeframes.weekly.current}hrs`;
        })
        prev.forEach((item, index) => { 
            item.textContent = `Last week - ${el[index].timeframes.weekly.previous}hrs`;
        })
   })
    // Display monthly data when monthly button is clicked
   monthlyBtn.addEventListener('click', () => { 
        current.forEach((item, index) => { 
            item.textContent = `${el[index].timeframes.monthly.current}hrs`;
        })
        prev.forEach((item, index) => { 
            item.textContent = `Last month - ${el[index].timeframes.monthly.previous}hrs`;
        })
   })
})










 






