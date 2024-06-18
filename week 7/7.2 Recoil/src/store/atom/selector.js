import { selector } from "recoil";
import { countAtom } from "./count";

const Evenselector=selector({
    key:"Evenselector",
    get:({get})=>{
const count=get(countAtom);
return count%2;
    }
})
export {Evenselector}