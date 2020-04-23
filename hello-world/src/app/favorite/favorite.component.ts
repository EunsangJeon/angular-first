import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // for view encapsulation: by default angular handle this so don't need to do this
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
