

const topNStudentsAttendees = (students, attendees, N) => {
    // students - An array of the names of all students who registered for the course (no duplicate names).
    // attendees -  A 2D array - each row represents a different lecture, and it’s content is an array
    // of the attendees (i.e attendees[0] is an array of names who attend lecture #0).
    // N - The number of top students to return, and will always be equal to or less than the number
    // of students who attend the lectures.

    numberOfAttendessPerStudent = [];
    for(let i = 0; i < attendees.length; i++) {
        numberOfAttendessPerStudent[i] = 0;
    }

    for(let i = 0; i < attendees.length; i++){
        for(let j =0; j< students.length; j++) {
            if(attendees[i].includes(students[j]))
                numberOfAttendessPerStudent[j] ++;
        }
    }


}
