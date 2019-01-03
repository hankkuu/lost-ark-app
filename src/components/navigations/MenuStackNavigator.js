import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import { CommonHeaderNavigationOptions } from '@navigation/options/CommonHeaderNavigationOptions';

import MenuScreen from '@screen/menu/MenuScreen.js';
import Article1Screen from '@screen/menu/screen/articles/articles1.js';
import Article2Screen from '@screen/menu/screen/articles/articles2.js';
import Article3Screen from '@screen/menu/screen/articles/articles3.js';
import Article4Screen from '@screen/menu/screen/articles/articles4.js';
import BlogpostsScreen from '@screen/menu/screen/articles/blogposts.js';
import ArticleScreen from '@screen/menu/screen/articles/article.js';
import { RouteMenuScreen } from '@screen/menu/RouteMenuScreen';

const routeConfig = {
    Menu: { screen: MenuScreen },  
    Articles1: { screen: Article1Screen, },
    Articles2: { screen: Article2Screen, },
    Articles3: { screen: Article3Screen, },
    Articles4: { screen: Article4Screen },

    Blogposts: { screen: BlogpostsScreen, },                  
    Article: { screen: ArticleScreen },  
    ArticlesMenu: { screen: RouteMenuScreen}
}

const navigatorConfig = {
    initialRouteName: 'Menu',
    gesturesEnabled: true,
    navigationOptions: CommonHeaderNavigationOptions,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
}

// default 안하고 바로 export 하면 에러가 난다 (import 방식이 다름)
const MenuStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
// react에서 DOM에 직접적인 접근을 할때 ref 라는 키워드를 사용할 수 있다 
// 아이폰에서는 아래에서 에러남??
// const HomeStack = () => {
//     return (
//         <HomeStackNavigator 
//                         // ref={(navi) => {
//                         //         NavigationService.setTopLevelNavigator(navi);
//                         //     }}
//         />
//     );
// }
export default MenuStackNavigator;