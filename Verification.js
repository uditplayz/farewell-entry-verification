gapi.load("client:auth2", function() {
  gapi.auth2.init({
    client_id: "437863355648-h0fnm8fos0bigqm433fdc430uihgivim.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/spreadsheets"
  });
});

function appendData(name) {
  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: "1Ab42P2jsSPvqkm7Khdr65HdnqkoagV-VMpigPRIAeRU",
    range: "Sheet1",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    resource: {
      values: [[new Date(), name, userIP]]
    }
  });
}

function logData(name) {
  gapi.client.load("sheets", "v4", function() {
    gapi.auth2.getAuthInstance().signIn().then(function() {
      appendData(name);
    });
  });
}
