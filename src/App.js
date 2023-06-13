import './App.css';
import ContentHeader from './componentes/ContentHeader';
import TextAbilitie from './componentes/SectionAbilitie/TextAbilitie';
import TextAboutme from './componentes/SectionAboutMe/TextAboutme';
import TextProyect from './componentes/SectionProyects/TextProyect';
import TextContact from './componentes/SectionContact/TextContact';
import Navbars from './componentes/navBar/Navbars';


window.addEventListener("load", () => {
  const app = document.querySelector('.app');
  app.style.filter = "blur(0)";
})


function App() {
  return (
    <div>
      <Navbars />
      <div className="app">
        <div id="home">
          <div id="content-imgHead">
            <ContentHeader />
          </div>
        </div>
        <TextAbilitie />

        <TextAboutme />

        <TextProyect />

        <TextContact />
      </div>
    </div>
  );
}

export default App;
