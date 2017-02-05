const markdownpdf = require("markdown-pdf");
const fs = require("fs");
const pathToResume = './README.md';
const pathToDocument = './resume.pdf';
const pathToCSS = './pdf.css';

let options = {
    cssPath: pathToCSS
}

 fs.createReadStream(pathToResume)
    .pipe(markdownpdf(options))
     .pipe(fs.createWriteStream(pathToDocument));
       
