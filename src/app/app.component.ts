import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CharacterListComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dragonBall';
}
