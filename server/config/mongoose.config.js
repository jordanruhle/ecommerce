const mongoose =  require("mongoose");

const DB = 'productsDB'

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`Established a connection to the ${DB} database`))
        .catch(err => console.log(`Something went wrong when connecting to the ${DB} database` , err));
}