import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input ('appInputFormat') format:any;
  constructor(
    private el:ElementRef
  ) { }

//  @HostListener('focus') onFocus(){
//     console.log('focus')
//   }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value
    console.log(this.format)
    if(this.format == 'lowercase'){
    
      this.el.nativeElement.value = value.toLowerCase()
    }else{
      this.el.nativeElement.value = value.toUpperCase()
    }
  
  }


}
