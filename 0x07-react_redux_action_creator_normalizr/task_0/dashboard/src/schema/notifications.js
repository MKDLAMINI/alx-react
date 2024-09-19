import * as notificationObj from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notificationObj.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};