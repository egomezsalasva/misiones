import React from 'react';

function App() {
  return (
    <div className="App">

      <div className="background"/>
      <div className="background02"/>

      <div className="contentContainer">

        <div className="songContainer"> 
          <div className="title">Misiones 01</div>
          <div className="audioWrapper">
            <audio  src="./audio/Misiones01.mp3" controls/>
          </div>
        </div>

        <div className="songContainer">
          <div className="title">Misiones 02</div>
          <div className="audioWrapper">
            <audio  src="./audio/Misiones02.mp3" controls/>
          </div>
        </div>

      </div>

      
      
    </div>
  );
}

export default App;
