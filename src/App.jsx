import './App.css'
import Table from './components/Table';
import TextArea from './components/TextArea';
import Button from '@mui/material/Button';
import Collapsible from 'react-collapsible';

function App() {

  return (
    <div className="App">
      <h1>FedTool</h1>
      <div className="container">
        <div className="sectionOne">
          <TextArea />
          <Table />
          <Button variant="contained" style={{ marginRight: "10px"}}>Add Destination</Button>
          <Button variant="contained">Publish Selected</Button>
        </div>
        <div className="sectionTwo">
          <h3>Logs Panel</h3>
          <Collapsible trigger="Show logs" triggerWhenOpen="Close" transitionTime="100">
            <p>
              This is the collapsible content.
              It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component.
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}

export default App
