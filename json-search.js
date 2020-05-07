

//the function goes thru when the button is clicked
document.getElementById('myBtn').onclick = function(){

    let getName = document.getElementById('fname').value;
    if(getName !== "")
    {
        myFunction(getName);
    }
    else
    {
        document.getElementById("print").innerHTML = "<p>Please Enter Name</p>";
    }

};


// json array is created
let myArray =[
    {
        Name:"Jane Doe",
        Sex : "f",
        Born : 1876,
        Died : 1956,
        Father : "Petreus de Milliano",
        Mother : "Sophia van Damme"
    },
    {
        Name : "Jane Ramirez",
        Sex : "f",
        Born : 1876,
        Died : "..",
        Father : "Themistocles Merovech",
        Mother : "Amara Floros"
    },
    {
        Name : "Cutter Steel",
        Sex : "M",
        Born : 1996,
        Died : 2100,
        Father : "Steel",
        Mother : "Cutter"
    },
    {
        Name : "Maximus Deus",
        Sex : "M",
        Born : 1263,
        Died : 1374,
        Father : "Theodues",
        Mother : "Masaret"
    },
    {
        Name : "Adar",
        Sex : "M",
        Born : 1929,
        Died : "..",
        Father : "Novel",
        Mother : "Mamona"
    }
];



// this function finds the name from the json array
function myFunction(name){

    //flag
    let valid = false;

    name  = document.getElementById('fname').value;

    // loop to go through the array and compare with name input
    for(let i = 0; i < myArray.length; i++  ){

        // finds the name from the array
        let nameof = myArray[i].Name;

        // Compares with the name from the json array with the input array
        if(nameof.toLowerCase().includes(name.toLowerCase()))
        {
            document.getElementById("print").innerHTML +=
                "<br>Name: " + myArray[i].Name +
                "<br>Sex: " + myArray[i].Sex +
                "<br>Born: " + myArray[i].Born +
                "<br>Died: " + myArray[i].Died +
                "<br>Father: " + myArray[i].Father +
                "<br>Mother: " + myArray[i].Mother +
                "<br>";

         valid = true;
        }

    }

    // if the name is not in the array
    if(valid === false)
    {
        document.getElementById("print").innerHTML = "<p>No matches found</p>";
    }



}


