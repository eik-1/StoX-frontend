import { BrowserRouter, Routes, Route } from "react-router-dom";

import Provider from "./Provider";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
