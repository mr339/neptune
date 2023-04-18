// import React, { useRef } from 'react';

// const Child = React.forwardRef<HTMLDivElement>(() => {
//   const handleClick = () => {
//     console.log('child');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Submit</button>
//     </div>
//   );
// });

// const Parent = ({ name, email }: any) => {
//   console.log(name, email);
//   const childRef = useRef(null);

//   const handleClick = () => {
//     console.log('parent');
//   };

//   return (
//     <div>
//       <Child />
//       <button onClick={handleClick}>Log Child Reference</button>
//     </div>
//   );
// };

// export default Parent;

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(res.status);
//   const data = await res.json();
//   console.log(data[0]);
//   let test = {
//     name: data[0].name,

//     email: data[0].email,
//   };

//   return {
//     props: test,
//   };
// }
