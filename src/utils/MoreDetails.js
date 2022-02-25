import { BsChatLeft, BsVoicemail, BsWhatsapp, BsCheck2Circle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const sms = {
    name: 'SMS',
    icon: <BsChatLeft size="1rem" />,
    title: 'To Send SMS',
    endTitle: 'To Receive SMS',
    price: 'NGN 2.20000 /sms',
    recieveSms: 'Not Available',
    plans: [
        {
            title: "Domestic Route (Non DND)",
            subTitle: "ADVISABLE ROUTE FOR PROMOTIONAL MESSAGES",
            description: "For Mobile Numbers without DO-NOT-DISTURB settings.",
            price: "2.20000/sms",
        },
        {
            title: "Domestic Route (DND)",
            description: "For Mobile Numbers with or without DO-NOT-DISTURB settings.",
            price: "4.25000/sms",
        },
        {
            title: "International Route",
            subTitle: "ADVISABLE ROUTE FOR DOMESTIC AND NON_DOMESTIC PROMOTIONAL MESSAGES",
            description: "For Mobile Numbers with or without DO-NOT-DISTURB settings.",
            price: "53.05000/sms",
        },
    ]
}

export const voice = {
    name: 'Voice',
    title: 'To make Calls',
    endTitle: 'To Receive Calls',
    icon: <BsVoicemail size="1rem" />,
    price: 'NGN 0.08000 /sec',
    recieveSms: 'Not Available',
    plans: [
        {
            title: "Local Call (Outbound)",
            description: "This refers to Outgoing voice calls from the business mobile number to the customers.",
            price: "0.08000/sec",
        },
    ]
}

export const email = {
    name: 'Email',
    title: 'Price Per Mail',
    icon: <FiMail size="1rem" />,
    price: 'NGN 0.20000 /mail',
    plans: [
        {
            title: "Pay Per Use",
            description: "Charge for sending a single email whether to a group of customers or to an individual customers.",
            price: "0.20000/mail",
        },
        {
            title: "Subscription",
            description: "coming soon",
            price: "-",
        },
    ]
}

export const whatsapp = {
    name: 'Whatsapp',
    title: 'To Send Message',
    endTitle: 'To Receive Message',
    icon: <BsWhatsapp size="1rem" />,
    price: 'NGN 2.50000 /msg',
    recieveSms: 'NGN 0.00000 /msg',
    plans: [
        {
            description: "These are messages recieved by the business from the customers.",
            description2: "These are messages from the business to the customer.",
            description3: "These are structured and approved messsages by Meta(Facebook) from the business to the customer.",
            subTitle: "Inbound Messages",
            subTitle2: "Outbound Messages",
            subTitle3: "Template Message",
            title: "Pay Per Use",
            price: "0.00000/msg",
            price2: "2.50000/msg",
            price3: "2.50000/msg",
        },
        {
            title: "Subscription",
            subTitle: "AVALABLE AT MOBILE NUMBER ACTIVATION",
            description: "Subscriptions are NEED BASED.",
        },
    ]
}

export const verification = {
    name: 'Verification',
    title: 'To Send OTP',
    endTitle: 'To Confirm OTP',
    icon: <BsCheck2Circle size="1rem" />,
    price: 'NGN 0.00000 /token',
    recieveSms: 'NGN 0.00000 /token',
    plans: [
        {
            title: "To Send OTP",
            description: "This refers to the charge of sending OTP via different channels.",
            price: "0.00000/token"
        },
        {
            title: "To Confirm OTP",
            description: "This refers to the charge for confirming OTP generated on the sendchamp platform.",
            price: "0.00000/token"
        }
    ]
}