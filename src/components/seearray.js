const [questions, setQuestion] = useState(null);

// useEffect(() => {
//     const fetchChatData = async () => {
//       const foo = await db.collection("Tests").doc(props.match.params.id);
//       // this.unsubscribe = await this.newChatRef.doc(this.props.chatID)
//       foo.onSnapshot(doc => {
//         const data = doc.data().questions;

//         const no = [];
//         for (const questions in data) {
//           no.push({
//             question: data[questions].question,
//             op1: data[questions].op1,
//             op2: data[questions].op2,
//             op3: data[questions].op3,
//             op4: data[questions].op4,
//           });
//         }

//         setQuestion(doc.data().no);
//         // console.log(privateMessages);
//       }
//     );
//   }
// }, [props]);

// const foo =  db.collection("Tests").doc(props.match.params.id);
// foo.get().then((doc) => {
//   if (doc.exists) {

//   const fetchquestions = async () => {
//     const foo = await db.collection("Tests").doc(props.match.params.id).get();
//     // const tar = await foo.where("id", "==",props.id)
//     // const snapshot = await foo.where("questions", "!=", []).get();
    
//     if (foo.empty) {
    
//       return <h1>No questions</h1>;
//     }
//     // for (const child of parent.children) {
//     //   console.log(child);
//     // }
//     foo.forEach((doc) => {
//       setQuestion(doc.data().questions);
        
//     });
//   };

//   fetchquestions();
// }, [props]);