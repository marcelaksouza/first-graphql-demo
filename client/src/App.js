import React from 'react'

// components
import BookList from "./components/BookList"

function App() {
  return (
   <div className="bg-gray-200 h-screen w-screen font-nunito">
     <h1>Ninja reading list</h1>
     <BookList />
   </div>
  );
}

export default App;
