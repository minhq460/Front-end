var readlineSync = require('readline-sync');
var fs = require('fs');
var data = fs.readFileSync('./data.json', { encoding: 'utf8' });
let file = JSON.parse(data);
// console.log(file.newsd.newTitle);
for (var i of file.newsd) {
    console.log(i.newTitle);
    console.log("-----------------");
}



// fs.readFile('links.json', (err, data) => {
//     if (err) throw err;

//     console.log(student);
// });


// var img = {
//     "name": "quỳnh",
//     "age": 24,
//     "gender": "male",
//     "department": "History",
//     "car": "Suzuki"
// };

// fs.readFile('data.json', 'utf8', function(err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         const file = JSON.parse(data);
//         file.push(img);


//         const json = JSON.stringify(file);

//         fs.writeFile('data.json', json, 'utf8', function(err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 //Everything went OK!
//             }
//         });
//     }

// });