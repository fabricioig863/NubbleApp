export interface Post {
  id: number;
  text: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; // 1;
  text: string; // 'Bom dia!';
  user_id: number; // 1;
  image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
  is_fixed: boolean; // false;
  is_activated: boolean; // true;
  created_at: string; // '2023-07-11T13:05:55.318+10:00';
  updated_at: string; // '2023-07-11T13:05:55.333+10:00';
  user: {
    id: number; // 1;
    first_name: string; // 'Maria';
    last_name: string; // 'Julia';
    username: string; // 'mariajulia';
    email: string; // 'mariajulia@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; // false;
    full_name: string; // 'Maria Julia';
  };
  status: string; // 'published';
  meta: {
    like_count: string; // '9';
    favorite_count: string; // '1';
    comments_count: string; // '2';
  };
}

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
