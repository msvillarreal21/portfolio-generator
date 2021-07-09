const fs = require('fs');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                // return out of the function here to make srue the Promise doesn't accidently exevute the resolve() function as well
                return;
            }

    // if everything went well, reslove the Promise and send teh successful datat to the `.then()` method
    reslove ({
        ok: true,
        message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            reslove({
                ok: true,
                message:'Success!'
            });
        });
    });
}

module.exports = { writeFile, copyFile };


