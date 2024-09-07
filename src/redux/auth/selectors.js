export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserAvatar = (state) => state.auth.user.avatarURL;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.selectIsLoading;
export const selectError = (state) => state.auth.error;
