const fs = require('fs');


// if(!fs.existsSync('./docs')){
//     fs.mkdir('./docs', (err)=>{
//         console.log(err);
//     })
// }else{
//     fs.rmdir('./docs', (err)=>{
//         console.log(err);
//     })
// }


// if(!fs.existsSync('./docs/fruit.txt')){
//     fs.writeFile('./docs/fruit.txt', 'mango', (err)=>{
//         if(err){
//             console.log(err);
//         }
//     })
// }else{
//     fs.unlink('./docs/fruit.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//     })
// }