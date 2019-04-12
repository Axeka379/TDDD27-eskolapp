import { Component } from '@angular/core';
import {CanvasWhiteboardModule} from '../ng2-canvas-whiteboard'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [CanvasWhiteboardModule]
})
export class AppComponent {
  title = 'ng7-pre';
}
