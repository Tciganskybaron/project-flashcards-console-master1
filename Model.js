const fs = require("fs");
class Model {
  constructor() {

  }
  getFilesAllname(catalog) {
    return new Promise((resolve, reject) => {
      fs.readdir(catalog, (err, data) => {
        try {
          resolve(data);
        } catch (err) {
          console.log(err.massage);
          reject(err);
        }
      });
    });
  }
}

module.exports = Model
// k;klerpgksepmgpkers
