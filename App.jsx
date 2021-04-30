import React from 'react'
import Bienvenida from './components/Bienvenida'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <h1>Propiedades de los componentes</h1>
      <Bienvenida nombre="Manuel"/>
      <Bienvenida nombre="Victoria"/>
      <Bienvenida nombre="Jose"/>
      <Bienvenida nombre="Francisco"/>

    <hr/>
    <div className="row">
      <div className="col">
        <Cards
          imagen="https://cdn.generadormemes.com/media/templates/xgato_llorando.jpg.pagespeed.ic.plantilla-memes.jpg"
          titulo="Titulo card 1"
            texto="Texto de la Card 1 "
            />
      </div>
      <div className="col">
        <Cards
          imagen="https://cdn.generadormemes.com/media/templates/xgato_llorando.jpg.pagespeed.ic.plantilla-memes.jpg"
          titulo="Titulo card 2"
            texto="Texto de la Card 2 "
            />
      </div>
      <div className="col">
        <Cards
          imagen="https://cdn.generadormemes.com/media/templates/xgato_llorando.jpg.pagespeed.ic.plantilla-memes.jpg"
          titulo="Titulo card 3"
            texto="Texto de la Card 3 "
            />
      </div>
    </div>
  </div>
  );
}

export default App;