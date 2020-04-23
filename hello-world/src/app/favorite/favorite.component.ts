import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{
  @Input('isFavorite') isSellected: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSellected = !this.isSellected;
    this.click.emit({ newValue: this.isSellected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
