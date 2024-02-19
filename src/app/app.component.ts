import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet /> <p>teste</p>`
})
export class AppComponent {
  title = 'to-do-list-angular-v17';
}
