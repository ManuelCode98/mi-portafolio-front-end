import './App.css';
import HeaderImageBackground from './components/header-image-background';
import SkillsContainer from './components/skills-container';
import { ShowProjects } from './components/show-projects.jsx';



function App() {

  return (
    <div className='app-container'>
    {/* <BrowserRouter>  
      <Routes>
        <Route path='/' element={<HeaderMenu/>} />
        <Route path='contacto' element={<Contacto/>} />
        <Route path='acerca-de' element={<AcercaDe/>}/>
        <Route path='panel-control' element={<PanelControl/>} />
      </Routes>
    </BrowserRouter> */}
      {/* <HeaderMenu></HeaderMenu> */}
      <HeaderImageBackground/>
      <ShowProjects></ShowProjects>
      <SkillsContainer/>
    </div>
  )
}

export default App;
