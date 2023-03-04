
export type IPost = {
    map(arg0: (post: any) => JSX.Element): import("react").ReactNode;
    id: string
    title: string
    body: string
}