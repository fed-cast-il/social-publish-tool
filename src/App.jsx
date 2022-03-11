import './App.css'
import PlatformsTable from './components/PlatformsTable';
import InputsBox from './components/InputsBox';
import { Button, Grid } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import LogsNotifications from './components/LogsNotifications';

function App() {

  return (
    <div className="App">
      <h1>FedTool</h1>

      <InputsBox />
      <PlatformsTable />
      <Button variant="contained" style={{ marginRight: "10px" }}>Add Destination</Button>
      <Button variant="contained">Publish Selected</Button>

      <SnackbarProvider anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
        maxSnack={5}>
        <LogsNotifications />
      </SnackbarProvider>
    </div>
  )
}

export default App
