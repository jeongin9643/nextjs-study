import { useState } from "react";

function App() {
  const [names, setNames] = useState(["홍길동", "김영희"]);
  const [input, setInput] = useState('');

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // }; 

  function handleInputChange(e) {
    setInput(e.target.value);
  }; 

  const handleUpload = () => {
    setNames((prevState) => {
    console.log ("이전 state",prevState)
      return ([input, ...prevState]);
    });
  }
// console.log (input)
  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </>
  );
}

export default App;

// function App() {

//   return(<div>
//   Todo List
//   </div>

//   );

// }
