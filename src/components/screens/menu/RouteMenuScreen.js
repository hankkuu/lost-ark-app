import React from 'react';

import { CategoryMenu } from './CategoryMenu';
import * as Routes from './navigation/RouteBuilder';
//import NavigationType from '../../config/navigation/propTypes';



export class RouteMenuScreen extends React.Component {
    // static propTypes = {
    //   navigation: NavigationType.isRequired,
    // };
    static navigationOptions = {
      title: 'Articles'.toUpperCase(),
    };
    render = () => (
      <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes} />
    );
  }