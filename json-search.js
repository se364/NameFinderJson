
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


function myFunction(name){

    //flag
    let valid = false;

    name  = document.getElementById('fname').value;


    for(let i = 0; i < myArray.length; i++  ){
        let nameof = myArray[i].Name;
        //let find = nameof.toLowerCase();

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

    //no match found
    if(valid === false)
    {
        document.getElementById("print").innerHTML = "<p>No matches found</p>";
    }



}


