//Get the DOM elements

const gamecontainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result"),
    cpuResult = document.querySelector(".cpu_result"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

//Loop for active to images
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        result.textContent = "wait...";

        //Loop for removing active to image
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        let imageSrc = e.target.querySelector("img").src;
        // Set the user image to the clicked option image
        userResult.src = imageSrc;
        console.log(userResult.src);

        //Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3)
         //create an array of cpu image options

         let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
         cpuResult.src = cpuImages[randomNumber];
    



    });
});


