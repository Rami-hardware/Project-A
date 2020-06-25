//getting the tag 
var ctx =  document.getElementById("per").getContext('2d');
var ctx2 = document.getElementById("day").getContext('2d');
var ctx3 = document.getElementById("TaskC").getContext('2d');
//performance chart
var chart = new Chart(ctx,{
    type: 'line',
    data:{
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
            label:"performance",
            backgroundColor: "transparent",
            borderColor: "#6FFFE9",
            data: [20,15,10,33,50,43,38]
        }]
    },
    options:{
     
    }
})
//daily earing chart :
var chart2 = new Chart(ctx2,{
    type: 'bar',
    data:{
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
            label:"daily earing",
            backgroundColor:[
                '#8080ff',
                '#d279d2',
                '#b31aff',
                '#ffff33',
                '#00ff00',
                '#3366ff',
                '#00ffcc'
            ],
            borderColor:[
                '#8080ff',
                '#d279d2',
                '#b31aff',
                '#ffff33',
                '#00ff00',
                '#3366ff',
                '#00ffcc'
            ],
            data: [20,15,10,33,50,43,38]
        }]
    },
    options:{
     
    }
})
//task compelete chart

var chart3 = new Chart(ctx3,{
    type: 'line',
    data:{
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
            label:"tasks complete",
            backgroundColor: "transparent",
            borderColor: "#6FFFE9",
            data: [20,15,10,33,50,43,38]
        }]
    },
    options:{
     
    }
})