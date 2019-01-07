import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import { CommonHeaderNavigationOptions } from '@navigation/options/CommonHeaderNavigationOptions';

import MenuScreen from '@screen/menu/MenuScreen.js';
import { LoginV1, LoginV2, PasswordRecovery, SignUp } from '@screen/menu/screen/login/index';
import { Article, Articles1, Articles2, Articles3, Articles4, Blogposts } from '@screen/menu/screen/articles/index';
import { Contacts, Feed, Notifications, ProfileV1, ProfileV2, ProfileV3, ProfileSettings } from '@screen/menu/screen/social/index';

import { ArticleMenu, DashboardMenu, LoginMenu, SocialMenu } from '@screen/menu/RouteMenuScreen';

const routeConfig = {
    Menu: { screen: MenuScreen },  

    LoginMenu: { screen: LoginMenu},
    Login1: { screen: LoginV1 },
    Login2: { screen: LoginV2, },
    Password: { screen: PasswordRecovery, },
    SignUp: { screen: SignUp, },

    ArticlesMenu: { screen: ArticleMenu},
    Articles1: { screen: Articles1, },
    Articles2: { screen: Articles2, },
    Articles3: { screen: Articles3, },
    Articles4: { screen: Articles4 },
    Blogposts: { screen: Blogposts, },     
    Article: { screen: Article },  

    DashboardsMenu: { screen: DashboardMenu},

    SocialMenu: { screen: SocialMenu },
    Contacts: { screen: Contacts, },
    Feed: { screen: Feed, },
    Notifications: { screen: Notifications, },
    ProfileV1: { screen: ProfileV1 },
    ProfileV2: { screen: ProfileV2, },     
    ProfileV3: { screen: ProfileV3 },  
    ProfileSettings: { screen: ProfileSettings },  

    
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