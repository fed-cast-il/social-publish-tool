import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'

export const LogBox = () => {
  const logs = [
    {
      id: 1,
      platform: "WhatsApp",
      campaign: "whatsapp_fedcastil",
      success: true,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
      // if the server failed add to the message also the reason.
    },
    {
      id: 2,
      platform: "Telegram",
      campaign: "telegram_channel",
      success: false,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
      // if the server failed add to the message also the reason.
    },
    {
      id: 3,
      platform: "LinkedIn",
      campaign: "linkedin_profile_nir",
      success: true,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
      // if the server failed add to the message also the reason.
    },
    {
      id: 4,
      platform: "LinkedIn",
      campaign: "linkedin_profile_adir",
      success: false,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
      // if the server failed add to the message also the reason.
    },
    {
      id: 5,
      platform: "Facebook",
      campaign: "facebook_page",
      success: true,
      successMessage: "The server succeeded.",
      failedMessage: "failed to publish the post on [platform_name]."
      // if the server failed add to the message also the reason.
    }
  ];

  return (
    <>
      <h3>Logs Panel</h3>

      {logs.map((log) =>
        <Card key={log.id} sx={{ marginBottom: '10px', backgroundColor: log.success ? 'green' : 'red' }}>
          <CardContent>
            <Typography variant="h7" component="div">
              <p>Campaign: {log.campaign}</p>
              <p>Platform: {log.platform}</p>
              <p>Status: {log.success ? 'published' : 'failed'}</p>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  )
}
