import { message, MessageArgsProps } from 'antd'
export const Message = (() => {
    const success = (v: MessageArgsProps | string) => {
        if (typeof v === 'string') {
            message.success({ className: 'ants-success', content: v })
        }
        if (typeof v === 'object') {
            message.success({ ...v, className: `ants-success ${v.className}` })
        }
    }
    const error = (v: MessageArgsProps | string) => {
        if (typeof v === 'string') {
            message.error({ className: 'ants-error', content: v })
        }
        if (typeof v === 'object') {
            message.error({ ...v, className: `ants-error ${v.className || ''}` })
        }
    }
    const warning = (v: MessageArgsProps | string) => {
        if (typeof v === 'string') {
            message.error({ className: 'ants-warning', content: v })
        }
        if (typeof v === 'object') {
            message.error({ ...v, className: `ants-warning ${v.className || ''}` })
        }
    }
    const info = (v: MessageArgsProps | string) => {
        if (typeof v === 'string') {
            message.info({ className: 'ants-info', content: v })
        }
        if (typeof v === 'object') {
            message.info({ ...v, className: `ants-info ${v.className || ''}` })
        }
    }
    return { success, error, warning, info }
})()
