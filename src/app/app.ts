import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComingSoon } from "./coming-soon/coming-soon";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComingSoon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('habookie-app');
}
