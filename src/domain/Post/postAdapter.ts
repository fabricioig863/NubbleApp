import {Post} from './postTypes';

// Tipos da API (DTO - Data Transfer Object)
interface ApiUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_url: string;
  is_online: boolean;
  full_name: string;
}

interface ApiPostMeta {
  like_count: string;
  favorite_count: string;
  comments_count: string;
}

export interface ApiPost {
  id: number;
  text: string;
  user_id: number;
  image_url: string;
  is_fixed: boolean;
  is_activated: boolean;
  created_at: string;
  updated_at: string;
  user: ApiUser;
  status: string;
  meta: ApiPostMeta;
}

// Funções de conversão (Adapter)
function toPost(apiPost: ApiPost): Post {
  return {
    id: apiPost.id.toString(),
    text: apiPost.text,
    author: {
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
