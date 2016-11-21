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


var trabajos = [{
      "employer" : "MPDL",
      "name" : "Informatico",
      "description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis"
    },{
      "employer" : "Arysoft",
      "name" : "CEO",
      "description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis"
    }];

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
//for (i=0; i<trabajos.length;i++){
function displayWork(){

  for (job in trabajos){
      console.log("entro");
      $("#workExperience").append(HTMLworkStart);
      console.log(HTMLworkStart);
      var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%",trabajos[job].employer);
      //$(".work-entry").last().append(formattedHTMLworkEmployer);
      console.log(formattedHTMLworkEmployer);
      var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%",trabajos[job].name);
      var entry =  formattedHTMLworkEmployer + formattedHTMLworkTitle;
      $(".work-entry").last().append(entry);
      var descripcion = HTMLworkDescription.replace("%data%", trabajos[job].description);
      $(".work-entry").last().append(descripcion);

      console.log(formattedHTMLworkTitle);
  }
}
displayWork();

$(document).click(function(loc) {
 console.log(loc);
  logClicks(loc.clientX,loc.clientY);
});


var proyects = [{
    "title": "proyecto uno",
    "descripcion" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis"
  },{
    "title" : "proyecto dos",
    "descripcion" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis"
  }];

console.log("Obj proyects", proyects);
proyects.display = function () {

  for (pro in proyects){
    $("#projects").append(HTMLprojectStart);

    var fTitle = HTMLprojectTitle.replace("%data%",proyects[pro].title);
    $(".project-entry").last().append(fTitle);

    var fDes = HTMLprojectTitle.replace("%data%",proyects[pro].descripcion);
    $(".project-entry").last().append(fDes);
  }

};

proyects.display();
