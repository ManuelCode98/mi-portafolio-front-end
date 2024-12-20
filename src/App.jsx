import './App.css';
import HeaderImageBackground from './components/header-image-background';
import SkillsContainer from './components/skills-container';
import { ShowProjects } from './components/show-projects.jsx';



function App() {

  return (
    <div className='app-container'>
      <HeaderImageBackground/>
      <ShowProjects></ShowProjects>
      <SkillsContainer/>
    </div>
  )
}

export default App;
