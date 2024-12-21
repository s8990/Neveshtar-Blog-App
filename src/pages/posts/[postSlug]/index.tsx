import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from "next/head";
import {PostDetailsType} from "@/types/Post";
import PostDetails from "@/components/posts/details";

export const getServerSideProps = (async (ctx) => {
    const {query} = ctx;
    // Fetch data from external API
    const res = await fetch(`https://json.xstack.ir/api/v1/post/${query.postSlug}`);
    const post: PostDetailsType = await res.json();
    // Pass data to the page via props
    return { props: { post } }
}) satisfies GetServerSideProps<{ post: PostDetailsType }>

export default function PostDetailsPage({
    post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <Head>
                <title>{post[0]?.title}</title>
            </Head>
            <PostDetails post={post} />
        </div>
    );
}