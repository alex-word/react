import { message, MessageArgsProps } from 'antd'
export const Message = (() => {
    const success = (props: MessageArgsProps | string) => {
        if (typeof props === 'string') {
            message.success({ className: 'ants-success', content: props })
        }
        if (typeof props === 'object') {
            message.success({ ...props, className: `ants-success ${props.className}` })
        }
    }
    const error = (props: MessageArgsProps | string) => {
        if (typeof props === 'string') {
            message.error({ className: 'ants-error', content: props })
        }
        if (typeof props === 'object') {
            message.error({ ...props, className: `ants-error ${props.className || ''}` })
        }
    }
    const warning = (props: MessageArgsProps | string) => {
        if (typeof props === 'string') {
            message.error({ className: 'ants-warning', content: props })
        }
        if (typeof props === 'object') {
            message.error({ ...props, className: `ants-warning ${props.className || ''}` })
        }
    }
    const info = (props: MessageArgsProps | string) => {
        if (typeof props === 'string') {
            message.info({ className: 'ants-info', content: props })
        }
        if (typeof props === 'object') {
            message.info({ ...props, className: `ants-info ${props.className || ''}` })
        }
    }
    return { success, error, warning, info }
})()
