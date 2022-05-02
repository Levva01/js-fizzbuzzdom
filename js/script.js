const container = document.querySelector(".container");

for(let i = 1; i <= 100; i++){

    const element = document.createElement("div");

    element.classList.add("box");

    if(i % 3 === 0 && i % 5 === 0){
        element.innerText = "FizzBuzz";
        element.classList.add("bg-color-red");
        container.append(element);

    } else if(i % 5 === 0){
        element.innerText = "Buzz";
        element.classList.add("bg-color-yellow")
        container.append(element);
    } else if(i % 3 === 0){
        element.innerText = "Fizz";
        element.classList.add("bg-color-green")
        container.append(element);
    } else {
        element.innerText = i;
        element.classList.add("bg-color-blue")
        container.append(element);
    }
}