import _ from 'lodash';
import users from './rawData/users';
import articles from './rawData/articles';
import notifications from './rawData/notifications';
import conversations from './rawData/conversations';

const populateArticles = () => {
  articles.forEach(article => {
    const userArticle = article;
    const userId = articles.indexOf(article) % users.length;
    userArticle.user = _.find(users, x => x.id === userId) || users[0];
    userArticle.comments.map(comment => {
      const userComment = comment;
      const commentUserId = article.comments.indexOf(comment) % users.length;
      userComment.user = _.find(users, x => x.id === commentUserId) || users[0];
      return userComment;
    });
    return userArticle;
  });
};

const populateNotifications = () => {
  notifications.map(notification => {
    const userNotification = notification;
    const userId = notifications.indexOf(notification) % users.length;
    userNotification.user = _.find(users, x => x.id === userId) || users[0];
    return userNotification;
  });
};

const populateConversations = () => {
  conversations.map(conversation => {
    const userConversation = conversation;
    userConversation.withUser = _.find(users, x => x.id === conversation.withUserId) || users[0];
    return userConversation;
  });
};

const populate = () => {
  populateArticles();
  populateNotifications();
  populateConversations();
};

export default populate;
