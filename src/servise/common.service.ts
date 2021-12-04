import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CommonService {
    constructor(private http: HttpClient) {
    }

    postReg = obj => {
        return this.http.post('https://fake-millionaire-server-app.herokuapp.com/user/', obj);
    }

    getInfo = () => {
        return this.http.get('https://fake-millionaire-server-app.herokuapp.com/user/');

    }

    getQuestions = () => {
        return this.http.get('https://fake-millionaire-server-app.herokuapp.com/questions/');
    }

    postPlayer = user => {
        return this.http.post('https://fake-millionaire-server-app.herokuapp.com/top/', user);
    }

    getPlayerList = () => {
        return this.http.get('https://fake-millionaire-server-app.herokuapp.com/top/');
    }
}
