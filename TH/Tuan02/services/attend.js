const bcrypt = require('bcrypt');

const attendlist = [
    {id:1, name: 'minhhoang', email:'minhhoang@gmail.com', phonenumber : '012345678', status : true },
   // {id: 2,email: '1760070', displayName:'Minh Hoang',password: '$2b$10$t7MhTIi5wWoSrV/nFkvX9O50RP5T4P8vVEiPfiAST0SYxvduXqEeW'},
];

function findAll(){
    return attendlist.filter(t => !t.done);
};
function add(name, email,phonenumber){
    const attend = {id: attendlist.length + 1,name, email, phonenumber, status: true};
    attendlist.push(attend);
    return attend;
}

module.exports ={
    findAll,
    add,
};