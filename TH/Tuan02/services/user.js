const bcrypt = require('bcrypt');

const users = [
    {id: 1,username: 'minhhoang@gmail.com',password: '$2b$10$iyQPcmp7hlYKQEm72px.QON3Tfy2xtvOkl2cfnsqHe.uNpYlJSVWK'},
    {id: 2, username: 'admin', password:'$2b$10$R9FGvY2xaVWR4.ln/zesJe8dietqaebOoK.9Ex0oP/UImqnDnTS/i'},
];


function findUserById(id){
    return users.find(u => u.id === id);

}

function findUserByUsername(username){
    return users.find(u => u.username === username);
}
function hashPassword(password){
    return bcrypt.hashSync(password, 10);

}

function verifyPassword(password,passwordHash){
    return bcrypt.compareSync(password,passwordHash);
}
module.exports ={
    findUserById,
    findUserByUsername,
    hashPassword,
    verifyPassword,
};