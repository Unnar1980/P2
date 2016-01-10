//'use strict';
/*
Resume of Unnar Thor Bachmann.
This is my work in project 2 in Udacity's nanodegree course front-end developing.
 */
// JSON objects
var bio = {
    'name': 'Unnar Thor Bachmann',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '003548480112',
        'email': 'uthb@hotmail.com',
        'github': 'github.com/Unnar1980',
        'twitter': 'twitter.com',
        'location': 'Reykjavik'
    },
    'welcomeMessage': 'Welcome to my contact page. Feel free to browse the page and contact me via email, telephone or twitter.',
    'skills': [
        'chess',
        'math',
        'programming',
        'teaching',
        'project planning'
    ],
    'biopic': 'images/unnar.jpg',
    'display': function () {
        $("#header").append(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }// function ends.
};//object ends
var work = {
    'jobs': [
        {
            'employer': 'Menntaskólinn á Akureyri',
            'title': 'Teacher',
            'location': 'Akureyri',
            'dates': '2004-2007',
            'description': 'Math high school teaching'
        },
        {
            'employer': 'Menntaskólinn í Reykjavík',
            'title': 'Teacher',
            'location': 'Reykjavik',
            'dates': '2007-2012',
            'description': 'Senior teacher in calculus.'
        },
        {
            'employer': 'Reykjavik University',
            'title': 'Teacher',
            'location': 'Reykjavik',
            'dates': '2012-2014',
            'description': 'Teacher of math and computer science.'
        },
        {
            'employer': 'Fjölbrautaskólinn við Ármúla',
            'title': 'Teacher',
            'location': 'Reykjavik',
            'dates': '2014-',
            'description': 'Math, physics and computer teacher'
        }
    ],
    'display': function () {
        if (work.jobs.length) {
            $("#workExperience").append(HTMLworkStart);
            for (var i = 0; i < work.jobs.length; i++) {
                $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
                $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
                $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
                $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
            }// end of for
        }// end of if
    }// end of function
    };// JSON object
var projects = {
    'projects': [
        {
            'title': 'Gettu Betur',
            'date': '2007',
            'description': 'Head coach of the winning team in GB.',
            'image': ['images/gettuBetur.jpg']
        },
        {
            'title': 'Visit to Snowqualmie, Whasington',
            'date': '2013',
            'description': 'Went to Snowqualmie in Whasington. It is the location of many scenes in the Twin Peaks TV series.',
            'image': ['images/twinPeaks.jpg']
        },
        {
            'title': 'Barcelona',
            'date': '2015',
            'description': 'Visitied Barcelona with my coworkers. Interesting to see schools there.',
            'image': ['images/barcelona.jpg']
        }
    ],
    'display': function () {
        if (projects.projects.length){
            $("#projects").append(HTMLprojectStart);
            for (var i = 0; i < projects.projects.length; i++) {
                $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
                $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].date));
                $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
                $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].image[0]));
            }// end of for
        } // end of if
    }// end of function
 };
var education = {
    'schools': [
        {
            'name': 'University of Iceland',
            'location': 'Reykjavik, Iceland',
            'degree': 'BS',
            'majors': [
                'math',
                'physics'],
            'dates': '2004',
            'url': 'www.hi.is'
        },
        {
            'name': 'Reykjavik University',
            'location': 'Reykjavik, Iceland',
            'degree': 'MS',
            'majors': ['computer science'],
            'dates': '2009',
            'url': 'www.ru.is'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Algorithms 1',
            'school': 'Princeton (Coursera)',
            'date': '2014',
            'url': 'www.coursera.org/course/algs4partI'
        },
        {
            'title': 'Algorithms 2',
            'school': 'Princeton (Coursera)',
            'date': '2014',
            'url': 'www.coursera.org/course/algs4partII'
        }
    ],
    'display': function () {
        if (education.schools.length){
            $("#education").append(HTMLschoolStart);
            for (var i = 0; i < education.schools.length; i++) {
                $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name));
                $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
                $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
                $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
                for (var j = 0; j < education.schools[i].majors.length; j++) {
                   $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
                }// end of for
            }// end of for
        } // end of if
        if (education.onlineCourses.length) {
            $(".education-entry").append(HTMLonlineClasses);
            for (var i = 0; i < education.onlineCourses.length; i++) {
                $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
                $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
                $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
                $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
            }// end of for
        }// end of if
    }// end of function
};// End of JSON object

// Displaying the JSON objects.
bio.display();
projects.display();
education.display();
work.display();

// The Google map.
$("#mapDiv").append(googleMap);
$(document).click(function (loc) {
  console.log("(" + loc.pageX + "," + loc.pageY+")");
});


