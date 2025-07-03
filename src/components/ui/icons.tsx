import {
  PlayCircle,
  Newspaper,
  CalendarDays,
  Info,
  ExternalLink,
  Rss,
  Award,
  ShieldCheck,
  BookOpen,
  Users,
  Percent,
  Gift,
  LogIn,
  UserCircle,
  Edit3,
  ShieldAlert,
  UploadCloud,
  Tag,
  RefreshCw,
  CalendarCheck2,
  UserPlus,
  FileText,
  CheckCircle,
  Search,
  Filter,
  MapPin,
  Briefcase,
  Star,
  Download,
  MessageSquareMore,
  Send,
  Inbox,
  Paperclip,
  Edit,
  KeyRound,
  MailCheck,
  ArrowLeft,
  HelpCircle,
  MessageSquarePlus,
  BookOpenCheck,
  ArrowDownUp,
  Tags,
  Clock,
  User,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  Check,
  ChevronRight,
  Circle,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  PanelLeft,
} from 'lucide-react'

export const Icons = {
  // Media & Actions
  playCircle: PlayCircle,
  send: Send,
  search: Search,
  filter: Filter,
  download: Download,
  edit: Edit,
  edit3: Edit3,
  arrowLeft: ArrowLeft,
  arrowDownUp: ArrowDownUp,
  
  // Content & Information
  newspaper: Newspaper,
  bookOpen: BookOpen,
  bookOpenCheck: BookOpenCheck,
  fileText: FileText,
  info: Info,
  helpCircle: HelpCircle,
  rss: Rss,
  tags: Tags,
  tag: Tag,
  
  // Calendar & Time
  calendar: CalendarDays,
  calendarCheck2: CalendarCheck2,
  clock: Clock,
  
  // User & People
  user: User,
  userCircle: UserCircle,
  userPlus: UserPlus,
  users: Users,
  logIn: LogIn,
  
  // Security & Status
  shieldCheck: ShieldCheck,
  shieldAlert: ShieldAlert,
  checkCircle: CheckCircle,
  check: Check,
  
  // Business & Finance
  award: Award,
  percent: Percent,
  gift: Gift,
  briefcase: Briefcase,
  star: Star,
  
  // Location & Contact
  mapPin: MapPin,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  
  // Communication
  messageSquareMore: MessageSquareMore,
  messageSquarePlus: MessageSquarePlus,
  inbox: Inbox,
  paperclip: Paperclip,
  mailCheck: MailCheck,
  keyRound: KeyRound,
  
  // Actions & Controls
  refreshCw: RefreshCw,
  uploadCloud: UploadCloud,
  externalLink: ExternalLink,
  panelLeft: PanelLeft,
  
  // Navigation
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  circle: Circle,
  x: X,
  
  // Social Media
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
} as const

export type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 16, className, ...props }: IconProps) {
  const IconComponent = Icons[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  
  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      {...props}
    />
  )
}

// Helper function for backward compatibility
export const getIcon = (name: IconName) => Icons[name]