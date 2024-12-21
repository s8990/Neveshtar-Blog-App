export type PostType = {
    id: number;
    title: string;
    slug: string;
    body: string;
    view: number;
    user_id: number;
    created_at: string;
    updated_at?: string;
};

export type PostsType = PostType[];

type PostsResponseLinksType = {
    url: string;
    label: string;
    active: boolean;
}

export type PostsResponseType =  {
    current_page: number;
    data: PostsType;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PostsResponseLinksType[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}