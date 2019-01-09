import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import { CommonHeaderNavigationOptions } from '@navigation/options/menu/CommonHeaderNavigationOptions';
import { BothHeaderNavigationOptions } from '@navigation/options/menu/BothHeaderNavigationOptions';

import MenuScreen from '@screen/menu/MenuScreen.js';
import { LoginV1, LoginV2, PasswordRecovery, SignUp } from '@screen/menu/screen/login/index';
import { Article, Articles1, Articles2, Articles3, Articles4, Blogposts } from '@screen/menu/screen/articles/index';
import { Contacts, Feed, Notifications, ProfileV1, ProfileV2, ProfileV3, ProfileSettings } from '@screen/menu/screen/social/index';
import { Chat, ChatList, Comments } from '@screen/menu/screen/messaging/index';
import { WalkthroughScreen } from '@screen/menu/screen/walkthroughs/index';
import { AddToCardForm, Cards } from '@screen/menu/screen/eCommerce/index';
import { GridV1, GridV2, ListMenu } from '@screen/menu/screen/navigation/index';
import { Dashboard } from '@screen/menu/screen/dashboard/index';

import { ArticleMenu, DashboardMenu, LoginMenu, SocialMenu, MessagingMenu, WalkthroughMenu, EcommerceMenu, NavigationMenu } from '@screen/menu/RouteMenuScreen';

const routeConfig = {
    Menu: { screen: MenuScreen, navigationOptions: BothHeaderNavigationOptions },  

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
    Dashboard: { screen: Dashboard },

    SocialMenu: { screen: SocialMenu },
    Contacts: { screen: Contacts, },
    Feed: { screen: Feed, },
    Notifications: { screen: Notifications, },
    ProfileV1: { screen: ProfileV1 },
    ProfileV2: { screen: ProfileV2, },     
    ProfileV3: { screen: ProfileV3 },  
    ProfileSettings: { screen: ProfileSettings },  

    MessagingMenu: { screen: MessagingMenu },
    Chat: { screen: Chat, },
    ChatList: { screen: ChatList, },
    Comments: { screen: Comments, },

    WalkthroughMenu: { screen: WalkthroughMenu },
    Walkthrough: { screen: WalkthroughScreen, },

    EcommerceMenu: { screen: EcommerceMenu },
    AddToCardForm: { screen: AddToCardForm, },
    Cards: { screen: Cards, },
    
    NavigationMenu: { screen: NavigationMenu },
    GridV1: { screen: GridV1, },
    GridV2: { screen: GridV2, },
    List: { screen: ListMenu, },
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