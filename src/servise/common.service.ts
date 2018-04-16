import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CommonService {
    constructor(private http: HttpClient) {
    }

    postReg = obj => {
        return this.http.post("http://localhost:5555/user/", obj);
    };

    getInfo = () => {
        return this.http.get("http://localhost:5555/user/");

    };

    getQuestions = () => {
        return this.http.get("http://localhost:5555/questions/");
    };

    postPlayer = user => {
        return this.http.post("http://localhost:5555/top/", user);
    };

    getPlayerList = () => {
        return this.http.get("http://localhost:5555/top/");
    };
}