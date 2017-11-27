var home = document.getElementById('home');
home.style.height = window.innerHeight + "px";
window.addEventListener("resize", function() {
    home.style.height = window.innerHeight + "px";
});

$('#work-experience-detail').hide();

/**
 * -1:  hides the div
 * 0:   displays BTAP
 * 1:   displays Sto Corp
 * 2:   displays Delta Air Lines
 * 3:   displays ADP
 */
var workExperienceSelected = -1;

var workExperience = {
    0: {"CompanyName": "Brain Trauma Assessment Protocols",
        "Position": "Lead iOS Developer",
        "StartDate": "Aug 2014",
        "EndDate": "Dec 2015",
        "Description": " As the iOS development team leader, I've focused my efforts in designing the program architecture of the application itself. Using Swift and Xcode, I designed most of the application's elements and user interface, consisting of several view controllers, many of which I delegated to my teammates. Furthermore, we used GitHub to seamlessly merge all of our collaborations. Through team meetings and effective communication, we were able to create the first prototype of the application."},
    1: {"CompanyName": "Sto Corp",
        "Position": "Engineering Intern",
        "StartDate": "May 2015",
        "EndDate": "Aug 2015",
        "Description": "As an electrical engineering intern at Sto Corp, I was able to work on several important projects, and gained experience in the engineering of the construction materials manufacturing industry."},
    2: {"CompanyName": "Delta Air Lines",
        "Position": "Cabin Avionics Co-op",
        "StartDate": "Jan 2016",
        "EndDate": "Dec 2016",
        "Description": "As part of the Interiors Engineering department at Delta Air Lines Technical Operations, I've been able to aid in numerous projects as well as develop the necessary skills to take on projects independently in the near future.<br><br>My biggest contribution so far has been in the implementation of Gogo Inc's latest in-flight internet technology, 2KU, on Delta's B737-800 fleet. I've aided in design decisions, troubleshooting, and documentation."},
    3: {"CompanyName": "Automatic Data Processing",
        "Position": "Junior Application Developer",
        "StartDate": "May 2017",
        "EndDate": "Aug 2017",
        "Description": "As a Global Product Technology intern at ADP, I joined the Talent Management Solutions (TMS) team. During my time as part of this team, developed a Java web application that allows other TMS Software Developers to view and change log levels of TMS java web applications during runtime. This application handles log changes for local instances of TMS applications, but also the propagation of a log level changes throughout any and all servers running TMS applications simultaneously."}};

var curCompany = "";
var curPosition = "";
var curStartDate = "";
var curEndDate = "";
var curDescription = "";

updateWorkExperienceSelected(workExperienceSelected);


/**
 *
 * @param selection
 */

function updateWorkExperienceSelected(selection) {
    if (selection >= 0 && selection < 4) {
        curCompany = workExperience[selection].CompanyName;
        curPosition = workExperience[selection].Position;
        curStartDate = workExperience[selection].StartDate;
        curEndDate = workExperience[selection].EndDate;
        curDescription = workExperience[selection].Description;
    }
    console.log("running 3");
    if (selection == -1) {
        $('#work-experience-detail').hide();
        console.log("Hid the work experience detail.");
    } else {
        $('#work-name').html(curCompany);
        $('#work-position').html(curPosition);
        $('#work-date').html(curStartDate + " - " + curEndDate);
        $('#work-content').html(curDescription);
        $('#work-experience-detail').show("slow", function() {
            console.log("animated");
        });
        console.log("Showed the work experience detail.");

    }
}

$('#btap').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 0) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 0;
        console.log("adding border");
        $('#btap').css("borderBottom", "8px solid #469BEB");
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#sto').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 1) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 1;
        $('#sto').css("borderBottom", "8px solid #469BEB");
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#delta').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 2) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 2;
        $('#delta').css("borderBottom", "8px solid #469BEB");
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#adp').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 3) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 3;
        $('#adp').css("borderBottom", "8px solid #469BEB");
    }
    updateWorkExperienceSelected(workExperienceSelected);
})

function clearAllBorders() {
    $('#btap').css("borderBottom", "0px solid #469BEB");
    $('#sto').css("borderBottom", "0px solid #469BEB");
    $('#delta').css("borderBottom", "0px solid #469BEB");
    $('#adp').css("borderBottom", "0px solid #469BEB");
}



var projects = {
    0: {"ProjectName": "SmartVanity",
        "Position": "Product Developer",
        "StartDate": "Aug 2017",
        "EndDate": "May 2018",
        "Description": "SmartVanity is the result of my Georgia Tech Senior Design project. During the first semester as a Product Developer and one of the six members in the SmartVanity team, we developed the paperwork, market research, project proposal, and project plan for the second semester.<br><br>The SmartVanity smart mirror is an Internet of Things application with a companion mobile application. More details to come as the project develops."},
    1: {"ProjectName": "Playground",
        "Position": "Lead iOS Developer",
        "StartDate": "Sep 2017",
        "EndDate": "Present",
        "Description": "Playground is a pickup sports application that allows its users to browse, join, or host informal sports matches near their location. As the lead iOS Developer on the team of 5 members, I am currently leading the design o the iOS version of the application.<br><br>Please send me an email or give me a call if you would like to request access to the repository."},
    2: {"ProjectName": "FridgeHound",
        "Position": "Product Developer",
        "StartDate": "March 2017",
        "EndDate": "May 2017",
        "Description": "FridgeHound is a smart tupperware that notifies the users whenever the food inside rots. As one of the two product developers in this project, I designed the companion web application as well as aided in the development of the product. Fridgehound uses a Raspberry Pi 2, an Mbed LPC 1764, and a number of sensors in order to sense the food's quality and temperature."},
    3: {"ProjectName": "FreeBites",
        "Position": "Lead iOS Developer",
        "StartDate": "Jan 2017",
        "EndDate": "Present",
        "Description": "Freebites is an iOS application that uses crowd-sourced data to allow its users to find free food on college campuses. As the sole developer in this project, I designed the application in its entirety. Throughout the development of this application, I utilized applies Foundation and UIKit frameworks in order to design the application's architecture. Furthermore, I designed the application's user interface using Sketch. This application uses Firebase for user authentication and management and as the back-end solution."}};


var projectSelected = -1;

var curProject = "";
var curProjectPosition = "";
var curProjectStartDate = "";
var curProjectEndDate = "";
var curProjectDescription = "";

updateProjectSelected(projectSelected);


/**
 *
 * @param selection
 */

function updateProjectSelected(selection) {
    if (selection >= 0 && selection < 4) {
        curProject = projects[selection].CompanyName;
        curProjectPosition = projects[selection].Position;
        curProjectStartDate = projects[selection].StartDate;
        curProjectEndDate = projects[selection].EndDate;
        curProjectDescription = projects[selection].Description;
    }

    if (selection == -1) {
        $('#project-detail').hide();
        console.log("Hid the work experience detail.");
    } else {
        $('#project-name').html(curProject);
        $('#project-position').html(curProjectPosition);
        $('#project-date').html(curProjectStartDate + " - " + curProjectEndDate);
        $('#project-content').html(curProjectDescription);
        $('#project-detail').show("slow", function() {
            console.log("animated");
        });

    }
}

$('#smartvanity').click(function() {
    clearAllProjectBorders();
    if (projectSelected == 0) {
        projectSelected = -1;
    } else {
        projectSelected = 0;
        console.log("adding border");
        $('#smartvanity').css("borderBottom", "8px solid #469BEB");
    }
    updateProjectSelected(projectSelected);
});
$('#playground').click(function() {
    clearAllProjectBorders();
    if (projectSelected == 1) {
        projectSelected = -1;
    } else {
        projectSelected = 1;
        $('#playground').css("borderBottom", "8px solid #469BEB");
    }
    updateProjectSelected(projectSelected);
});
$('#fridgehound').click(function() {
    clearAllProjectBorders();
    if (projectSelected == 2) {
        projectSelected = -1;
    } else {
        projectSelected = 2;
        $('#fridgehound').css("borderBottom", "8px solid #469BEB");
    }
    updateProjectSelected(projectSelected);
});
$('#freebites').click(function() {
    clearAllProjectBorders();
    if (projectSelected == 3) {
        projectSelected = -1;
    } else {
        projectSelected = 3;
        $('#freebites').css("borderBottom", "8px solid #469BEB");
    }
    updateProjectSelected(projectSelected);
})

function clearAllProjectBorders() {
    $('#smartvanity').css("borderBottom", "0px solid #469BEB");
    $('#playground').css("borderBottom", "0px solid #469BEB");
    $('#fridgehound').css("borderBottom", "0px solid #469BEB");
    $('#freebites').css("borderBottom", "0px solid #469BEB");
}