// Vanilla JS
export class FetchandBuild {

    constructor(fetchUrl){
        this.url = fetchUrl;
    }

    async fetchData() {
        return new Promise( async (resolve,reject) => {
            const dataResponse = await fetch(this.url);
            if(dataResponse.ok){
                const data = await dataResponse.json();
                resolve(data);
            }
            else{
                reject('Fetch Request Failed');
            }
        });
    }

    LoadDataInLoopUser(allData) {
        const mainDiv = document.querySelector('#user .dataShow');
        const userData = allData.data;
        userData.forEach(user => {
            const dataMainElement = document.createElement('div');
            Object.keys(user).forEach((key) => {
                const dataElement = document.createElement('span');
                dataElement.innerText = `${key}: ${user[key]}`;
                dataMainElement.append(dataElement);
            });
            mainDiv.append(dataMainElement);
        });
    }

    LoadDataInWeather(allData) {
        const mainDiv = document.querySelector('#weather .dataShow');
        const weatherdata = allData.location;
        const dataMainElement = document.createElement('div');
        Object.keys(weatherdata).forEach((key) => {
            const dataElement = document.createElement('span');
            dataElement.innerText = `${key}: ${weatherdata[key]}`;
            dataMainElement.append(dataElement);
        });
        mainDiv.append(dataMainElement);
    }

}
