import { useRef } from "react";

const FormPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
  const fullName = inputRef.current?.value
  alert("submited :" + fullName )
}

  return(
  <>
  <h1>Form Page</h1>

  <label htmlFor="name">name</label>
  <input ref={inputRef} type="text" id="name"/>
  
  <button onClick={handleSubmit}>Submit</button>

  </>
  );
}
export default FormPage
