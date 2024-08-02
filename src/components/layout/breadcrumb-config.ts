interface VerifyPath {
    verifyPath: RegExp;
    crumbs: string[];
    notVisible?: boolean;
}
export const BreadcrumbConfig: VerifyPath[] = [
    {
        verifyPath: /\/list/,
        crumbs: ['用户管理', '用户列表']
    }
]