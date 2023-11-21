let ourTeam = 
[
{
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.png"
},

{
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.png"
},

{
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    picture: "walter-goldon-office-manager.png"
},

{
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.png"
},

{
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.png"
},

{
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.png"
}
]

console.log(ourTeam);

for(let i = 0; i < ourTeam.length; i++){
    console.log("name:", ourTeam[i].name);
    console.log("surname:", ourTeam[i].surname);
    console.log("role:", ourTeam[i].role);
    console.log("picture:", ourTeam[i].picture);
    console.log("");
}