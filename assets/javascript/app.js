$(document).ready(function() {

// Click "start" to start the game
    $(".start").onclick = function(){

    document.getElementsById("gameDiv").style.visibility = "visible";

};

var qAOptions = {
    
            question1: {
                question: "What is the symbol of the house of Stark?",
                answers: ["A Direwolf", "ans", "ans", "ans"],
            },
    
            question2: {
                question: "In The game of Thrones, where is the 'Iron Throne' located?",
                answers: ["ans", "ans", "King’s Landing", "ans"],
            },
    
            question3: {
                question: "In the Game of Thrones, Jamie Lannister is known as the Kingslayer. Which King did he kill?",
                answers: ["ans", "ans", "ans", "Aerys II"]
            },
        
            question4: {
                question: "In the game of Thrones, it is revealed that Robert is not the father of Joffrey. Who is?",
                answers: ["ans", "ans", "ans", "Jamie Lannister"]
            },

            question5: {
                question: "The house Targaryen is virtually destroyed before the start of The Game of Thrones. Where    do the last members of the family take refuge",
                answers: ["ans", "The Free Cities", "ans", "ans"]
            },

            question6: {
                question: "In the novel, The Game of Thrones, Lady Catelyn married into the Stark family. Which house was she born into?",
                answers: ["ans", "ans", "ans", "House Tully"]
            },

            question7: {
                question: "How many 'Great Families' are in The Game of Thrones?",
                answers: ["4", "7", "12", "9"]
            },

            question8: {
                question: "How many children do Eddard and Catelyn Stark have in The Game of Thrones?",
                answers: ["6", "3", "8", "5"]
            },

            question9: {
                question: "Who wrote The Game of Thrones?",
                answers: ["George R.R. Martin", "ans", "ans", "ans"]
            },

            question10: {
                question: "In The Game of Thrones, how many dragons does Daenerys have?"                ,
                answers: ["ans", "ans", "3", "ans"]
            },
    
        };



    
        // document.getElementsByClassName("start").onclick = function(){
            // myFunction()
        // };

        // function myFunction() {
            // document.getElementsByClassName("start").innerHTML = display("#gameDiv") 
        // };

    // Rund Game Questions
        // document.getElementById("#gameDiv");

        //  function qAOptions(){
        //      for (var i = 0; i < qAOptions.length; i++);
         
        //      console.log (qAOptions.question1);
        //      console.log (qAOptions.question1.answers[0]);

        //  };


    });