import HomeIcon from '@mui/icons-material/Home';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export const SideBarData = [
    {
        title: "ホーム",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "メール",
        icon: <AttachEmailIcon/>,
        link: "/mail"
    },
    {
        title: "アナリティクス",
        icon: <AnalyticsIcon/>,
        link: "/analitics"
    },
    {
        title: "友達追加",
        icon: <PersonAddIcon/>,
        link: "/friends"
    },
    {
        title: "お支払い設定",
        icon: <PaymentIcon/>,
        link: "/payment"
    },
    {
        title: "アップロード",
        icon: <CloudUploadIcon/>,
        link: "/upload"
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon/>,
        link: "/setting"
    }
]