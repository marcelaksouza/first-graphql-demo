// import React, { useState, useEffect } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_AUTHORS } from "../lib/queries";

// const AuthorsList = () => {
//   const { loading, data } = useQuery(GET_AUTHORS);
//   const [authorsList, setAuthors] = useState([]);

//   useEffect(() => {
//     if (data) {
//       setAuthors(data.authors);
//     }
//   }, [data]);

//   if (loading) return <option disabled>Loading authors</option>;

//   return (
//     <select>
//       <option>Select author</option>
//       {authorsList &&
//         authorsList.map((author) => (
//           <option key={author.id} value={author.id}>
//             {author.name}
//           </option>
//         ))}
//     </select>
//   );
// };

// export default AuthorsList;
