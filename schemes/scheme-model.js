const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findSteps, 
    add,
    remove,
    update
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


// add(scheme)
function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
}

// remove(id)
function remove(id){
    return db('schemes')
    .where({id})
    .del()
}

//update(changes, id)
function update(changes,id) {
    return db('schemes')
    .where({id})
    .update(changes)
    .then(e => {
        return findById(id);
    })
}
