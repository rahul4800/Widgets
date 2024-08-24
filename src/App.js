

import './App.css';
import Header from './Components/Header';
import Widget from './Components/Widget'; 
import { SliderProvider } from './Context';
//import SelectedWidgets from './Components/SelectedWidgets';

function App() {
  
  return (
    <>
      
      <SliderProvider>
        <div>
          <Header />
          <Widget />
          {/* <SelectedWidgets /> */}
        </div>
      </SliderProvider>
    </>
  );
}

export default App;
