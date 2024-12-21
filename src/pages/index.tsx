import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from "next/head";
import PostsList from "@/components/posts/list";
import {PostsResponseType} from "@/types/Post";

export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch('https://json.xstack.ir/api/v1/posts');
    const posts: PostsResponseType = await res.json();
    console.log("posts :: ", posts);
    // Pass data to the page via props
    return { props: { posts } }
}) satisfies GetServerSideProps<{ posts: PostsResponseType }>

export default function HomePage({
 posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
        <Head>
            <title>وبلاگ نوشتار</title>
        </Head>
      <PostsList posts={posts?.data} />
    </div>
  );
}