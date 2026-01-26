import { useState } from "react"
import Header from "./Header"

const FormPageControlled = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("")
  const [emailErrorMessage, setEmailErrorMessage] = useState("")

  const handleSubmit = () => {

    const nameValidation = name.length < 3
    const emailValidation = email.length < 5

    if(nameValidation){
      setNameErrorMessage("name harus lebih dari 3 karakter")
    }else{
      setNameErrorMessage(" ")
    }

    if(emailValidation){
      setEmailErrorMessage("email harus lebih dari 5 karakter")
    }else{
       setEmailErrorMessage(" ")
    }
    return;
  }

  return(
  <>
  <Header/>

  <h1>Form Page Controlled </h1>

  <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px"

  }}>
    <label htmlFor="name">name</label>
    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
    <span style={{color:"red"}}>{nameErrorMessage}</span>

    <label htmlFor="email">email</label>
    <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
    <span style={{color:"red"}}>{emailErrorMessage}</span>


    <button onClick={handleSubmit} >Submit</button>
  </div>
  </>
  )
}
export default FormPageControlled
