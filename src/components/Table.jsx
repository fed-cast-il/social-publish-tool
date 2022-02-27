import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import data from './data.json';

const multiplePublishButtons = (params) => {
  return (
    <>
       <Button
        variant="outlined"
        color="primary"
        size="small"
        style = {{ marginRight: "7px" }}

        onClick={() => {
          // parseName(params.columns.asd)
        }}
      >
        Delete
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        style = {{ marginRight: "7px" }}

        onClick={() => {
          // parseName(params.columns.asd)
        }}
      >
       Edit
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"

        onClick={() => {
          // parseName(params.columns.asd)
        }}
      >
        Publish
      </Button> 
</>
  )
}

const columns = [
  { field: 'id', headerName: 'ID', width: 50, },
  { field: 'platform', headerName: 'Platform', width: 130 },
  { field: 'destination', headerName: 'Destination', width: 160 },
  { field: 'source', headerName: 'Source', width: 90 },
  { field: 'medium', headerName: 'Medium', width: 90 },
  { field: 'campaign', headerName: 'Campaign', width: 140 },
  { field: 'asd', headerName: 'Buttons', width: 270, renderCell: multiplePublishButtons, disableClickEventBubbling: true },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, platform: 'Logo', destination: 'FedCastIL', source: 'facebook', medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 2, platform: 'Logo', destination: 'Cersei', source: 42, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 3, platform: 'Logo', destination: 'Jaime', source: 45, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 4, platform: 'Logo', destination: 'Arya', source: 16, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 5, platform: 'Logo', destination: 'Daenerys', source: 25, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 6, platform: 'Logo', destination: 'Ally', source: 150, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 7, platform: 'Logo', destination: 'Ferrara', source: 44, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 8, platform: 'Logo', destination: 'Rossini', source: 36, medium: 'social', campaign: 'facebook-fedcastil' },
  { id: 9, platform: 'Logo', destination: 'Harvey', source: 65, medium: 'social', campaign: 'facebook-fedcastil' },
];



export default function Table() {
  return (
    <div style={{ height: 590, width: '95%', marginBottom: 10 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}