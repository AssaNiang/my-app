type TodoStatus = 'done'|'inProgress'|'todo'|'urgent';

export interface Todo {
    task:string;
    status:TodoStatus;
}
export const TODO:Todo[] = [
    {
        task:"faire la vaisselle",
        status:"todo"
    },
    {
        task:"appeler la banque",
        status:"urgent"
    }
    ,
    {
        task:"Préparer le cours Angular",
        status:"inProgress"
    },
    {
        task:"Recap JS",
        status:"done"
    }
    
];