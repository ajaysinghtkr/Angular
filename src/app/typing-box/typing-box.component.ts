import { Component } from '@angular/core';

@Component({
  selector: 'app-typing-box',
  templateUrl: './typing-box.component.html',
  styleUrls: ['./typing-box.component.css']
})
export class TypingBoxComponent {
  typedText = '';

  onInputChange(value: string): void {
    this.typedText = value;
  }
}
