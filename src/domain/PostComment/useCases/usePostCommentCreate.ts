import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentCreate(
  post_id: number,
  options?: MutationOptions<PostComment>,
) {
  const {error, loading, mutate} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(post_id, message),
    options,
  );

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    loading,
    error,
  };
}
