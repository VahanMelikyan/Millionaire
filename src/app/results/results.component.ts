import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../servise/common.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    data_list;
    arr_sort: any = [];
    arr;


    constructor(private common: CommonService,
                private router: Router) {
    }

    ngOnInit() {
        this.getPlayerResult();
    }

// Player results request
    getPlayerResult = () => {
        this.common.getPlayerList().subscribe((res) => {
                this.data_list = res;
                this.getDataList(this.data_list);
            }
        );
    };

    getDataList = list => {
        this.arr_sort.push(list);
        this.arr = this.arr_sort[0];
        for (let i = 0; i < this.arr.sort((obj1, obj2) => {
            return obj2.score - obj1.score;
        }).length; i++) {
            return this.arr[i];
        }
    };

// Redirect page
    backHome = () => {
        this.router.navigate(['/registration']);
    };
    backGame = () => {
        this.router.navigate(['/game']);
    };
}
