import { useForm } from "react-hook-form"
import Header from "./Header"

type FormValues = {
  name: string
  password: string
}


const RHFPages = () => {

  const form = useForm<FormValues>()

  function handleRegister(values : FormValues){
    alert("form submited")
    console.log(values)
  }

  return(<>
  <Header/>
  <h1>React Hook Form</h1>

  <form onSubmit={form.handleSubmit(handleRegister)} style={{
    display:"flex",
    gap:"10px",
    flexDirection: "column",
    maxWidth: "300px"
  }}>
    <label htmlFor="name">Username</label>
    <input type="text" id="name" {...form.register("name")} />

     <label htmlFor="password">Password</label>
    <input type="password" id="password" {...form.register("password")}/>

    <button>Submit</button>
  </form>
  </>)
}
export default RHFPages
