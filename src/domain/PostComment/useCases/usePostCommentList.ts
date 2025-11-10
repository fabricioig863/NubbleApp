import {QueryKeys, usePaginatedList} from '@infra';

import {postCommentService} from '../postCommentService';

export function usePostCommentList(postId: number) {
  return usePaginatedList([QueryKeys.PostCommentList, postId], page =>
    postCommentService.getList(postId, page),
  );
}
