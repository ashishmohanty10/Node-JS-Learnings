import {URL} from "url"

const myURL = new URL("https://nodejs.org/docs/latest/api/url.html")
console.log(myURL.host)
console.log(myURL.href)
console.log(myURL.protocol)