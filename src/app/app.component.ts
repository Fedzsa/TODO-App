import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('searchInput', [
      state('inactive', style({
        width: '200px'
      })),
      state('active', style({
        width: '100%'
      })),
      transition('inactive <=> *', animate('200ms'))
    ])
  ]
})
export class AppComponent {
  title = 'TODO App';
  searchInputFocus = 'inactive';

  constructor(private router: Router) {}

  onFocus(): void {
    this.searchInputFocus = 'active';
  }

  onFocusOut(): void {
    this.searchInputFocus = 'inactive';
  }

  createMsg(): void {
    this.router.navigateByUrl('/edit');
  }
}
