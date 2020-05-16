// create form-data.ts under app/shared/interface/form-data.ts

export interface FormData {
    scriptName?:string;
    submit?: string;
    controlName?: string;
    controlType?: string;
    valueType?: string;
    hidden?:boolean;
    disabled?:boolean;
    defaultValue?: string;
    order?: number;
    currentValue?: string;
    placeholder?: string;
    options?: Array<{
      optionName: string;
      value: string;
    }>;
    validators?: {
      required?: boolean;
      minlength?: number;
      maxlength?: number;
      email?: boolean;
    };
    addClass?: string;
    click?: {
      methodName: string;
      param?: any;
    };
  
  }