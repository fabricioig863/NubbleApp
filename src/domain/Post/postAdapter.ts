import {ApiPost, Post} from './postTypes';

// Funções de conversão (Adapter)
function toPost(apiPost: ApiPost): Post {
  return {
    id: apiPost.id,
    text: apiPost.text,
    author: {
      id: apiPost.id,
      profileURL: apiPost.user.profile_url,
      name: apiPost.user.full_name,
      userName: apiPost.user.username,
    },
    imageURL: apiPost.image_url,
    reactionCount: parseInt(apiPost.meta.like_count, 10),
    commentCount: parseInt(apiPost.meta.comments_count, 10),
    favoriteCount: parseInt(apiPost.meta.favorite_count, 10),
  };
}

export const postAdapter = {
  toPost,
};
