# Time Tracking DashBoard

In this project i learned alot from fetching data and displaying it to the screen and show it to the user.

One of the challenges i faced was how i will display the data without making my code to long i thought why don't i use `querySelectorAll` which will put all the items as an array and `forEach` method which worked out well for me and made my code way shorter and maintainable.

Here is a little example how i did it.

**Live Site** [Click Here](https://mohammedaref11.github.io/Time-Tracking-Dashboard/)

```js 
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
})
```

## Images of the website on Different Sreen sizes


## Desktop

![Page Desktop](./result%20images/Page_desktop.png)

## Tablet

![page Tablet](./result%20images/Page_tablet.png)

## Mobile

![page Mobile](./result%20images/Page_phone.png)

