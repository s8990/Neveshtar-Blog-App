import {PostType} from "@/types/Post";
import {PostItemCard} from "@/components/shared/PostItemCard";

type PropsType = {
    post: PostType;
};

export default function PostItem({post}: PropsType) {
    return (
        <PostItemCard post={post} />
    )
}