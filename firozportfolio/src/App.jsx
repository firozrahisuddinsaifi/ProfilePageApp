import { Contact } from "./Components/Contact"
import { Header } from "./Components/Header"
import { Projects } from "./Components/Projects"
import { TechStack } from "./Components/TechStack"

import { TypeWritter } from "./Components/TypeWritter"

export const App=()=>{
  return(<>
 
  <Header />
  <TypeWritter />

<TechStack />
  <Projects />

  <Contact />

  </>)
}