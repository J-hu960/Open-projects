export class CreateCommentDto {
    readonly content: string;
    readonly postId: string;
    readonly userId?: string;
}
