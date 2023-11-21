let ourTeam =
    [
        {
            name: "Wayne Barnett",
            
            role: "Founder & CEO",
            picture: "./img/wayne-barnett-founder-ceo.jpg"
        },

        {
            name: "Angela Caroll",
            
            role: "Chief Editor",
            picture: "./img/angela-caroll-chief-editor.jpg"
        },

        {
            name: "Walter Gordon",
            
            role: "Office Manager",
            picture: "./img/walter-gordon-office-manager.jpg"
        },

        {
            name: "Angela Lopez",
            
            role: "Social Media Manager",
            picture: "./img/angela-lopez-social-media-manager.jpg"
        },

        {
            name: "Scott Estrada",
            
            role: "Developer",
            picture: "./img/scott-estrada-developer.jpg"
        },

        {
            name: "Barbara Ramos",
            
            role: "Graphic Designer",
            picture: "./img/barbara-ramos-graphic-designer.jpg"
        }
    ];

console.log(ourTeam);



for (let i = 0; i < ourTeam.length; i++) {
    console.log("name:", ourTeam[i].name);
    
    console.log("role:", ourTeam[i].role);
    console.log("picture:", ourTeam[i].picture);
    console.log("");
}

let card = document.getElementById("card")
for (let i = 0; i < ourTeam.length; i++) {
    
    
    
    card.innerHTML += `
    <div class="col-4  "> <div class="card" ">
<img src="${ourTeam[i].picture}" class="card-img-top" alt="foto">
<div class="card-body">
  <h5 class="card-title">${ourTeam[i].name}</h5>
  <p class="card-text">
  ${ourTeam[i].role}</p>
  
</div>
</div>
</div>`


    
}


/*for (let i = 0; i < ourTeam.length; i++) {
   // document.getElementById("name").innerHTML = ourTeam[i].name;
    //document.getElementById("surname").innerHTML = ourTeam[i].surname;
    //document.getElementById("role").innerHTML = ourTeam[i].role;
    //document.getElementById("picture").innerHTML = ourTeam[i].picture;
    //document.getElementById("ourteam").innerHTML = ourTeam;

}*/
