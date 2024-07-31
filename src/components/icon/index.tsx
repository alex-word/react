// ◆ 组件 props 的类型
type Props = {
    // icon 的类型(必选)
    type: string
    // icon 的自定义样式(可选)
    name?: string
    // 点击事件(可选)
    onClick?: () => void
}
const Icon = ({ type, name, onClick }: Props) => {
    return (
        <svg
            className={name}
            aria-hidden="true"
            onClick={onClick}
        >
            <use xlinkHref={`#${type}`}></use>
        </svg>
    )
}
export default Icon
