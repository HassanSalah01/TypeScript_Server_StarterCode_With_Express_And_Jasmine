import axios from "axios";

export const  getData = async ()=>{
    const fff  = await axios('https://jsonplaceholder.typicode.com/todos/1');
    const data  = await fff.data;
    return data.userId;
}

