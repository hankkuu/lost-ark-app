import React from 'react';

import { CategoryMenu } from './CategoryMenu';
import * as Routes from './navigation/RoutesBuilder';
//import NavigationType from '../../config/navigation/propTypes';

export class LoginMenu extends React.Component {
  //static propTypes = {
  //  navigation: NavigationType.isRequired,
  //};
  static navigationOptions = {
    title: 'Login'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes} />
  );
}

export class ArticleMenu extends React.Component {
  //static propTypes = {
  //  navigation: NavigationType.isRequired,
  //};
  static navigationOptions = {
    title: 'Articles'.toUpperCase(),
  };
  render = () => {
    console.log(this.props.navigation);
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes} />
    );
  }
}

export class DashboardMenu extends React.Component {
  //static propTypes = {
  //  navigation: NavigationType.isRequired,
  //};
  static navigationOptions = {
    title: 'Dashboards'.toUpperCase(),
  };
  render = () => {
    console.log(this.props.navigation);
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.DashboardRoutes} />
    );
  }
}

export class SocialMenu extends React.Component {
  static navigationOptions = {
    title: 'Social'.toUpperCase(),
  };
  render = () => {
    console.log(this.props.navigation);
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.SocialRoutes} />
    );
  }
}