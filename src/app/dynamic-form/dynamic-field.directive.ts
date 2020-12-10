import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TextboxComponent } from '../widget/textbox/textbox.component';
import { ButtonComponent } from '../widget/button/button.component';
import { SelectDropdownComponent } from '../widget/select-dropdown/select-dropdown.component';
import { CheckBoxComponent } from '../widget/check-box/check-box.component';
import { FormData } from '../shared/form-data';


const componentMapper = {
  text: TextboxComponent,
  button: ButtonComponent,
  select: SelectDropdownComponent,
  radio: CheckBoxComponent,
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() fieldConfig: FormData;
  @Input() form: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    console.log("fieldConfig====",this.fieldConfig)
    console.log("group====",this.form)
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.fieldConfig.controlType]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.fieldConfig = this.fieldConfig;
    this.componentRef.instance.form = this.form;
  }
}
