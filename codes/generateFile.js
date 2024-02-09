const path = require('path');

const dircodes = path.join(__dirname."codes");

if(!fstat.existsSync(dircodes)){
    fstat.mkdirSync(dircodes,{rescusive:true});
    
}
const generateFile = async(format,code) =>{

};
module.exports = {
    generateFile,
};