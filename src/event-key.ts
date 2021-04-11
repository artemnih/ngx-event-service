export class EventKey<T> {
    private pKey: string;

    constructor(key: string) {
        this.pKey = key;
    }

    get key(): string {
        return this.pKey;
    }
}
