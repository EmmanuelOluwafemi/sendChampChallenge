import { FiGrid, FiUsers, FiMail, FiSettings, FiBook } from 'react-icons/fi';
import { BsChatLeft, BsVoicemail, BsWhatsapp, BsCheck2Circle, BsCurrencyDollar, BsCode } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';

export const navItems = [
    {
      title: 'MAIN',
      items: [
        {
          name: 'Dashboard',
          icon: <FiGrid size="1.25rem" />,
          path: '/dashboard'
        },
        {
          name: 'Customers',
          icon: <FiUsers size="1.25rem" />,
          path: '/customers',
          subLink: [
            "Add Customer",
            "View Customers",
            "View Groups",
            "Import History"
          ]
        },
      ]
    },
    {
      title: 'CHANNELS',
      items: [
        {
          name: 'SMS',
          icon: <BsChatLeft size="1.25rem" />,
          path: '/sms',
          subLink: [
            "Overview",
            "Test SMS",
            "Create Sender ID",
            "Send Quick SMS",
            "Send Bulk SMS",
            "Report"
          ]
        },
        {
          name: 'Voice',
          icon: <BsVoicemail size="1.25rem" />,
          path: '/voice',
          subLink: [
            "Overview",
            "Test Voice",
            "Send Voice Message",
            "Report"
          ]
        },
        {
          name: 'Whatsapp',
          icon: <BsWhatsapp size="1.25rem" />,
          path: '/whatsapp',
          subLink: [
            "Overview",
            "Test Whatsapp",
            "Activate Number",
            "Whatsapp Templates",
            "Report"
          ]
        },
        {
          name: 'Email',
          icon: <FiMail size="1.25rem" />,
          path: '/email',
          subLink: [
            "Overview",
            "View Domain",
            "View Templates",
            "Report"
          ]
        },
        {
          name: 'Verification',
          icon: <BsCheck2Circle size="1.25rem" />,
          path: '/verification',
          subLink: [
            "Overview",
            "Quick Test",
            "Send OTP",
            "Report"
          ]
        },
      ]
    },
    {
      title: 'SETTINGS',
      items: [
        {
          name: 'Account Settings',
          icon: <FiSettings size="1.25rem" />,
          path: '/settings'
        },
        {
          name: 'Teammates',
          icon: <RiTeamLine size="1.25rem" />,
          path: '/teammates'
        },
        {
          name: 'Pricing',
          icon: <BsCurrencyDollar size="1.25rem" />,
          path: '/pricing',
          active: true
        },
      ]
    },
    {
      title: 'DEVELOPERS',
      items: [
        {
          name: 'Documentation',
          icon: <FiBook size="1.25rem" />,
          path: '/documentation'
        },
        {
          name: 'Developer Community',
          icon: <BsCode size="1.25rem" />,
          path: '/community'
        },
      ]
    },
  ]
  