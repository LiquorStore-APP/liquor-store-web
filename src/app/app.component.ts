import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomNavBarComponent} from './shared/custom-nav-bar/custom-nav-bar.component';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'liquid-store-web';
}
