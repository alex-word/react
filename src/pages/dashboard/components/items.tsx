import { formatNumber } from "@/utils/formatNumber"
import { Card, CardProps } from "antd"
import styled from "styled-components"
interface ItemsProps extends CardProps {
    title: string | React.ReactNode
    count: number
}
export const Items: React.FC<ItemsProps> = ({ title, count = 0, ...other }) => {
    return <HeaderCard {...other}>
        <div className="title">
            {title}
        </div>
        <div className="count">{formatNumber(count)}</div>
    </HeaderCard>
}
const HeaderCard = styled(Card)`
    flex: 1;
    .title{
        color: #666;
    }
    .count{
        font-size: 30px;
    }
`