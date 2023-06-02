import { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

class App extends Component {
render () {
  return(
    <div className="App">
      <Header />
      <NavBar />
      <div>
          <ItemListContainer greeting="Bienvenido a la Tienda en línea" />
      </div>
    </div>
  )
}
}

export default App
