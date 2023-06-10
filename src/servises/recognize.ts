import Tesseract from 'tesseract.js';

class Recognize {
    static recognize(file: any, lang: any, logger: any) {
        return Tesseract.recognize(file, lang, { logger })
            .then(({ data: { text } }) => {
                return text;
            })
    }
}

export  default  Recognize