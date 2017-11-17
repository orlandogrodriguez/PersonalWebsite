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
var workExperienceSelected = 2;

var workExperience = {
    0: {"CompanyName": "Brain Trauma Assessment Protocols",
        "Position": "Lead iOS Developer",
        "StartDate": "Aug 2014",
        "EndDate": "Dec 2015",
        "Description": "Lorem Ipsum Dolor Sit Amet"},
    1: {"CompanyName": "Sto Corp",
        "Position": "Engineering Intern",
        "StartDate": "May 2015",
        "EndDate": "Aug 2015",
        "Description": "Lorem Ipsum Dolor Sit Amet"},
    2: {"CompanyName": "Delta Air Lines",
        "Position": "Cabin Avionics Co-op",
        "StartDate": "Jan 2016",
        "EndDate": "Dec 2016",
        "Description": "Lorem Ipsum Dolor Sit Amet"},
    3: {"CompanyName": "Automatic Data Processing",
        "Position": "Global Product Technology Intern\nApplication Developer",
        "StartDate": "May 2017",
        "EndDate": "Aug 2017",
        "Description": "Lorem Ipsum Dolor Sit Amet"}};

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
    if (workExperienceSelected == 0) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 0;
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#sto').click(function() {
    if (workExperienceSelected == 1) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 1;
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#delta').click(function() {
    if (workExperienceSelected == 2) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 2;
    }
    updateWorkExperienceSelected(workExperienceSelected);
});
$('#adp').click(function() {
    if (workExperienceSelected == 3) {
        workExperienceSelected = -1;
    } else {
        workExperienceSelected = 3;
    }
    updateWorkExperienceSelected(workExperienceSelected);
})