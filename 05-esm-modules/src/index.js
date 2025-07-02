//import connectToDatabase from "./utils/database.mjs"
//ARQUIVOS .MJS SERVE PARA DISTINGUIR QUE SÃO ARQUIVOS PARA SEREM EXPORTADOS
import * as database from './utils/database.mjs'
import { importAgain } from './test/test.mjs'
//import {key} from './utils/api.js'
import * as keyDB from './utils/api.js'


database.databaseType
keyDB.showKey()
// key.permission
// key.value
database.sayHello("Robert")
database.connectToDatabase("my-database")
database.disconnectDatabase()
importAgain("so good bro")