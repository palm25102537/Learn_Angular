import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'spreadWord'
})

export class SpreadWordPipe implements PipeTransform{
    transform(value?:any,...arg:any){
        const spiltWord = value?.toLowerCase().split(' ')
        if(spiltWord !== ""){
            const word = spiltWord?.map((item:string)=>{
                if(item !== arg[0]&& item !== arg[1]){
                    return item.charAt(0).toUpperCase()+item.substr(1)
                }else {
                    return item
                }
             })
             value = word?.join(' ')
        }   
     return value
    }
}