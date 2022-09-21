const sqlite = require("sqlite3").verbose()

const db = new sqlite.Database("./practice.db", sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err)
    console.log("database connected successfully")
})


// SQL COMMANDS

const allPuppies = `select * from puppies`
const puppyWithId5 = `select * from puppies where id = 5`
const microchippedPuppies = `select name, weight_lbs, microchipped from puppies where microchipped = 1`
const puppiesWithWeightGreaterThan25 = `select * from puppies where weight_lbs > 25`
const microchippedPuppiesWithWeightGreaterThan15 = `select * from puppies where microchipped = 1 AND weight_lbs > 15`

db.all(sql,[],  (err, row) => {
    row.forEach(e=> {
        console.log(e)
    })
})
