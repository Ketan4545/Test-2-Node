const {Client, Pool} = require('pg')
// const { Client } = require('pg/lib')

var conString = "postgres://ulidjlzx:LbgHMtMu5-ISUtoR-07N_ch4aALeDvsA@castor.db.elephantsql.com/ulidjlzx"

const client = new Client(conString)

module.exports = {client, Client}