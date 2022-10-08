import { ErrorInfo, FC, MouseEvent, useEffect, useState } from 'react'
import Notification from '../ui/notification/notification'

import styles from './styles.module.css'

const sendContactData = async (contactDetails: {}) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.')
    }
}

const ContactForm: FC = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState<string | null>(null) // 'pending' ||'success' || 'error'
    const [requestError, setRequestError] = useState<string | null>(null)

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [requestStatus])

    const sendMessageHandler = async (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault()

        setRequestStatus('pending')

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            })
            setRequestStatus('success')
            setEnteredEmail('')
            setEnteredName('')
            setEnteredMessage('')
        } catch (err) {
            setRequestError((err as Error).message)
            setRequestStatus('error')
        }
    }

    let notification

    switch (requestStatus) {
        case 'pending':
            notification = {
                title: 'Sending message...',
                message: 'Your message is on its way.',
                status: 'pending'
            }
            break

        case 'success':
            notification = {
                title: 'Success!',
                message: 'Message sent successfully.',
                status: 'success'
            }
            break

        case 'error':
            notification = {
                title: 'Error!',
                message: requestError,
                status: 'error'
            }
            break

        default:
            break
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            required
                            value={enteredEmail}
                            onChange={(event) =>
                                setEnteredEmail(event.target.value)
                            }
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input
                            type='text'
                            id='name'
                            required
                            value={enteredName}
                            onChange={(event) =>
                                setEnteredName(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Your Name</label>
                    <textarea
                        id='message'
                        rows={5}
                        value={enteredMessage}
                        onChange={(event) =>
                            setEnteredMessage(event.target.value)
                        }
                    />
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && (
                <Notification
                    title={notification.title}
                    message={notification.message}
                    status={notification.status}
                />
            )}
        </section>
    )
}

export default ContactForm
