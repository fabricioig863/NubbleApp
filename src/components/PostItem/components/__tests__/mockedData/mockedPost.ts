import {Post} from '@domain';

export const mockedPost: Post = {
  id: 2,
  imageURL: 'https://example.com/image.jpg',
  text: 'This is a sample post text.',
  favoriteCount: 10,
  commentCount: 4,
  reactionCount: 3,
  author: {
    id: 1,
    name: 'John Doe',
    userName: 'johndoe',
    profileURL: 'https://example.com/profile.jpg',
  },
};
