function log(message)
{
    console.log(`${new Date()} : ${message}`);
}

function logNoDate(message)
{
    console.log(message);
}

//Kai eksportuojame viena funkcija:
// si funkcija dar nera prideda prie index.js, todel index.js negali matyti sios funkcijos,tam reikia eksportuoti:
// module.exports.log = log;

// galima perrasyti funkcija:
// module.exports = log; // tokiu budu kai reqqireinsim is index.js, gausim pacia funkcija

//Kai eksportuojame daugiau nei viena funkcija:
module.exports.log = log;
module.exports.logNoDate = logNoDate;