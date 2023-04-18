// import React, { useState } from 'react';

// const coding = () => {
//   const [arrayValues, setArrayValues] = useState([
//     'let',
//     'work',
//     'right',
//     'now',
//   ]);
//   const [show, setShow] = useState(false);

//   const hideButton = () => {
//     setShow((prev) => {
//       return !prev;
//     });
//   };
//   const deleteTask = (index: any) => {
//     setArrayValues(arrayValues.filter((a, i) => i !== index));
//   };

//   return (
//     <>
//       <ul>
//         {arrayValues.map((value, index) => (
//           <React.Fragment key={index}>
//             <div
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//               }}
//             >
//               <input
//                 type="checkbox"
//                 style={{ marginLeft: '10px' }}
//                 onChange={hideButton}
//               ></input>
//               <li>{value}</li>
//               {show && (
//                 <button onClick={() => deleteTask(index)}> Delete </button>
//               )}
//             </div>
//           </React.Fragment>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default coding;
