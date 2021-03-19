import {injectable} from "inversify";

@injectable()
export class WokeMessage { 
    private regexp = '!woke';

    public isWoke(stringToSearch: string) :boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}