
function compare ( a, b){
    if(a.attendee < b.attendee)
        return 1;
    if(a.attendee > b.attendee)
        return -1;
    return 0;
}

const topNStudentsAttendees = (students, attendees, N) => {
    // students - An array of the names of all students who registered for the course (no duplicate names).
    // attendees -  A 2D array - each row represents a different lecture, and it’s content is an array
    // of the attendees (i.e attendees[0] is an array of names who attend lecture #0).
    // N - The number of top students to return, and will always be equal to or less than the number
    // of students who attend the lectures.


    numberOfAttendessPerStudent = [];
    for(let i = 0; i < students.length; i++) {
        numberOfAttendessPerStudent[i] = 0;
    }

    for(let i = 0; i < attendees.length; i++){
        for(let j =0; j < students.length; j++) {
            if(attendees[i].includes(students[j]))
                numberOfAttendessPerStudent[j] ++;
        }
    }
    studentsAttendees = [];
    for(let i =0; i < students.length; i++){
        studentsAttendees[i] = {};
        studentsAttendees[i].name = students[i];
        studentsAttendees[i].attendee = numberOfAttendessPerStudent[i];
    }

    studentsAttendees.sort(compare);
    res = [];
    for(let i = 0; i < N; i++ ){
        res[i] = studentsAttendees[i].name;
    }

    return res;
}

var students = ["Eden", "Refael", "Yoni", "Nitzan", "Hadas"];
var attendees = [["Eden", "Refael", "Yoni", "Nitzan", "Hadas", "Ortal"],
                ["Berry", "Nitzan", "Yoni", "Eden", "Hadas", "Ortal"],
                ["Maxim", "Ortal", "Yoni", "Refael", "Nitzan", "Alex"],
                ["Eden", "Andrew", "Yoni", "Nitzan", "Ortal","Nitzan"]];
var N = 3;

console.log(topNStudentsAttendees(students, attendees, N));