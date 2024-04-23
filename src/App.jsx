import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./Components/Common/LoadingScreen";

const Layout = React.lazy(() => import("./Layout"));
const Home = React.lazy(() => import("./Pages/Home"));
const Dash = React.lazy(() => import("./Pages/Dash"));

const Auth = React.lazy(() => import("./Pages/Auth"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/dash" element={<Dash />}></Route>
            <Route path="/camera" element={<Home />}></Route>
            <Route path="/profile" element={<Home />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
