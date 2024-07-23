class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Tauba-Tauba","Karan Aujla","Tauba-Tauba.jpeg","Tauba-Tauba.mp3"),
    new Music("Taras","Jasmine Sandlas & Sachin-Jigar","Taras.jpg","Taras.mp3"),
    new Music("FEARLESS","LE SSERAFIM","LS.jpg","FEARLESS.mp3")

];