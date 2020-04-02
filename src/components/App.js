import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component 

function App() {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      < GifListContainer />
      (This lab does not run on my computer)
      https://github.com/IdleScV/async-react-mini-project-learn
    </div>
  )
}

export default App;
