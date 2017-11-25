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
var workExperienceSelected = 0;

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
    console.log("running 1");
    if (selection >= 0 && selection < 4) {
        console.log("running 2");
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
        $('#btap').css("borderBottom", "8px solid #F23B46");
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#sto').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 1) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 1;
        $('#sto').css("borderBottom", "8px solid #F23B46");
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#delta').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 2) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 2;
        $('#delta').css("borderBottom", "8px solid #F23B46");
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#adp').click(function() {
    clearAllBorders();
    if (workExperienceSelected == 3) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 3;
        $('#adp').css("borderBottom", "8px solid #F23B46");
    }
    updateWorkExperienceSelected(workExperienceSelected);
})

function clearAllBorders() {
    $('#btap').css("borderBottom", "0px solid #F23B46");
    $('#sto').css("borderBottom", "0px solid #F23B46");
    $('#delta').css("borderBottom", "0px solid #F23B46");
    $('#adp').css("borderBottom", "0px solid #F23B46");
}

var projects = {
    3: {"ProjectName": "Brain Trauma Assessment Protocols",
        "Position": "Product Developer",
        "StartDate": "Aug 2017",
        "EndDate": "May 2018",
        "Description": " As the iOS development team leader, I've focused my efforts in designing the program architecture of the application itself. Using Swift and Xcode, I designed most of the application's elements and user interface, consisting of several view controllers, many of which I delegated to my teammates. Furthermore, we used GitHub to seamlessly merge all of our collaborations. Through team meetings and effective communication, we were able to create the first prototype of the application."},
    0: {"ProjectName": "FreeBites",
        "Position": "Lead iOS Developer",
        "StartDate": "Jan 2017",
        "EndDate": "May 2017",
        "Description": "As an electrical engineering intern at Sto Corp, I was able to work on several important projects, and gained experience in the engineering of the construction materials manufacturing industry."},
    1: {"ProjectName": "FridgeHound",
        "Position": "Product Developer",
        "StartDate": "March 2017",
        "EndDate": "May 2017",
        "Description": "As part of the Interiors Engineering department at Delta Air Lines Technical Operations, I've been able to aid in numerous projects as well as develop the necessary skills to take on projects independently in the near future.<br><br>My biggest contribution so far has been in the implementation of Gogo Inc's latest in-flight internet technology, 2KU, on Delta's B737-800 fleet. I've aided in design decisions, troubleshooting, and documentation."},
    2: {"ProjectName": "Playground",
        "Position": "Lead iOS Developer",
        "StartDate": "Sep 2017",
        "EndDate": "Present",
        "Description": "As a Global Product Technology intern at ADP, I joined the Talent Management Solutions (TMS) team. During my time as part of this team, developed a Java web application that allows other TMS Software Developers to view and change log levels of TMS java web applications during runtime. This application handles log changes for local instances of TMS applications, but also the propagation of a log level changes throughout any and all servers running TMS applications simultaneously."}};