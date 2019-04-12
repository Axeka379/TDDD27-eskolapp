import { Component, OnInit } from '@angular/core';
import {CanvasWhiteboardModule} from '../../ng2-canvas-whiteboard'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor() { }
    canvasOptions: CanvasWhiteboardModule = {
        drawButtonEnabled: true,
        drawButtonClass: "drawButtonClass",
        drawButtonText: "Draw",
        clearButtonEnabled: true,
        clearButtonClass: "clearButtonClass",
        clearButtonText: "Clear",
        undoButtonText: "Undo",
        undoButtonEnabled: true,
        redoButtonText: "Redo",
        redoButtonEnabled: true,
        colorPickerEnabled: true,
        saveDataButtonEnabled: true,
        saveDataButtonText: "Save",
        lineWidth: 5,
        strokeColor: "rgb(0,0,0)",
        shouldDownloadDrawing: true
    };

    ngOnInit() {
        if (this.isCanvasOpened) {
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 1);
        }

    }




}
