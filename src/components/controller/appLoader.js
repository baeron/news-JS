import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e332f7d4dfe14a2da53e617fd6e54ba6', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
