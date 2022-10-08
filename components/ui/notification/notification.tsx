import { FC } from 'react'

import styles from './styles.module.css'

interface NotificationProps {
    title: string
    message: string
    status: string
}

const Notification: FC<NotificationProps> = ({ title, message, status }) => {
    let statusClasses = ''

    if (status === 'success') {
        statusClasses = styles.success
    }

    if (status === 'error') {
        statusClasses = styles.error
    }

    const cssClasses = `${styles.notification} ${statusClasses}`
    return (
        <div className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Notification
