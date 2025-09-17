/* 
1. Use the inquirer npm package to get user input.

2. Use the qr-image npm package to turn the user entered URL into a QR code image.

3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';



inquirer.prompt([
    {
        type: 'input', // Entrada de texto
        name: 'url',
        message: 'Type in your text or Url: '
    }
])

.then((answer) => {
    const qr_png = qr.image(answer.url, {type: 'png'}); //type define o formato de saida
    qr_png.pipe(fs.createWriteStream('your_qrcode.png'));
    console.log('Your Qr code has been saved as your_qrcode.png');

    // save the input from the user in user_input.txt
    fs.appendFile('user_input.txt', answer.url, (err) => {
    if(err) throw err;
    console.log('The data has been saved in user_input.txt');
});
})

.catch((err) => console.error(err));


