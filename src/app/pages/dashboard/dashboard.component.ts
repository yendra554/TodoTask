import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  taskObje:Todo = new Todo();
  taskArr:Todo[] =[];
  addTaskData: string ='';
  editTaskData: string ='';
  constructor(private api: TaskService){

  }
  ngOnInit(): void {
    this.addTaskData = '';
    this.editTaskData = '';
    this.taskObje = new Todo();
    this.taskArr=[];
     this.getAllTask();
  }

  addTask(){
    this.taskObje.task = this.addTaskData;
    this.api.addTask(this.taskObje).subscribe(res =>{
      this.ngOnInit();
      this.addTaskData =''
    }, err =>
    {
      alert(err);
    })
  }

  getAllTask(){
    this.api.getAllTask().subscribe(res =>{
     this.taskArr = res;
    }, err =>{
      alert('Unable to find Task')
    })
  }

  editTask(){
    this.taskObje.task = this.editTaskData;
    this.api.editTask(this.taskObje).subscribe(res =>{
      this.ngOnInit();
    },
    err=> {
      alert('Unable to Update Task');
    })
  }

  deleteTask(task:Todo){
    this.api.deleteTask(task).subscribe(res =>{
      this.ngOnInit();
    },
    err =>{
      alert('Failed to Delete Task')
    })

  }

  callEdit(task: Todo){
   this.taskObje =task;
   this.editTaskData = task.task;
  }
}
