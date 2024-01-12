import * as fs from "fs/promises";

// creating directory / folder with node js

try{
    await fs.mkdir('C:\\Users\\KIIT\\OneDrive\\Documents\\HTML CSS\\NodeJS-HunXDev\\folder1')
    console.log('folder created')
}catch(error){
    console.log(error)
}

// READ FOLDER CONTENT
try{
    const files = await fs.readdir('C:\\Users\\KIIT\\OneDrive\\Documents\\HTML CSS\\NodeJS-HunXDev\\folder1')
    for (const file of files){
        console.log(file)
    }
    console.log('folder created')
}catch(error){
    console.log(error)
}

// REMOVE FOLDER BUT THE FOLDER MUST BE EMPTY TO DELETE IT
try{
    await fs.rmdir('C:\\Users\\KIIT\\OneDrive\\Documents\\HTML CSS\\NodeJS-HunXDev\\folder1')

}catch(error){
    console.log(error)
}

// CREATE AND WRITE A FILE but the if u change the message it will
// overwrite the previous comment
try{
    await fs.writeFile('README.md','HELLO Ashish ')

}catch(error){
    console.log(error)
}

// Reading a file but as u run it will give a buffer output

try{
    const data = await fs.readFile('README.md')
    console.log(data)

}catch(error){
    console.log(error)
}

// to fix this we need to use utf-8
try{
    const data = await fs.readFile('README.md',"utf-8")
    console.log(data)

}catch(error){
    console.log(error)
}

// APPEND DATA TO PREVIOUSLY CREATED FILE
try {
  await fs.appendFile("README.md", "ARE U LEARNING NODE JS ");
  console.log(data);
} catch (error) {
  console.log(error);
}

// COPY FILE
try {
  await fs.copyFile("README.md","info.md")
  console.log(data);
} catch (error) {
  console.log(error);
}

// GET FILE INFO

try {
  const info = await fs.stat("info.md");
//   console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}
