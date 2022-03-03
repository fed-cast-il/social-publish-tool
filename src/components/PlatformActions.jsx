import React from 'react'
import { Button } from '@mui/material';

export const PlatformActions = () => {
  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        sx={{ mr: 1 }}

      >
        Delete
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        sx={{ mr: 1 }}

      >
        Edit
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"

      >
        Publish
      </Button>
    </>
  )
}
