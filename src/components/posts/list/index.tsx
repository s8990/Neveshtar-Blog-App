import PostItem from "@/components/posts/list/postItem";
import {PostsType, PostType} from "@/types/Post";

type PropsType = {
    posts: PostsType;
};

export default function PostsList({ posts }: PropsType) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {posts?.map((post:PostType)=> (
                <PostItem key={post?.id} post={post} />
            ))}
        </div>
    )
}