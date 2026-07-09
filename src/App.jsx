
import './App.css'
import './styles/global.css'
import Button1 from './components/Button_1/Button1'
import Button2 from './components/Button_2/Button2'
import Button3 from './components/Button_3/Button3'
import Footer1 from './components/Footer_1/Footer1'
import Footer2 from './components/Footer_2/Footer2'
import Footer3 from './components/Footer_3/Footer3'
import Img1 from './components/Img_1/Img1'
import Img2 from './components/Img_2/Img2'
import Img3 from './components/Img_3/Img3'
import Link1 from './components/Link_1/Link1'
import Link2 from './components/Link_2/Link2'
import Link3 from './components/Link_3/Link3'
import NavBar1 from './components/NavBar_1/NavBar1'
import NavBar2 from './components/NavBar_2/NavBar2'
import NavBar3 from './components/NavBar_3/NavBar3'
import Text1 from './components/Text_1/Text1'
import Text2 from './components/Text_2/Text2'
import Text3 from './components/Text_3/Text3'
import Title1 from './components/Title_1/Title1'
import Title2 from './components/Title_2/Title2'
import Title3 from './components/Title_3/Title3'

const imageA = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" fill="#007BFF"/><text x="50%" y="54%" text-anchor="middle" font-size="72" font-family="Arial" fill="white">A</text></svg>')
const imageB = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" fill="#2EAF62"/><text x="50%" y="54%" text-anchor="middle" font-size="72" font-family="Arial" fill="white">B</text></svg>')
const imageC = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" fill="#F6B73C"/><text x="50%" y="54%" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text></svg>')

const navbarProps = [
  { brand_text: 'Nav 1', link1_text: 'Home', link2_text: 'About', link3_text: 'Contact' },
  { brand_text: 'Nav 2', link1_text: 'Work', link2_text: 'Team', link3_text: 'Blog' },
  { brand_text: 'Nav 3', link1_text: 'Docs', link2_text: 'UI', link3_text: 'Help' },
]

function App() {
  return (
    <main className="library-page">
      <section className="library-hero">
        <Title1 title_text="Libreria simple de componentes" />
        <Text1 paragraph_text="Solo estructura base, una carpeta por componente y ejemplos directos." />
        <div className="hero-actions">
          <Button1 text_button="Boton 1" />
          <Button2 text_button="Boton 2" />
          <Button3 text_button="Boton 3" />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Botones" />
        <div className="grid-4">
          <Button1 text_button="Boton 1" />
          <Button2 text_button="Boton 2" />
          <Button3 text_button="Boton 3" />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Textos" />
        <div className="grid-4">
          <Text1 paragraph_text="Texto 1" />
          <Text2 paragraph_text="Texto 2" />
          <Text3 paragraph_text="Texto 3" />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Titulos" />
        <div className="grid-4">
          <Title1 title_text="Titulo 1" />
          <Title2 title_text="Titulo 2" />
          <Title3 title_text="Titulo 3" />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Links" />
        <div className="grid-4">
          <Link1 link_text="Link 1" link_href="#" />
          <Link2 link_text="Link 2" link_href="#" />
          <Link3 link_text="Link 3" link_href="#" />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Imagenes" />
        <div className="grid-4">
          <Img1 image_src={imageA} image_alt="Imagen 1" />
          <Img2 image_src={imageB} image_alt="Imagen 2" />
          <Img3 image_src={imageC} image_alt="Imagen 3" />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Navbars" />
        <div className="grid-4">
          <NavBar1 {...navbarProps[0]} />
          <NavBar2 {...navbarProps[1]} />
          <NavBar3 {...navbarProps[2]} />
        </div>
      </section>

      <section className="library-section">
        <Title2 title_text="Footers" />
        <div className="grid-4">
          <Footer1 text="Footer 1" link_text="Link" />
          <Footer2 text="Footer 2" />
          <Footer3 left_text="Left" center_text="Center" right_text="Right" />
        </div>
      </section>
    </main>
  )
}

export default App
