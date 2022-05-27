
import { Component, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from 'src/app/pages/models/column.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  listaTarefa: Column[] = [];
  nome: any;

 constructor(


  ) { }

  ngOnInit(): void{
    this.listaTarefa = [

    ]
  }
  adicionar(nomeTarefa: string){
    if(nomeTarefa.trim().length == 0){
      return;
    }
    const tarefaEncontrada = this.listaTarefa.find(item => item.name.toLowerCase() == nomeTarefa.toLowerCase());
    if (!tarefaEncontrada){
      this.listaTarefa.push({id: this.listaTarefa.length, name: nomeTarefa});

     (document.getElementById("inputTarefa")as HTMLInputElement).innerText = ' ';


    }

  }

  excluir(id: number ){
    this.listaTarefa = this.listaTarefa.filter(item => (item.id != id));
  }
  drop(event: CdkDragDrop<Column[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
