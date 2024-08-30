import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticulesModule } from './Particules/particules.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParticulesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SpicaTheme';
}
