import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import AuthPage from "./Pages/Auth";
// import NotFound from './pages/NotFound';
import AuthProtectedRoute from "./Routes/AuthProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<AuthPage />} />
        {/* Routes with header and footer */}
        <Route
          path="main-page"
          element={
            <AuthProtectedRoute>
              <Layout />
            </AuthProtectedRoute>
          }
        >
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
          {/* Add more public routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
