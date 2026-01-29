import FormPageUncontrolled from "./pages/FormPageUncontrolled";
import FormPageControlled from "./pages/FormPageControlled";
import NotFoundPage from "./pages/NotFoundPages";

import { Route,Routes } from "react-router";
import RHFPages from "./pages/RHFPages";

function App() {
  return(
    <div>

      <Routes>
        <Route path="/" element={ <FormPageUncontrolled/>} />
        <Route path="/form-page-controlled" element={ <FormPageControlled/>} />
        <Route path="/react-hooks-form" element={ <RHFPages/>} />
        <Route path="*" element = {<NotFoundPage />} />
      </Routes>

    </div>
  )
}
export default App;
