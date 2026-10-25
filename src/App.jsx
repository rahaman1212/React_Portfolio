import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import  Myprojects from './MyProjects'
import MySkills from './MySkills'
import MyHobbies from './MyHobbies'
import ContactMe from './ContactMe'
import Projects from './pages/Projects';
import UpLoad from './pages/UpLoad'
//import ScrollButton from './ScrollButton'


import './App.css'
function Home () {
  return (
    <>    <NavBar />
          <AboutMe  MyProfile="I am Mahamoud Abdul Rahaman Peligah is an aspiring web developer with a strong passion for creating modern,
                              responsive, and user-friendly websites. He enjoys transforming ideas into functional digital experiences using
                              HTML, CSS, and JavaScript, while continuously improving his skills in front-end and back-end technologies.
                              Rahaman is particularly interested in web design, interactive interfaces, and optimizing websites for
                              performance and accessibility. With a growing portfolio of personal and academic projects, he aims to build
                              innovative web solutions that make online interactions more engaging and efficient." 
          />
      
            <Myprojects />
            <MySkills />
            <MyHobbies />
            <ContactMe CopyRight="2025 My Portfolio website. All rights reserved." />

 
    </> 
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='upload' element={<UpLoad />} />
          <Route path='projects/upload' element={<UpLoad />} />
          <Route path='projects/upload/projects' element={<Projects />} />
          <Route path='projects/upload/projects/upload' element={<UpLoad />} />
        </Routes>
      </BrowserRouter>
    </>
    
    

  );
}

export default App
