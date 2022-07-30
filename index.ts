import axios from "axios";  

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface User {
    id:number;
    title:string;
    completed:boolean;
}

const logger = (id:number,title:string,completed:boolean) => {
    console.log(`
        my id: ${id}
        my title: ${title}
        my completed: ${completed}
    `);
    
}

axios.get(url)
.then((res)=>{
    const todo = res.data as User;
    const id = todo.id;
    const completed = todo.completed;
    const title = todo.title; 
    
    logger(id,title,completed)
    

})