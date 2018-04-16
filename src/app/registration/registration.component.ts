import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {CommonService} from "../../servise/common.service";



@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    info: FormGroup;
    name: FormControl;
    last_name: FormControl;
    email: FormControl;


    constructor(private router: Router,
                private common: CommonService) {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls = () => {
        this.name = new FormControl('', Validators.required);
        this.last_name = new FormControl('', Validators.required);

        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$")
        ]);
    };

    createForm = () => {
        this.info = new FormGroup({
            name: this.name,
            last_name: this.last_name,
            email: this.email,
        });
    };

// request to send player data
    postPlay = () => {

        this.common.postReg(this.info.value).subscribe(
            res => {
                if(res){
                    this.router.navigate(['/game']);
                }
            }
        );


    };


}
