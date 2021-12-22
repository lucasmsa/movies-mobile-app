# Ília React-native challenge 🍿

- Developing an application using React-native with Typescript ⌨️
- Project description stated [here](https://github.com/aisdigital/ilia-react-native-challenge)

**_Clone the repository in order to follow the steps inside the `How to run` sections_**
<br>

### How to run 🛫
- Go to the `mobile/` folder and run `npm install` in order to install the application's depencies
  - If you're using XCode go to the `ios/` folder and run the `pod install` command   
- Run `react-native link` inside the root `mobile/` folder 
- Then, to run the app run `npm run ios` if you're using XCode, otherwise execute `npm run android`
- Furthermore, since the application is using TheMovieDB API, you should create an account on their [website](https://www.themoviedb.org/?language=pt-BR)
  - Afterwards, create a new file called `apiKey.ts` under the `src/constants` folder and in it add the following code: `export const MOVIE_DB_API_KEY = <YOUR_API_KEY>` with `<YOUR_API_KEY>` replaced by your API key under **Settings** > **API** > **API Key (v3 auth)**
  <br>
  *Note: I've tried adding this API key on a `.env` file, but I ended up having some problems and since time was short I decided for the above mentioned approach*

### Features 🎲
- `axios` for handling api calls 
- `styled-components` for the app's styling
- `react-native-iconly` for the app's icons
- `Flatlist` for the infinite scroll on the `Home` screen  
- `react-native-responsive-fontsize` to keep the stylization responsive across different devices
- `Webview` for the trailer's visualization 