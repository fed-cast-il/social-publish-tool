import { Button } from '@mui/material';
import React from 'react'
import { useSnackbar, withSnackbar } from 'notistack';

const LogsNotifications = () => {
  const { enqueueSnackbar } = useSnackbar();

  const logs = [
    {
      id: 1,
      platform: "WhatsApp",
      campaign: "whatsapp_fedcastil",
      success: true,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
    },
    {
      id: 2,
      platform: "Telegram",
      campaign: "telegram_channel",
      success: false,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
    },
    {
      id: 3,
      platform: "LinkedIn",
      campaign: "linkedin_profile_nir",
      success: true,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
    },
    {
      id: 4,
      platform: "LinkedIn",
      campaign: "linkedin_profile_adir",
      success: false,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
    },
    {
      id: 5,
      platform: "Facebook",
      campaign: "facebook_page",
      success: true,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
    }
  ];

  const handleClick = () => {
    logs.forEach((log) => enqueueSnackbar(`Campaign ${log.campaign}`, {
      variant: log.success ? 'success' : 'error',
    }))
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Test logs notificator
      </Button>
    </>

  )
}

export default withSnackbar(LogsNotifications);