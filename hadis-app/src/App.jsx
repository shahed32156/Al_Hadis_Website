
import { Route, Routes } from 'react-router-dom'
import Home from './HOME/Home'

import Hadis_grontho from './HADIS_GRONTHO/Hadis_grontho'
import Hadis_topics from './HADIS_TOPICS/Hadis_topics'
import Bookmark from './BOOKMARK/Bookmark'
import Projects from './PROJECTS/Projects'

function App() {
 
 

  return (

    <>

    <Home />
    <Hadis_grontho />
    <Hadis_topics />
    <Bookmark />
    <Projects />

    </>
  )
}

export default App
