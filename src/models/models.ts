
export interface Post {
    id: string;
    _id?: string;
    author: string;
    title: string;
    content: string;
    picture?: string;
}

export interface InitialState {
    posts : Post[];
    author: string;
    postedPosts: Post[];
    currentPost: Post;
    date?: Date
}