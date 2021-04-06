import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input() set unless(condition: boolean){
    if(!condition){
      this.vc.createEmbeddedView(this.template);
    }
    else{
      this.vc.clear();
    }
  }
  constructor(private template: TemplateRef<any>,private vc : ViewContainerRef) { 

  }
}
