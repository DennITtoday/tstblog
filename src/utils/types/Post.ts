
export interface IPost {
    map(arg0: (post: { id: any }) => JSX.Element): import("react").ReactNode
    length: number
    remove(sortedPost: any): void
    id: string
    title: string
    body: string
    user_id: number
}

export interface ISortOption {
    id: number
    title: string
    sortField: string
}