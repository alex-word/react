interface Config {
    key: number
    title: string
    count: number
}
export const data: Config[] = [
    {
        key: 1,
        title: '活跃度1',
        count: 1234
    },
    {
        key: 2,
        title: '活跃度2',
        count: 12344
    },
    {
        key: 3,
        title: '活跃度3',
        count: 12324
    },
    {
        key: 4,
        title: '活跃度4',
        count: 12334
    },
] as const