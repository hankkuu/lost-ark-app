import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {
    AppLoading,
    Font,
    Asset
} from 'expo';
import { bootstrap } from '@kittenDesign/bootstrap';
import AppSwitchNavigator from '@navigation/AppSwitchNavigator';
import { getAllofAsset } from '@util/Images';
import { data } from './test'

bootstrap();
data.populateData();

class App extends Component {
    constructor(){
        super();
        this.state = {
            isLoaded: false
        }
        // 기본 어셋 로딩(생성자에서 할 경우) 아래는 컴포넌트에서 하는 것으로 한다  
        //this.loadAssets().then(this.onAssetsLoaded);      
    }

    cacheImages(images) {
        return images.map(image => {
            if(typeof image === 'string') {
                return Image.prefetch(image);
            } else {
                return Asset.fromModule(image).downloadAsync();
            }
        });
    }

    // https://docs.expo.io/versions/v31.0.0/guides/offline-support.html
    // https://docs.expo.io/versions/v31.0.0/guides/preloading-and-caching-assets.html
    // https://docs.expo.io/versions/v31.0.0/guides/assets.html
    // 위 내용은 나중에 다시확인 
    // app Expo.update() (자동/수동)
    // OTA (변경내용 업데이트)
    // load image asset 
    loadAssets = async () => {
        await Font.loadAsync({
            fontawesome: require('@asset/fonts/fontawesome.ttf'),
            icomoon: require('@asset/fonts/icomoon.ttf'),
            'Righteous-Regular': require('@asset/fonts/Righteous-Regular.ttf'),
            'Roboto-Bold': require('@asset/fonts/Roboto-Bold.ttf'),
            'Roboto-Medium': require('@asset/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('@asset/fonts/Roboto-Regular.ttf'),
            'Roboto-Light': require('@asset/fonts/Roboto-Light.ttf'),
            'Space-Mono': require('@asset/fonts/SpaceMono-Regular.ttf'),
        });
        //await Asset.loadAsync([
        //    getAssetByFilename('splash')
        //])
        //위와는 다른 방식으로 // https://docs.expo.io/versions/v31.0.0/guides/preloading-and-caching-assets
        const arr = getAllofAsset();
        //console.log(arr);
        await this.cacheImages(arr);
    }    
    onAssetsLoaded = () => {
        this.setState({ isLoaded: true });
    }
    onError = (error) => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    }

    renderLoading = () => ( 
        <AppLoading
            startAsync={this.loadAssets}
            onFinish={this.onAssetsLoaded} 
            onError={this.onError}
        /> 
    );

    renderApp = () => (        
        <View style={styles.container}>
            <AppSwitchNavigator />
        </View>                
    )

    render = () => ( !this.state.isLoaded ? this.renderLoading() : this.renderApp() )
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});