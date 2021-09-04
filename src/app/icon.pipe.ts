import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:"icon"
})

export class IconPipe implements PipeTransform{
    
    transform(value:any,arg?:boolean){

        if(arg){
            return "⮛"
        }else{
            return "⮚"
        }
           
    }
}