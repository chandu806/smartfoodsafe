function FootBall(range1,range2){
    var team1=5;
    var team2=5;
    var goal1=0;
    var goal2=0;
    var money1=0;
    var money2=0;
        
    for(var i=1;i<=team1;i++){
      var num=Math.floor(Math.random() * range2) + range1;
        if(num>=range1 && num<=range2){
           money1+=100;
           goal1++;
        }
    }
    for(var i=1;i<=team2;i++){
      var num=Math.floor(Math.random() * range2) + range1;
        if(num>=range1 && num<=range2){
           money2+=100;
           goal2++;
        }
    }
    if(goal1>goal2){
        console.log("First Question - Number of goals Team1 Winner -"+goal1)
    }else{
        console.log("FIrst Question - Number of goals Team2 Winner-"+goal2)
    }
    if(goal1>goal2){
      console.log("Second Question - Team1 Winner "+goal1)
    }else if(goal1==goal2){
      console.log("Second Question - Draw")
    }else{
      console.log("Second Question - Team2 Winner "+goal2)
    }

    
     if(money1>money2){
        console.log("Third Question - Team1 has highest money "+money1)
     }else if(money1==money2){
       console.log("Third Question - Two teams are equal money")
     }else{
      console.log("Third Question - Team2 has highest money "+money2)
     }
    }
     var range1=10;
     var range2=15;
FootBall(range1,range2)

// 2nd question
// var min=0
// var max=0;
// for(var i=0;i<team1;i++){
//     var num=Math.floor(Math.random()*10)+15;
//     console.log(num)
//     if(num>min && num<max){
//         goal++
//     }
// }
    



    
    
    
    
    
    