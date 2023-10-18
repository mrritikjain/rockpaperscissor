//Get the DOM elements

const gamecontainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

//Loop for active to images
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "wait...";

        //Loop for removing active to image
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        let imageSrc = e.target.querySelector("img").src;
        // Set the user image to the clicked option image
        userResult.src = imageSrc;

        //Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3)
         //create an array of cpu image options

         let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
         cpuResult.src = cpuImages[randomNumber];

         //assign a letter value to cpu options

         let cpuValue = ["R", "P", "S"][randomNumber];
         //assign a letter value to user options
        
         let userValue = ["R", "P", "S"][index];

         //create object for possible outcomes

         let outcomes = {
            RR: "Draw",
            RP: "CPU",
            RS: "User",
            PR: "User",
            PS: "CPU",
            PP: "Draw",
            SP: "User",
            SR: "CPU",
            SS: "Draw"
         }
         let outcomeValue = outcomes[userValue+cpuValue];
         result.textContent = userValue === cpuValue ? "Match Draw" : outcomeValue + "  Win";

    });
});


