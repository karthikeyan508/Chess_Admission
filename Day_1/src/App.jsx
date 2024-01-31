import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import Hello_World from "./components/Hello_World"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import UserPage from "./pages/UserPage"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import AdminPage from "./pages/AdminPage"
import Profile from "./pages/Profile"
import Academy from "./pages/Acadamy"
import CoursesPage from "./pages/CoursesPage"
import Sidebar from "./pages/Sidebar"
import UserDetailsForm from "./pages/UserDetailsForm"
import AdminCourse from "./pages/AdminCourse"


function App() {

  return (
    <Router>
      
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path="/adminpage" element={<AdminPage/>}/>
        <Route path="/adminCourse" element={<AdminCourse/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/academy" element={<Academy/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/userDetails" element={<UserDetailsForm/>} />
        <Route path="/sidebar" element={<Sidebar/>}/>

      </Routes>
    </Router>
  
  )
}

export default App