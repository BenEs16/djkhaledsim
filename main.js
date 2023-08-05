function choosePhrase() {
    let number = Math.floor(Math.random()*7);
    switch (number){
        case 0:
            return "Call me asparagus!";
            break;
        case 1:
            return "Let's go golfing!";
            break;
        case 2:
            return "Gatorade!";
            break;
        case 3:
            return "Tell them to bring out the whole ocean!";
            break;
        case 4: 
            return "Let's go swimming!";
            break;
        case 5:
            return "God did!";
            break;
        case 6:
            return "Life is roblox";
            break;
    }
}

function whoSaysIt() {
    let num = Math.floor(Math.random()*3)
    switch (num){
        case 0:
            return "LeBron James";
            break;
        case 1:
            return "DJ Khaled";
            break;
        case 2:
            return "Hanni from NewJeans";
            break;
    }
}