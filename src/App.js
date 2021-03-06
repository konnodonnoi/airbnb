import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";


import "./fonts/fonts.css";
import "./App.css";

//gotta understand mapping


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="katie.png"
        rating="5.0"
        reviewCount={6}
        country="Nigeria"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      
    </div>
  );
};

export default App;

// import React from 'react';

// const style = {
//   table: {
//     borderCollapse: 'collapse'
//   },
//   tableCell: {
//     border: '1px solid gray',
//     margin: 0,
//     padding: '5px 10px',
//     width: 'max-content',
//     minWidth: '150px'
//   },
//   form: {
//     container: {
//       padding: '20px',
//       border: '1px solid #F0F8FF',
//       borderRadius: '15px',
//       width: 'max-content',
//       marginBottom: '40px'
//     },
//     inputs: {
//       marginBottom: '5px'
//     },
//     submitBtn: {
//       marginTop: '10px',
//       padding: '10px 15px',
//       border:'none',
//       backgroundColor: 'lightseagreen',
//       fontSize: '14px',
//       borderRadius: '5px'
//     }
//   }
// }

// function PhoneBookForm( props ) {

//   const {} = props;
//   return (
//     <form >
//       <label>First name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userFirstname'
//         name='userFirstname'
//         type='text'
//       />
//       <br/>
//       <label>Last name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userLastname'
//         name='userLastname'
//         type='text'
//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userPhone'
//         name='userPhone'
//         type='text'
//       />
//       <br/>
//       <input
//         style={style.form.submitBtn}
//         className='submitButton'
//         type='submit'
//         value='Add User'
//       />
//     </form>
//   )
// }

// function InformationTable(props) {
//   return (
//     <table style={style.table} className='informationTable'>
//       <thead>
//         <tr>
//           <th style={style.tableCell}>First name</th>
//           <th style={style.tableCell}>Last name</th>
//           <th style={style.tableCell}>Phone</th>
//         </tr>
//       </thead>
//     </table>
//   );
// }

// function App(props) {
//   return (
//     <section>
//       <PhoneBookForm />
//       <InformationTable />
//     </section>
//   );
// }

// export default App;
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// const style = {
//   table: {
//     borderCollapse: 'collapse'
//   },
//   tableCell: {
//     border: '1px solid gray',
//     margin: 0,
//     padding: '5px 10px',
//     width: 'max-content',
//     minWidth: '150px'
//   },
//   form: {
//     container: {
//       padding: '20px',
//       border: '1px solid #F0F8FF',
//       borderRadius: '15px',
//       width: 'max-content',
//       marginBottom: '40px'
//     },
//     inputs: {
//       marginBottom: '5px'
//     },
//     submitBtn: {
//       marginTop: '10px',
//       padding: '10px 15px',
//       border:'none',
//       backgroundColor: 'lightseagreen',
//       fontSize: '14px',
//       borderRadius: '5px'
//     }
//   }
// }

// function PhoneBookForm({ addEntryToPhoneBook }) {

// const [formData, setFormData] = React.useState({
//   userFirstname: "", userLastname: "", userPhone: ""
// })

// console.log(formData)

// function handleChange(event) {
//  setFormData(prevFormData => {
//   return {
//     ...prevFormData,
//     [event.target.name]: event.target.value
//   }
//  })

// }

//   return (
//     <form >
//       <label>First name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userFirstname'
//         name='userFirstname'
//         type='text'
//         onChange={handleChange}

//       />
//       <br/>
//       <label>Last name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userLastname'
//         name='userLastname'
//         type='text'
//         onChange={handleChange}

//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userPhone'
//         name='userPhone'
//         type='text'
//         onChange={handleChange}

//       />
//       <br/>
//       <input
//         style={style.form.submitBtn}
//         className='submitButton'
//         type='submit'
//         value='Add User'
//       />
//     </form>
//   )
// }

// function InformationTable(props) {
//   return (
//     <table style={style.table} className='informationTable'>
//       <thead>
//         <tr>
//           <th style={style.tableCell}>First name</th>
//           <th style={style.tableCell}>Last name</th>
//           <th style={style.tableCell}>Phone</th>
//         </tr>
//       </thead>
//     </table>
//   );
// }

// export default function Application(props) {
//   return (
//     <section>
//       <PhoneBookForm />
//       <InformationTable />
//     </section>
//   );
// }

// ReactDOM.render(
//   <Application />,
//   document.getElementById('root')
// );
