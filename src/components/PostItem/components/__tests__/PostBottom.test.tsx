import {mockedNavigate} from '@test';
import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('it does not show the comment link if it has no comments', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('navigates to PostCommentScreen when pressing the comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });

  it('shows "ver comentário" when commentCount is 1', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);

    const commentLinkElement = screen.getByText('ver comentário');

    expect(commentLinkElement).toBeTruthy();
  });

  it('shows "ver X comentários" when commentCount is greater than 1', () => {
    render(<PostBottom {...mockedPost} commentCount={5} />);

    const commentLinkElement = screen.getByText('ver 5 comentários');

    expect(commentLinkElement).toBeTruthy();
  });
});
