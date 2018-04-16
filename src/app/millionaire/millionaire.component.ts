import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../servise/common.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-millionaire',
    templateUrl: './millionaire.component.html',
    styleUrls: ['./millionaire.component.scss']
})
export class MillionaireComponent implements OnInit {
    data;
    user: any = [];
    ques_data;
    questions = [];
    quest: any = [];
    switch: boolean = false;
    switch_1: boolean = false;
    answers = [];
    x: number;
    ans: number;
    disable_1: boolean = true;
    disable_div: boolean = false;


    constructor(private common: CommonService,
                private router: Router) {
    }

    ngOnInit() {
        this.getPlayer();
        this.getQuest();
    }

// player request
    getPlayer = () => {
        this.common.getInfo().subscribe(
            (res) => {
                this.data = res;
                this.getData(this.data[this.data.length - 1]);
            }
        );

    };

    getData = Data => {
        this.user.push(Data);
        this.user = this.user[0];
        this.switch = true;
        return this.user;
    };

// questions request
    getQuest = () => {
        this.common.getQuestions().subscribe(
            (res) => {
                this.ques_data = res;
                this.getQuestData(this.ques_data);
            }
        )
    };

    getQuestData = Quest => {
        this.questions.push(Quest);
        this.questions = this.questions[0];
        this.x = Math.floor(Math.random() * 4) + 1;
        this.quest = this.questions[this.x];
        this.questions.splice(this.x, 1);
        this.switch_1 = true;
    };

//work of the game
    stepChange = _ => {
        this.x = Math.floor(Math.random() * this.questions.length - 1) + 1;
        this.getAnswers();
        this.quest = this.questions[this.x];
        this.questions.splice(this.x, 1);
        this.switch_1 = true;
        this.disable_1 = true;
        this.quest === undefined ? this.switch_1 = false : null;
        this.switch_1 === false ? this.disable_div = true : null;
    };

    getAnswers = () => {
        this.ans === this.quest.correct ? this.answers.push(this.quest.correct) : null;
    };

    selectAnswer = i => {
        this.ans = i;
        this.disable_1 = false;
    };

// Player result post request
    postPlayerResult = _ => {
        this.common.postPlayer({
            name: this.user.name,
            last_name: this.user.last_name,
            email: this.user.email,
            score: this.answers.length
        }).subscribe(
            res => {
                res ? this.router.navigate(['/results']) : null;

            }
        );

    };


}
