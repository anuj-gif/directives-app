import { Directive,ElementRef,OnInit,Renderer2,HostListener,Host, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';
  private backgroundColor : string;
  
  @HostListener('mouseenter') mouseover(){
      this.backgroundColor = this.highlightColor;
   }
  
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
 }
  
  @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
   }
   ngOnInit(){
     this.backgroundColor=this.defaultColor;
   }
   
   
}
