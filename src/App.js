import './App.css';
import ContentHeader from './componentes/ContentHeader';
import TextAbilitie from './componentes/SectionAbilitie/TextAbilitie';
import TextAboutme from './componentes/SectionAboutMe/TextAboutme';
import TextProyect from './componentes/SectionProyects/TextProyect';
import TextContact from './componentes/SectionContact/TextContact';
import Navbars from './componentes/navBar/Navbars';



function App() {
  let app = document.querySelector('.App');

  window.addEventListener("load", () => {
    app.style.filter = "blur(0px)"
  });



  return (
    <div>
      <Navbars />
      <div className="App">
        <div id="home">
          <div id="content-imgHead">
            <ContentHeader />
          </div>
        </div>
        <div className='contentAbilities'>
          <TextAbilitie />
        </div>
        <div className='contentAboutMe'>
          <TextAboutme />
        </div>
        <div className='contentProyects'>
          <TextProyect />
        </div>
        <div className='contentContact'>
          <TextContact />
        </div>
      </div>
    </div>
  );
}

export default App;
