const divOne = document.getElementById("div1")
var divTwo = document.getElementById("div2")
const colorList = document.getElementsByTagName("li")
const body = document.getElementsByTagName('body')[0]
var div2H1 = divTwo.children[0]
var div1h1 = divOne.children[0]

var count = 0;


body.addEventListener("click", (e) => {
    e.preventDefault()
});

var colorListAr = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Black', 'Brown', 'Grey', 'Orange', 'Purple'];

function colorChange(name) {
    // for (let i = 0; i < colorList.length; i++) {
    //     var element = colorList[i].innerText;
    //      colorsLiArr.push(element) 
    // }
    choose(name);
    clickCount();

}
function choose(name) {
    let randomColorVar = Math.floor(Math.random() * colorListAr.length)
    divOne.style.backgroundColor = colorListAr[randomColorVar];
    divTwo.style.backgroundColor = name;

    console.log(name)
    console.log(colorListAr.at(randomColorVar))

    if (colorListAr.at(randomColorVar) === name) {
        div1h1.innerText = 'Your Guess correct'
        div2H1.innerText = ``

        alert('Congrats!!! You Won the Game!')
        endGame()
        // console.log("Your Guess correct")
    } else {
        div1h1.innerText = 'sorry try again'
        // divTwo.innerHTML = 'sorry try again'
    }
}

function clickCount() {
    count = count + 1;
    console.log(count)
    if (count <= 10) {
        maxScore = 12;
        for (let i = 1; i < maxScore; i++) {
            var element = i - count;

        }
        div2H1.innerText = `Your Score is : ${element}`
        // console.log(element)

    } else {
        alert('Better Luck next time.')
        endGame()

    }

}
function endGame() {
    setTimeout(() => {
        window.open('guessColorStart.html',"_self")
    }, 2000);

}
function startGame() {
    window.open('guessColor.html','_self')
}










