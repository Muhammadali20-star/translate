// import React, { useState } from "react";

// function Table() {
//   const datas = [
//     { id: 1, name: "Jasur", surname: "Qurbonov" },
//     { id: 2, name: "Jasurbek", surname: "Qurbonboyev" },
//     { id: 3, name: "Jamshid", surname: "Tohirov" },
//     { id: 4, name: "Jasurjon", surname: "Qurbonjonov" },
//     { id: 5, name: "Sardor", surname: "Ismatullayev" },
//   ];
//   const [isEditing, setIsEditing] = useState(null);
//   const onEdit = (data) => {
//     console.log(data);
//     setIsEditing(data);
//   };
//   return (
//     <div>
//       <table border={"1"} width={"400px"}>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>name</th>
//             <th>surname</th>
//             <th>actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {datas.map((data) => (
//             <tr key={data.id}>
//               <td>{data.id}</td>
//               <td>
//                 {isEditing?.id == data?.id ? <input type="text" /> : data.name}
//               </td>
//               <td>{data.surname}</td>
//               <td>
//                 <button>del</button>
//                 {isEditing ? (
//                   <button onClick={() => setIsEditing(null)}>save</button>
//                 ) : (
//                   <button onClick={() => onEdit(data)}>edit</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

// // Baxtiyor_M