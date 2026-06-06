//obj destructing and JSON API
 
const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor:teacher}=course;
console.log(teacher);


 
//JSON  api in obj
// {
//     "name":"pihu",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//api  in array
// [
//     {},
//     {},
//     {}
// ]