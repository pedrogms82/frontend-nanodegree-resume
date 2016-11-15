/*
This is empty on purpose! Your code to build the resume will go here.
 */

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var bio = {
    "name" : "PeTeR PaRKeR",
    "role" : "FRoNTeND dElEvOpEr",
    "contactInfo" : {
        mobile : 132456789,
        email : "email@email.com",
        twitter : "www.twitter.com",
        github : "http://github.com",
        blog : "http://todoseries.com",
        location : "In the Earth"
    },
    "pictureUrl" : "images/me.jpg",
    "wellcomeMessage" : "Bienvenido Crack",
    "skills" : ["series", "birra", "games"]
};


var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

var formattedWM = HTMLwelcomeMsg.replace("%data%",bio.wellcomeMessage);
$("#header").append(formattedWM);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureUrl);
$("#header").append(formattedBioPic);

var formattedMobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contactInfo.github);
$("#topContacts").append(formattedGithub);

var formattedBlog = HTMLblog.replace("%data%",bio.contactInfo.blog);
$("#topContacts").append(formattedBlog);

$("#header").append(HTMLskillsStart);

var formattedSkill;
for (i = 0 ; i < bio.skills.length; i++){
     formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#header").append(formattedSkill);
}
   




 