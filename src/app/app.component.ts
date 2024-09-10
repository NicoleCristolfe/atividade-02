import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atividade-2';
  value = '';
  recebe: any = [];
  desabilitado: any = [];

  
  removeItem(item: string): void {
    const remove = this.recebe.indexOf(item);
    if (remove > -1) {
      this.recebe.splice(remove, 1);
    }
  }

  addItem(): void {
    if (!this.value) {
      return;
    }
    this.recebe.push(this.value);
    this.value = '';
  }
}
