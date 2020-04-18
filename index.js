const GoogleSpreadSheet = require('google-spreadsheet');
const credentials = require('./credentials/google.json');

const sheetId = '1UvlDOQVhyn875xAYPaEkd9JGHwGJ24iL7kZe0RqL3Bo';
const sheet = new GoogleSpreadSheet(sheetId);

sheet.useServiceAccountAuth(credentials, err =>{
    sheet.getInfo((err, info) => {
        console.log(info);
    })
})
