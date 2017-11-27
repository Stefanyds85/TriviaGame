$(document).ready(function() {

// ------------------- START GAME---------------------------

// Click "start" to start the game
    $(".start").on("click", function(){

    document.getElementById("gameDiv").style.visibility = "visible";

    });

// -----------------SET TIMER---------------------------------

    var timeRunning = false;
    var timer;
    var intervalId;

   
//------------------------------- TRIVIA QUESTIONS----------------------

    var question;
    var ansA;
    var ansB;
    var ansC;
    var ansD;
    var ansSelection;
    var position = 0;

    var qAOptions = [
    
        ["What is the symbol of the house of Stark?", "A Direwolf", "A Lion", "A Dragon", "A Fish", "A"],
            
        ["In The game of Thrones, where is the 'Iron Throne' located?", "Braavos", "Volantis", "King’s Landing", "Meereen", "C"],
            
        ["In the Game of Thrones, Jamie Lannister is known as the Kingslayer. Which King did he kill?", "Joffrey I Baratheon", "Aegon IV Targaryen", " Robert Baratheon", "Aerys II", "D"],
            
        ["In the game of Thrones, it is revealed that Robert is not the father of Joffrey. Who is?", "Jon Snow", "Eddard Stark", "Petyr Baelish", "Jamie Lannister", "D"],

        ["The house Targaryen is virtually destroyed before the start of The Game of Thrones. Where do the last members of the family take refuge", "Volantis", "The Free Cities", "Braavos", "King's Landing", "B"],

        ["In the novel, The Game of Thrones, Lady Catelyn married into the Stark family. Which house was she born into?", "House Targaryen", "House Lannister", "House Tyrell", "House Tully", "D"],

        ["How many 'Great Families' are in The Game of Thrones?", "4", "7", "12", "9", "D"],
                
        ["How many children do Eddard and Catelyn Stark have in The Game of Thrones?", "6", "5", "8", "3", "B"],

        ["Who wrote The Game of Thrones?", "George R.R. Martin", "J.K. Rowling", "E.L. James", "Suze Orman", "A"],
            
        ["In The Game of Thrones, how many dragons does Daenerys have?", "2", "5", "3", "1", "C"]

    ];
        
    // Run Game Questions
    function renderQuestion(){

        document.getElementById("questionView").innerHTML = "question" + (position+1)+" of "+ qAOptions.length;

        question = qAOptions[position][0];
        ansA = qAOptions[position][A];
        ansB = qAOptions[position][B];
        ansC = qAOptions[position][C];
        ansD = qAOptions[position][D];

        var html =
        "<p>" + question + "</p>"
        "<p value = A>" + ansA + "</p>" +
        "<p value = B>" + ansB + "</p>" +
        "<p value = C>" + ansC + "</p>" +
        "<p value = D>" + ansD + "</p>";

        document.getElementById("questionView").innerHTML = html;

    };    
        
         function checkAswers(){
             for (var i = 0; i < qAOptions.length; i++);
         
             

         };
         window.addEventListener ("load", renderQuestion);
         

    }); 