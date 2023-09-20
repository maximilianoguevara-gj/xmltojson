var convert = require('xml-js');
var xml = require('fs').readFileSync('./00000001.xml', { encoding: 'utf8', flag: 'r' });
console.log(xml); 
var xmlData = convert.xml2json(xml, {
    compact: true,
    space: 4
});
console.log(xmlData);
