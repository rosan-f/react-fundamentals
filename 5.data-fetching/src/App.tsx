import { Routes, Route } from "react-router"
import EmployeesPage from "./pages/EmployeesPage"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
    </Routes>
  )
}
export default App;
