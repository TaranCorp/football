export class Match {
    date: Date;
    host: string;
    guest: string;
    hostGoals: number;
    guestGoals: number;
    result: string;
    arbiter: string;

    constructor(data: string[]){
        this.date = new Date(data[0]);
        this.host = data[1];
        this.guest = data[2];
        this.hostGoals = parseFloat(data[3]);
        this.guestGoals = parseFloat(data[4]);
        this.result = data[5];
        this.arbiter = data[6];
    }
}