const GoogleSpreadSheet = require('google-spreadsheet');
const credentials = require('./credentials/google.json');
const { promisify } = require('util');

const sheetId = '1UvlDOQVhyn875xAYPaEkd9JGHwGJ24iL7kZe0RqL3Bo';
const sheet = new GoogleSpreadSheet(sheetId);

const accessSheet = async() => {
    try {
        await promisify(sheet.useServiceAccountAuth)(credentials);
        const info = await promisify(sheet.getInfo)()
        const worksheet = info.worksheets[0];
        //Insert data
        //await promisify(worksheet.addRow)({marca: 'Ferrari', veiculo: 'Enzo'})
        
        //Get data
        const rows = await promisify(worksheet.getRows)({
            // offset:2 //usar para paginação
            //query: 'marca = VW'
        })
        console.log(rows)
        rows.forEach(row => {
            console.log(row.marca, row.veiculo)
            //row.del() //enviar marca e veiculo para deletar
        });
    } catch (error) {
        console.log(error)
    }
}

accessSheet();
