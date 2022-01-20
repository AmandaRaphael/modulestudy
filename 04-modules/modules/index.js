// import { sayHi, sayBye } from "./module1.js";
import * as say from "./module1.js";//imports everything in module1
import { user } from "./module2.js";//imports only user {}its not an object

//sayHi(user)

say.sayHi(user);//as say is object from line2
say.sayBye(user)