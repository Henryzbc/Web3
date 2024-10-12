import mysql from "./crowdfunding_db.js";

mysql.connect((err) => {
    if (err) {
        throw err;
    }
});

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const cors = require('cors')


const app = express();
app.use(express.json())
app.use(cors())

app.get('/Home', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    mysql.query('SELECT * FROM fundraiser', (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});

app.get('/SearchFundraisers', (req, res) => {
    const value = req.query;
    console.log(value);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (value.ORGANIZER) {
        mysql.query(`SELECT * FROM fundraiser WHERE ORGANIZER like "${value.ORGANIZER}"`, (queryErr, queryResult) => {
            if (queryErr) {
                console.log(queryErr);
            } else {
                res.end(JSON.stringify(queryResult));
            }
        });
    } else {
        mysql.query(`SELECT * FROM fundraiser WHERE  ACTIVE like "${value.Active}"`, (queryErr, queryResult) => {
            if (queryErr) {
                console.log(queryErr);
            } else {
                res.end(JSON.stringify(queryResult));
            }
        });
    }
});

// search active Fundraisers
app.get('/SearchActiveFundraisers', (req, res) => {
    const value = req.query.data;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mysql.query(`SELECT * FROM fundraiser WHERE ACTIVE like "${value}"`, (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});

app.get('/Fundraiser', (req, res) => {
    const id = req.query.id;
    res.setHeader('Access-Control-Allow-Origin', '*');
    mysql.query('SELECT * FROM fundraiser WHERE FUNDRAISER_ID = ' + id, (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});

//query all category
app.get('/category', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    mysql.query('SELECT * FROM category', (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});



// new
//the list of donations
app.get("/getDonations", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    mysql.query('SELECT * from `donation` order by DATE DESC', (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});
//the list of donations by ByFUNDRAISERID
app.get("/getDonationsByFUNDRAISERID", (req, res) => {
    let param = req.query
    res.setHeader('Access-Control-Allow-Origin', '*');
    mysql.query(`SELECT * from donation WHERE FUNDRAISER_ID = ${param.FUNDRAISER_ID} order by DATE DESC`, (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});
//add donations
app.post("/addDonations", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let param = req.body
    console.log(param);
    mysql.query('INSERT INTO donation(`DONATION_ID`,`DATE`,`AMOUNT`,`GIVER`,`FUNDRAISER_ID`) VALUES(?,?,?,?,?)', [new Date().getTime(), param.DATE, param.AMOUNT, param.name, param.FUNDRAISER_ID], (queryErr, queryResult) => {
        res.send({
            res: 'success！'
        });
    });
});
// delete fundraiser
app.delete('/deleteFundraiser', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let param = req.query
    mysql.query('delete from fundraiser where FUNDRAISER_ID = ?', [param.FUNDRAISER_ID], (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});
// add fundraiser
app.post('/addFundraiser', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let param = req.body
    mysql.query('INSERT INTO `fundraiser`(`FUNDRAISER_ID`,`ORGANIZER`,`CAPTION`,`TARGET_FUNDING`,`CURRENT_FUNDING`,`CITY`,`ACTIVE`,`CATEGORY_ID`) VALUES(?,?,?,?,?,?,?,?)',
        [param.FUNDRAISER_ID, param.ORGANIZER, param.CAPTION, param.TARGET_FUNDING, param.CURRENT_FUNDING, param.CITY, param.ACTIVE, param.CATEGORY_ID], (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});
// update fundraiser
app.put('/updateFundraiser', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let param = req.body
    mysql.query('UPDATE fundraiser SET ? WHERE ID = ?',[param, param.ID], (queryErr, queryResult) => {
        if (queryErr) {
            console.log(queryErr);
        } else {
            res.end(JSON.stringify(queryResult));
        }
    });
});
app.listen(4000, () => {
    console.log('Server is running on port 4000.');
});