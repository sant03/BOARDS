export class TaskServices{

    newTask : string = ''

    todoTasks: any[] = [
        {
            img: '../../assets/Astro Gaming Was Acquired By Logitech But Will Still Make Peripherals.jpg',
            name: 'Design a logo',
            description: 'lorem ipsum',
            date: '13/10/2023',
            users: []
        }
    ]
    doingTasks: any[] = [
        {
            img: '../../assets/Paisaje de montañas otoñales con siluetas de árboles y río al atardecer_ _ Vector Premium.jpg',
            name: 'Design a logo',
            description: 'lorem ipsum',
            date: '13/10/2023',
            users: []
        },
        {
            img: '../../assets/–The Chosen 1–––––––––.jpg',
            name: 'Design a Web page',
            description: 'lorem ipsum',
            date: '13/10/2023',
            users: []
        }
    ]
    underReviewTasks: any[] = [
        
    ]
    doneTasks: any[] = [
        {
            img: '../../assets/taskImg.png',
            name: 'Make a new Post',
            description: 'lorem ipsum',
            date: '13/10/2023',
            users: []
        }
    ]

    addTask(task: object){
        if(this.newTask == 'todo'){
            this.todoTasks.push(task)
        }else if(this.newTask == 'doing'){
            this.doingTasks.push(task)
        }else if(this.newTask == 'underReview'){
            this.underReviewTasks.push(task)
        }else if(this.newTask == 'done'){
            this.doneTasks.push(task)
        }
    }

    deleteTask(task: object, typeTask: string){
        if(typeTask == 'todo'){
            let index = this.todoTasks.indexOf(task);
            this.todoTasks.splice(index)
        }else if(typeTask == 'doing'){
            let index = this.doingTasks.indexOf(task);
            this.doingTasks.splice(index)
        }else if(typeTask == 'underReview'){
            let index = this.underReviewTasks.indexOf(task);
            this.underReviewTasks.splice(index)
        }else if(typeTask == 'done'){
            let index = this.doneTasks.indexOf(task);
            this.doneTasks.splice(index)
        }
    }

    updateTask(task: object, typeTask: string){
        if(typeTask == 'todo'){
            let index = this.todoTasks.indexOf(task);
            console.log(this.todoTasks[index])
            this.todoTasks[index] = task
            console.log(this.todoTasks[index])
        }else if(typeTask == 'doing'){
            let index = this.doingTasks.indexOf(task);
            this.doingTasks[index] = task
        }else if(typeTask == 'underReview'){
            let index = this.underReviewTasks.indexOf(task);
            this.underReviewTasks[index] = task
        }else if(typeTask == 'done'){
            let index = this.doneTasks.indexOf(task);
            console.log(index, this.doneTasks[index])
            this.doneTasks[index] = task
            console.log(this.doneTasks[index])
        }
    }

    getTodoTasks(){
        return this.todoTasks
    }

    getDoingTasks(){
        return this.doingTasks
    }

    getUnderReviewTasks(){
        return this.underReviewTasks
    }

    getDoneTasks(){
        return this.doneTasks
    }

}