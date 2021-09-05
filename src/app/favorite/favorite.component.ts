import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
 } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom //Control CSS
  // inputs:['clickCheck'] // === @input //Not good to use
})

export class FavoriteComponent implements OnInit {
// mark field property as input property
  @Input("click-check") clickCheck:boolean = false; //Can rename clickCheck and nothing is impact except send this to pipe
  // clickCheck = false;
  @Output("change") click = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

 
  onClickA(){
    // console.log(this.clickCheck)
    // !this.clickCheck ? this.clickCheck=true : this.clickCheck = false
    this.clickCheck = !this.clickCheck
    this.click.emit({newValue:this.clickCheck});
}



}
export interface FavChangeArg{
  newValue:boolean
}