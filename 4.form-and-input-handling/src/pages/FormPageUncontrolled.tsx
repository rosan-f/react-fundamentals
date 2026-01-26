import { useRef } from "react";
import Header from "./Header";


const FormPageUncontrolled = () => {
  // uncontrolled component/input
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
  const fullName = inputRef.current?.value
  const email = inputEmailRef.current?.value
  alert("submited :" + fullName + " " + email )
}

  return(
  <>

  <Header/>

  <h1>Form Page uncontrolled Input</h1>

  <label htmlFor="name">name</label>
  <input ref={inputRef} type="text" id="name"/>

  <label htmlFor="email">email</label>
  <input ref={inputEmailRef} type="email" id="email"/>

  <button onClick={handleSubmit}>Submit</button>

  </>
  );
}
export default FormPageUncontrolled
