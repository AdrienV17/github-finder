import { createSelector } from "reselect";


const selectProfileState = state => state.profile;



export const selectIsProfile = createSelector([selectProfileState],profileState=> profileState.isProfile)

export const selectProfileEssentials = createSelector([selectProfileState],profileState=>({
    username: profileState.profile.login,
    name: profileState.profile.name,
    avatarUrl:profileState.profile.avatar_url,
    followers: profileState.profile.followers,
    repos: profileState.profile.public_repos
}))