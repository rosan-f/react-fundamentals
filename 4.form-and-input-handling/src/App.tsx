import FormPageUncontrolled from "./pages/FormPageUncontrolled";
import FormPageControlled from "./pages/FormPageControlled";
import NotFoundPage from "./pages/NotFoundPages";

import { Route,Routes } from "react-router";

function App() {
  return(
    <div>

      <Routes>
        <Route path="/" element={ <FormPageUncontrolled/>} />
        <Route path="/form-page-controlled" element={ <FormPageControlled/>} />
        <Route path="*" element = {<NotFoundPage />} />
      </Routes>

    </div>
  )
}
export default App;
