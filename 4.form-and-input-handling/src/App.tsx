import FormPageUncontrolled from "./pages/FormPageUncontrolled";
import NotFoundPage from "./pages/NotFoundPages";

import { Route,Routes } from "react-router";

function App() {
  return(
    <div>

      <Routes>
        <Route path="/" element={ <FormPageUncontrolled/>} />
        <Route path="*" element = {<NotFoundPage />} />
      </Routes>

    </div>
  )
}
export default App;
