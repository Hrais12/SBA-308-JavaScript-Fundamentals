// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  












  function getLearnerData(course, ag, submissions) {
   
    // const learnerArray =[];
    // learnerArray.push({

    //   Id

    //   average,
    //   key_value



    // })
  

    // return result;
  }
  {

  }
  






  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
// ------------------------------------------------------------------------------------------------

function student1( AssignmentGroup, LearnerSubmissions) {

    // let studentId = `id: ${LearnerSubmissions[0].learner_id}`

    // console.log(studentId);

    let studentsId =[]
    

    for (let i = 0; i < LearnerSubmissions.length; i++) {

      studentsId.push(LearnerSubmissions[i].learner_id) ;
      
    }

    let unique_studentsId = [...new Set(studentsId)];
    console.log(unique_studentsId);

    let assignment_key_id =[]

    let studentScores =[]

    let pointsPossible=[]
    
   for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
    
          assignment_key_id.push(AssignmentGroup.assignments[i].id)

          studentScores.push(LearnerSubmissions[i].submission.score);

          pointsPossible.push(AssignmentGroup.assignments[i].points_possible);
            
}

let scoresValue=[]

    let sumScores = 0
    let sumPoints = 0

for (let i = 0; i < AssignmentGroup.assignments.length; i++) {

       scoresValue.push( studentScores[i] / pointsPossible[i]);
       sumScores += studentScores[i];
       sumPoints += pointsPossible[i];   
}
let average = sumScores/sumPoints;

       console.log(`avg: ${average}`);
       for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
        let key_value = `${assignment_key_id[i]} : ${scoresValue[i]}`
       console.log(key_value);
       }




    // let assignment_id1 = `${AssignmentGroup.assignments[0].id}:`
    // let assignment_id2 = `${AssignmentGroup.assignments[1].id}:`
    // let assignment_id3 = `${AssignmentGroup.assignments[2].id}:`

   

    // let studentScore_id1 = LearnerSubmissions[0].submission.score
    // let studentScore_id2 = LearnerSubmissions[1].submission.score
    // let studentScore_id3 = LearnerSubmissions[2].submission.score

    // let points_possible_id1 = AssignmentGroup.assignments[0].points_possible
    // let points_possible_id2 = AssignmentGroup.assignments[1].points_possible
    // let points_possible_id3 = AssignmentGroup.assignments[2].points_possible
    
    // let score_value_id1 = studentScore_id1 / points_possible_id1
    // let score_value_id2 = studentScore_id2 / points_possible_id2

    
    // let average_id1 = (studentScore_id1 + studentScore_id2)/(points_possible_id1 + points_possible_id2 )

    // console.log(average_id1);




}
const answer = student1( AssignmentGroup, LearnerSubmissions)







//   console.log(result);
  

//    // here, we would process this data to achieve the desired result.
//    const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];




// Accessing data inside of objects using dot notation
// console.log(courseInfo.id)
// console.log(courseInfo.name)

// Accessing data inside of objects using dot notation and indexing inside of arrays nested within objects
// console.log(assignmentGroup.course_id)
// console.log(assignmentGroup.assignments)
// console.log(assignmentGroup.assignments[1])
// console.log(assignmentGroup.assignments[2].due_at)

// Performing a math calculation using two pieces of data nested inside of an array and multiple objects
// console.log(learnerSubmissions[0].submission.score + learnerSubmissions[1].submission.score)