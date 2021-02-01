// Vanilla JS

/* Default Function Import's */
import { FetchandBuild } from "./inc/fetchandBuild";
/*  Default Function Import's Ends */


// Variables
const weatherApi = 'http://api.weatherstack.com/current?access_key=e3eaf27c5cf1b26f2741d95eab2f3b33&query=New%20York';
const userList = 'https://reqres.in/api/users';

// Class defined
export class ShowData extends FetchandBuild{

    constructor(fetchUrl){
        super(fetchUrl);
    }

     async showFetchedDataWeather(){
        const allData = await this.fetchData();
        const displayData = this.LoadDataInWeather(allData);
    }

    async showFetchedDataUser(){
       const allData = await this.fetchData();
       const displayData = this.LoadDataInLoopUser(allData);
   }

}

// Call Class
const fetchWeather = new ShowData(weatherApi);
const fetchUserList = new ShowData(userList);

// Call function from Class
fetchWeather.showFetchedDataWeather();
fetchUserList.showFetchedDataUser();
