import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home";
import { Routes, Route } from "react-router-dom";
import { About } from "./page/about";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={ <Home />} />
        <Route path="product/:id" element={<About/>}/>
      </Route>
    </Routes>
  );
}

export default App;
