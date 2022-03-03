import { DataGrid } from '@mui/x-data-grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import { PlatformActions } from './PlatformActions';

const FacebookLogo = () => {
  return (
    <FacebookIcon color="primary" fontSize="large" />
  )
}

const rows = [
  { id: 1, platform: "linkedinLogo", destination: "LinkedinLink", source: "linkedin", medium: "social", campaign: "linkedin_profile_nir" },
  { id: 2, platform: "linkedinLogo", destination: "asd", source: "whatsapp", medium: "social", campaign: "whatsapp_fedcastil" },
  { id: 3, platform: "linkedinLogo", destination: "asd", source: "whatsapp", medium: "social", campaign: "whatsapp_angular" },
  { id: 4, platform: "facebookLogo", destination: "asd", source: "whatsapp", medium: "social", campaign: "whatsapp_react" },
  { id: 5, platform: "Logo", destination: "asd", source: "facebook", medium: "social", campaign: "facebook-fedcastil" },
  { id: 6, platform: "Logo", destination: "asd", source: 150, medium: "social", campaign: "facebook-fedcastil" },
  { id: 7, platform: "Logo", destination: "asd", source: 44, medium: "social", campaign: "facebook-fedcastil" },
  { id: 8, platform: "Logo", destination: "asd", source: 36, medium: "social", campaign: "facebook-fedcastil" },
  { id: 9, platform: "Logo", destination: "asd", source: 65, medium: "social", campaign: "facebook-fedcastil" }
]

const columns = [
  { field: 'id', headerName: 'ID', width: 50, },
  { field: 'platform', headerName: 'Platform', width: 130, renderCell: FacebookLogo },
  { field: 'destination', headerName: 'Destination', width: 160 },
  { field: 'source', headerName: 'Source', width: 90 },
  { field: 'medium', headerName: 'Medium', width: 90 },
  { field: 'campaign', headerName: 'Campaign', width: 140 },
  { field: 'asd', headerName: 'Buttons', width: 270, renderCell: PlatformActions, disableClickEventBubbling: true },

  {
    field: 'URL',
    headerName: 'URL Link',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 700,
    valueGetter: (params) =>
      `www.linkfrominput.com/?utm_source=${params.row.source}&utm_medium=${params.row.medium}&utm_campaign=${params.row.campaign}`,
  },
];

export default function PlatformsTable() {

  return (
    <div style={{ height: 590, width: '100%', marginBottom: 10 }}>
      <DataGrid
        id="idTable"
        rows={rows}
        columns={columns}
        pageSize={9}
        checkboxSelection
        disableSelectionOnClick
      />

    </div>
  );
}