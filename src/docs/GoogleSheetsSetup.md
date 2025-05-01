
# Google Sheets Integration Guide

## Overview
This document explains how to set up a secure Google Sheets integration for your waitlist form.

## Prerequisites
1. Google Cloud service account (already created)
2. Google Sheet (already created and shared with the service account)
3. Service account key (JSON file)

## Implementation Options

### Option 1: Set up a simple API server (recommended)
Create a simple Node.js server to handle form submissions securely:

```javascript
// server.js
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Function to authenticate with Google Sheets API
async function authenticateGoogle() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/your-service-account-key.json', // Your service account key
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return auth.getClient();
}

// Function to add data to Google Sheets
async function addToSheet(data) {
  const auth = await authenticateGoogle();
  const sheets = google.sheets({ version: 'v4', auth });
  
  const spreadsheetId = 'YOUR_SPREADSHEET_ID';
  const range = 'Sheet1!A:D'; // Adjust based on your sheet's structure
  
  const values = [
    [data.name, data.email, data.phone || '', new Date().toISOString()]
  ];
  
  const resource = { values };
  
  return sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource,
  });
}

// Endpoint to handle form submissions
app.post('/api/save-lead', async (req, res) => {
  try {
    const data = req.body;
    await addToSheet(data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving to sheet:', error);
    res.status(500).json({ success: false, error: 'Failed to save data' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Option 2: Use a serverless function (Netlify, Vercel, etc.)
Similar to Option 1, but deployed as a serverless function.

### Option 3: Use a third-party service
Services like Zapier, Make (formerly Integromat), or Pipedream can connect your form to Google Sheets without writing code.

## Integration Steps

1. **Set up your server:**
   - Create a simple Express.js server as shown above
   - Store your service account key securely
   - Deploy to a service like Heroku, Render, or Railway

2. **Update the client-side code:**
   - Modify the `googleSheetsService.ts` file to point to your API
   - Uncomment and update the fetch request to your API endpoint

3. **Testing:**
   - Submit a test form entry
   - Verify the data appears in your Google Sheet

## Security Considerations
- NEVER include the service account key in your client-side code
- Use environment variables to store sensitive information
- Set up CORS properly to restrict access to your API
