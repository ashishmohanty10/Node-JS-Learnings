
import * as fs from 'fs'

fs.mkdir("file path",(error)=>{
    if(error) throw error;
    console.log("directory created")
})
