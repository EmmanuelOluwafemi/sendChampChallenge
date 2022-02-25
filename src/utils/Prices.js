import { BsChatLeft, BsVoicemail, BsWhatsapp, BsCheck2Circle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const prices = [
    {
        id: 1,
        name: 'SMS',
        icon: <BsChatLeft size="1rem" />,
        title: 'To Send SMS',
        endTitle: 'To Receive SMS',
        price: 'NGN 2.20000 /sms',
        recieveSms: 'Not Available',
    },
    {
        id: 2,
        name: 'Voice',
        title: 'To make Calls',
        endTitle: 'To Receive Calls',
        icon: <BsVoicemail size="1rem" />,
        price: 'NGN 0.08000 /sec',
        recieveSms: 'Not Available',
    },
    {
        id: 3,
        name: 'Email',
        title: 'Price Per Mail',
        icon: <FiMail size="1rem" />,
        price: 'NGN 0.20000 /mail'
    },
    {
        id: 4,
        name: 'Whatsapp',
        title: 'To Send Message',
        endTitle: 'To Receive Message',
        icon: <BsWhatsapp size="1rem" />,
        price: 'NGN 2.50000 /msg',
        recieveSms: 'NGN 0.00000 /msg',
    },
    {
        id: 5,
        name: 'Verification',
        title: 'To Send OTP',
        endTitle: 'To Confirm OTP',
        icon: <BsCheck2Circle size="1rem" />,
        price: 'NGN 0.00000 /token',
        recieveSms: 'NGN 0.00000 /token',
    }
]