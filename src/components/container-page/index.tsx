import styled from "styled-components"

interface ContainerProps {
    style?: React.CSSProperties
    children: React.ReactNode
    className?: string
}
export const PageContainer: React.FC<ContainerProps> = (props) => {
    const { style, children, className } = props
    return (
        <Container style={style} className={className}>
            {children}
        </Container>
    )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`