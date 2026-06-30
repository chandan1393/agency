import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { PageLoaderComponent } from './components/page-loader/page-loader';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
import { CursorGlowComponent } from './components/cursor-glow/cursor-glow';

/**
 * App shell. Global chrome (loader, cursor glow, navbar, footer, back-to-top)
 * persists across routes; page content is rendered through the router outlet.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PageLoaderComponent,
    BackToTopComponent,
    CursorGlowComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
