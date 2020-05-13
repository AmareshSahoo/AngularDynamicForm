
import { FormData } from './../shared/form-data';

export const RegisterFormData: FormData[] = [
    {
        scriptName: "demoScript"
    },
    {
        controlName: 'Username',
        controlType: 'text',
        valueType: 'text',
        placeholder: 'Enter username',
        hidden:false,
        validators: {
            required: true,
            minlength: 5
        },
        defaultValue: "amar@gmail.com",
        clickEvent: {
            methodName: "onClickUsername",
            param: 'Data'
        },
        order: 2
    },
    {
        controlName: 'Password',
        controlType: 'text',
        valueType: 'password',
        placeholder: 'Enter Password',
        validators: {
            required: true,
            minlength: 5
        },
        clickEvent: {
            methodName: "onClickPass",
            param: 'Data'
        },
        order: 3
    },
    {
        controlName: 'Email',
        valueType: 'email',
        placeholder: 'Enter email',
        controlType: 'text',
        validators: {
            required: true,
            minlength: 6,
            maxlength: 10,
            email: true
        },
        order: 1
    },
    {
        controlName: 'Gender',
        placeholder: 'Select gender',
        controlType: 'select',
        options: [{
            optionName: 'Male',
            value: 'male'
        }, {
            optionName: 'Female',
            value: 'female'
        }],
        validators: {
            required: true
        },
        clickEvent: {
            methodName: "onClickGender",
            param: 'Amaresh'
        },
        order: 4
    },
    {
        controlName: 'Vehicle you own',
        placeholder: 'Select vehicle',
        controlType: 'radio',
        options: [
            {
                optionName: 'Yes',
                value: 'Yes'
            },
            {
                optionName: 'No',
                value: 'No'
            },
            {
                optionName: 'Both',
                value: 'Both'
            }
        ],
        defaultValue: "Yes",
        validators: {
            required: true
        },
        order: 5
    },
    {
        controlName: 'SubmitButton',
        placeholder: 'Submit',
        controlType: 'button',
        type: "submit",
        addClass: 'btn btn-primary',
        clickEvent: {
            methodName: "OnSubmitButton",
            param: 'Amaresh'
        }
    }
].sort((a, b) => a.order - b.order);