import Aboutme from "./components/aboutme/aboutme";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";


function page(){
return(
  <div>
    <Header></Header>
    <Aboutme></Aboutme>


    <Hero></Hero>
    <Projects></Projects>
    
    <Footer></Footer>
  </div>

)
}

export default page;