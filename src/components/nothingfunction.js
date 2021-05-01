// import React, { useState } from 'react'


// const No = (propos) => {
//     const [clicking,setClicking] = useState({
//         person: [
//             { name: "baban",age: 22,},
//             { name: "Bavisetti", age: 100 },
//             { name: "Paryank", age: 19 }
//           ]
//         })

// const changeName = () => {
//         setClicking({
//         person: [
//             { name: "narayan",age: 22,},
//             { name: "Bavisetti", age: 50 },
//             { name: "Paryank", age: 19 }
//           ]
//     })
// }
//     return (
//         <React.Fragment>
//         <div>
//         {clicking.map((item)=> {
//                         return(
                          

         
//         <div>
//                 My name is {item.person.name} and my age is {item.person.age}
//                 {/* <input type='text' onChange={handleChange} /> */}
//             </div>
//                   )
//                 })}
//             {/* <div>
//                 My name is {clicking.person[0].name} and my age is {clicking.person[0].age}
//                 <input type='text' onChange={handleChange} />
//             </div>
//             <div>
//                 My name is {clicking.person[1].name} and my age is {clicking.person[1].age}
//             </div>
//             <div>
//                 My name is {clicking.person[2].name} and my age is {clicking.person[2].age}
//             </div> */}
//             <button type="submit" onClick={changeName}>Change name</button>
//         </div>
//         </React.Fragment>
//     )
   
// }
// export default No;



// import React, { Component } from "react";
// import db from "../firebase";
// import { Button, Tab, Tabs, Form, Row, Col } from "react-bootstrap";
// class No extends React.Component{

// state={
//       studentsObject: [
//         {
//           studentsName: "",
//           rollNo: "",
//           class: "",
//           section: "",
//         },
//       ],
// }

//   handleAddStudentsClick = () => {
//     this.setState((prevState) => ({
//       studentsObject: [
//         ...prevState.studentsObject,
//         {
//           studentsName: "",
//           rollNo: "",
//           class: "",
//           section: "",
//         },
//       ],
//     }));
//   };
//   studentsObjectUpdate = (e) => {
//     if (
//       ["studentsName", "rollNo", "class", "section"].includes(
//         e.target.name
//       )
//     ) {
//       let studentsObject = [...this.state.studentObject];
//       studentObject[e.target.name] = e.target.value;
//       console.log(studentObject);
//     } else {
//       this.setState({
//         [e.target.name]: e.target.value,
//       });
//     }
//   };
// addStudentData = (e) => {
//     e.preventDefault();
//     const userRef = db.collection("students").add({
//       studentsData: {
// studentsObject: this.state.studentsObject,
// }
// });
//     this.setState({
//       studentsObject: [
//         {
//           studentsName: "",
//           rollNo: "",
//           class: "",
//           section: "",
//         },
//       ],
// })
// }
// render(){
// return(
// <div>
// <Form
//           onSubmit={this.addStudentData}
//           style={{ width: "65%", height: "100%", margin: "0 auto" }}
//         >
// <Button
//                 onClick={this.handleAddStudentsClick}
//                 variant="primary"
//                 size="sm"
//                 style={{ float: "right" }}
//               >
//                 Add another Student
//               </Button>
//               {Object.keys(this.state.studentsObject).map((students) => {
//                 return (
//                   <Form.Row>
//                     <Col>
//                       <Form.Control
//                         type="text"
//                         onChange={(e) => this.studentsObjectUpdate(e)}
//                         name="studentsName"
//                         placeholder="Name"
//                         value={students.studentsName}
//                         onKeyPress={(e) => {
//                           e.key === "Enter" && e.preventDefault();
//                         }}
//                       />
//                     </Col>
//                     <Col>
//                       <Form.Control
//                         type="text"
//                         onChange={(e) => this.casesObjectUpdate(e)}
//                         name="rollNo"
//                         placeholder="Roll Number"
//                         value={cases.rollNo}
//                         onKeyPress={(e) => {
//                           e.key === "Enter" && e.preventDefault();
//                         }}
//                       />
//                     </Col>
//                     <Col>
//                       <Form.Control
//                         type="text"
//                         onChange={(e) => this.studentsObjectUpdate(e)}
//                         name="class"
//                         placeholder="class"
//                         value={students.class}
//                         onKeyPress={(e) => {
//                           e.key === "Enter" && e.preventDefault();
//                         }}
//                       />
//                     </Col>
//                     <Col>
//                       <Form.Control
//                         type="text"
//                         onChange={(e) => this.studentsObjectUpdate(e)}
//                         name="section"
//                         placeholder="section"
//                         value={students.section}
//                         onKeyPress={(e) => {
//                           e.key === "Enter" && e.preventDefault();
//                         }}
//                       />
//                     </Col>
//                   </Form.Row>
//                 );
//               })}
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
// </Form>
// </div>
// );
//             }
// }

// export default No;
