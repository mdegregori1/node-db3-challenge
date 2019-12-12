const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findSteps
};

//find()
function find() {
    return db('schemes');
}

//findById(id)
function findById(id) {
    return db('schemes').where({id}).first()
}

//findSteps(id)
function findSteps(scheme_id){
    return db('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'scheme_name', 'step_number', 'instructions')
    .where({scheme_id})
}

// function findPosts(user_id) {
//     return db('posts as p')
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.id', 'p.contents', 'u.username') 
//     .where({user_id})
// }
//resolves to newly created user
// function add(user) {
//     return db('users').insert(user)
//     .then(ids => {
//         return findById(ids[0]);
//     })

// }

// function findPosts(user_id) {
//     return db('posts as p')
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.id', 'p.contents', 'u.username') 
//     .where({user_id})
// }
// //resolves to newly created user
// function add(user) {
//     return db('users').insert(user)
//     .then(ids => {
//         return findById(ids[0]);
//     })

// }


// function update(id, changes) {
//     return db('users').where({id}).update(changes)// this(bc of knex) will show me a count. i want more info
//     .then(count => {
//         return findById(id);
//     })
// }


// function remove(id) {
//     return db('users').where({id}).del()
// }
