export const selectFriendsState = (state) => state.friends;
export const selectFriends = (state) => state.friends.items;
export const selectFriendsNumber = (state) => state.friends.items.length || 0;

export const selectIsLoading = (state) => state.friends.isLoading;
export const selectError = (state) => state.friends.error;
