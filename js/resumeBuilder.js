/*
This is empty on purpose! Your code to build the resume will go here.
 */
var contactInfo = {
  "email": "jiangqi2015@outlook.com",
  "phone": "613-252-8467",
  "github": '<a id ="link" href="https://github.com/JohnnieLi">JohnnieLi </a>',
  "location": "Ottawa, Ontario, Canada"
};
var skills = [
           "Java      : JavaSE, JavaFX, Swing, Jsoup, Junit, HttpClient,",
           "Web       : HTML, CSS, Javascript, jQuery, PHP",
           "Framework : konw Spring",
           "Data      : SQL, MySQL, SQL Server, Oracle",
           "Knowledge : Data Structures, OOP Concepts, Computer Networks",

]



var bio = {
  "name": "Jiangqi Li",
  "role": "Passionate Coder / Programming Student ",
  "contacts": contactInfo,
  "picture": "images/me.jpg",
  "welcomeMsg": "Hardworking, Reliable, Efficient Learner",
  "skills": skills
};

var work = {
  "jobs":
  [
    {"position": "Tutor",
    "employer": "Algonquin College",
    "years": "Jan, 2016 - parent",
    "location": "Ottawa, Canada",
    "description":"Helped students familiar with basic programming knowledge, such as Java, JavaScript, CSS, HTML5 and some design patterns"+
                  "<br>Introduced some coding skills through Labs and Assignments task.<br>I was also " +
                  "recommended some valuable online courses or references for tutees depend on their personal requirements."
    },
    {"position": "Clerk",
    "employer": "HanSeng trade CO.,Ltd",
    "years": "June, 2013",
    "location": "NanJing, China",
    "description": "Managed accounts payable, accounts receivable and tax information in a team.<br>"+
                   "Make  deposits and file documents.<br>"+
                   "Recorded invoices and prepared monthly forecast of each flow, sales and expenses, set up.<br>"+
                   "quarterly/annual expense budgets for sales and marketing teams."
    },
    {"position": "Project manager",
    "employer": "QiHang simulation company",
    "years": "Jun, 2012- Jun, 2013",
    "location": "ShaoXing, China",
    "description": "Searched for student training programs.<br>"+
                   "Helped students know about certification testing, managed and student reservation and"+
                   "waiting list, completed transaction using handled payments(cash, debit card) with great accuracy.<br> "+
                   "Organized events with a team."
    },
    
    
  ]
};
var education = {
  "schools":
  [
    {"school": "Algonquin College",
    "degree": "Diploma",
    "major": "Computer Programmer, CO-OP",
    "years": "Sep. 2015 - Present",
    "url": "http://www.algonquincollege.ca",
    "location": "Ottawa, Ontario, Canada"
    },
    {"school": "ShaoXing University",
    "degree": "Bachelor of Accounting Management",
    "major": ["Accounting"],
    "years": "Sep. 2010 - May 2014",
    "location": "ShaoXing, China"
    }
  ]
};
var project = {
  "projects":
  [
    {"title": "Java Swing Applet: Shannons Theorem",
     "dates": "2016",
     "description": "Implementation of a common communication theorem (Shannons's Theorem for Maximum data rate of a channel)<br>"+
                    "Analysis and design:UML class diagram, UML sequence diagram.<br>"+
                    "Implementation: Using MVC design pattern to implement Shannon's Theorem to compute the Capacity"+
                    " C (Maximum data rate), of a communications channel, given the bandwidth B, and signal_to_noise Ratio SNR.<br>"+
                    "Test: Tesing with Junit test.<br>",
                  
     "image":["images/MVCsample.png"]
    },
    
    {"title": "Android App: MyNotes",
     "dates": "2016",
     "description": "Analysis: UML diagram"+
                    "Written in Java, XML. Using Android studio.<br>"+
                    "Implemented database to store notes with SQlite<br>"+
                    "Test: Installed in real android devidce and check functions",
     "image": ["images/home.jpg", "images/delete.jpg", "images/addNotes.jpg"]
     },
     
     {"title": "Restaurant Homepage",
      "dates": "2015",
      "description": "Written in HTML and PHP. Database: MYSQL. <br>"+
                     "Developed the feature of customer registrations by using their names, emails and etc.<br>"+
                     "Developed the login function by verify username and password from database.<br>"+
                     "Implemented database to store customer information and administrator information." ,
      "image": ["images/home.png", "images/contact.png", "images/login.png", "images/list.png"]
     }
  ]
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
var fromattedPic = HTMLbioPic.replace ("%data%", bio.picture);
//var fromattedWelMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMsg);

//header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(fromattedPic);
//$("#header").append(fromattedWelMsg);
$("#header").append(HTMLskillsStart);
for (item in skills){
  var formmatedSkill = HTMLskills.replace("%data%", skills[item]);
  $("#skills").append(formmatedSkill);
};

//contact information
var formattedContacts = [];
var fomattedMobile = HTMLmobile.replace("%data%", contactInfo.phone);
var formattedEmail = HTMLemail.replace("%data%", contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", contactInfo.github);
var formmatedLocation = HTMLlocation.replace("%data%", contactInfo.location);
formattedContacts.push(fomattedMobile);
formattedContacts.push(formattedEmail);
formattedContacts.push(formattedGithub);
formattedContacts.push(formmatedLocation);
for (item in formattedContacts){
  $("#topContacts").append(formattedContacts[item]);
  $("#footerContacts").append(formattedContacts[item]);
};

function displaywork(){
  for (i=0; i<work.jobs.length; i++){
      var formmattedWorkEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formmatedWorkTit = HTMLworkTitle.replace("%data%", work.jobs[i].position);
      var formattedEmpTit = formmattedWorkEmp +  formmatedWorkTit;
      var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].years);
      var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedWorkDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmpTit);
      $(".work-entry:last").append(formattedWorkDate);
      $(".work-entry:last").append(formattedWorkLoc);
      $(".work-entry:last").append(formattedWorkDes);
  };
};

displaywork();

education.display=function() {
  for (school in education.schools){
      var formmattedSchTit = HTMLschoolName.replace("%data%", education.schools[school].school);
      var formmattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
      var formmatedSchDgr = formmattedSchTit + formmattedDegree;
      var formmattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
      var formmattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formmattedschMaj = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formmatedSchDgr);
      $(".education-entry:last").append(formmattedSchDates);
      $(".education-entry:last").append(formmattedschMaj);
      $(".education-entry:last").append(formmattedSchLoc);
  };
}
education.display();


$(document).click(function(loc){
   logClicks(loc.clientX, loc.clientY);
});

function locationizer(work_obj){
  var workLocations = [];
  for (i=0; i<work.works.length; i++){
    workLocations.push(work.works[i].city);
  }
  return workLocations;
}


  function isName(){
    var nameArr = bio.name.split(" ");
    var fullName = nameArr[0] +" "+ nameArr[1].toUpperCase();
    return fullName;
  }
//  $("#main").append(internationalizeButton);

project.display=function() {
  for (item in project.projects){
      var formmttedProTit = HTMLprojectTitle.replace("%data%", project.projects[item].title);
      var formmatedProDates = HTMLprojectDates.replace("%data%", project.projects[item].dates);
      var formmattedProDes = HTMLprojectDescription.replace("%data%", project.projects[item].description);
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formmttedProTit);
      $(".project-entry:last").append(formmatedProDates);
      $(".project-entry:last").append(formmattedProDes);
      if (project.projects[item].image.length > 0){
        for (pic in project.projects[item].image ){
            var formmattedProPic =  HTMLprojectImage.replace("%data%", project.projects[item].image[pic]);
            $(".project-entry:last").append(formmattedProPic);
        }
      }
  };
}
project.display();

$("#mapDiv").append(googleMap);
