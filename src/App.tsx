import { useEffect, useState, type ImgHTMLAttributes, type ReactNode } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  Users,
  Gift,
  Trophy,
  Star,
  Calendar,
  UserRound,
  Crown,
  ShieldCheck,
  Zap,
  BadgeCheck,
  MessageCircle,
  Send,
  Heart,
  ArrowRight,
  Camera,
  Music2,
  Gamepad2,
  Search,
  Sparkles,
  Megaphone,
  Store,
  Handshake,
  Code2,
  Bot,
  QrCode,
  Smile,
  Paperclip,
  ChevronDown,
  Bell,
  Clock3,
  CircleHelp,
  GitBranch,
} from "lucide-react";

import { motion } from "framer-motion";

const discordUrl = "https://discord.gg/mystralacademy";
const tiktokUrl = "https://www.tiktok.com/@mystralacademy";
const staffFormUrl = "https://forms.gle/DMuqLoJmL4EAkPsF9";

type ThemeMode = "dark" | "pastel";

type StaffMember = {
  name: string;
  role: string | string[];
  color: string;
  avatar?: string;
};

type MemberComment = {
  id: number;
  name: string;
  message: string;
  time: string;
  createdAt?: string;
};

type Founder = {
  name: string;
  role: string;
  desc: string;
  color: string;
  banner: string;
  bio: string;
  discord?: string; // username Discord (untuk display)
  tiktok?: string; // username TikTok (untuk display)
  discordLink?: string; // URL profil Discord personal
  tiktokLink?: string; // URL profil TikTok personal
  /** Path foto PNG di folder public, contoh: "/founders/ramzy.png" */
  avatar?: string;
};

type ViteImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fill?: boolean;
  sizes?: string;
};

function Image({ fill, className = "", sizes: _sizes, ...props }: ViteImageProps) {
  return (
    <img
      {...props}
      className={`${fill ? "absolute inset-0 h-full w-full object-cover " : ""}${className}`}
    />
  );
}

/* Nav items — main (selalu tampil di desktop) */
const navMain = [
  { label: "Beranda", href: "#home" },
  { label: "Donasi", href: "#donation" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Peraturan", href: "#rules" },
];

const navAbout = [
  { label: "Founder", href: "#founder" },
  { label: "Staff", href: "#staff" },
  { label: "Struktur", href: "#hierarchy" },
];

/* Nav items — dropdown "Lainnya" */
const navMore = [
  { label: "Fitur", href: "#features" },
  { label: "Update", href: "#announcements" },
  { label: "Event", href: "#events" },
  { label: "Rekrutmen", href: "#recruitment" },
  { label: "Bot", href: "#bot" },
  { label: "FAQ", href: "#faq" },
  { label: "Komentar", href: "#testimonials" },
  { label: "Galeri", href: "#gallery" },
];

/* Gabungan — untuk footer & hamburger mobile */
const nav = [...navMain, ...navAbout, ...navMore];

const navIcons: Record<string, typeof Home> = {
  Beranda: Home,
  Founder: Crown,
  Staff: Users,
  Donasi: Gift,
  Leaderboard: Trophy,
  Peraturan: ShieldCheck,
  Fitur: Sparkles,
  Update: Bell,
  Event: Calendar,
  Struktur: GitBranch,
  Rekrutmen: Handshake,
  Bot: Bot,
  FAQ: CircleHelp,
  Komentar: MessageCircle,
  Galeri: Camera,
};

const features = [
  {
    icon: BadgeCheck,
    title: "Student ID Card",
    desc: "Identitas member yang bisa bikin profil komunitas terasa lebih personal.",
  },
  {
    icon: Zap,
    title: "XP & Leveling",
    desc: "Naik level lewat aktivitas, interaksi, event, dan kontribusi di server.",
  },
  {
    icon: Store,
    title: "Role Shop",
    desc: "Role eksklusif untuk mempercantik identitas dan status member.",
  },
  {
    icon: Calendar,
    title: "Community Events",
    desc: "Event, game night, giveaway, challenge, dan aktivitas mingguan.",
  },
  {
    icon: MessageCircle,
    title: "Chill Community",
    desc: "Ruang ngobrol yang hangat, aktif, tapi tetap nyaman untuk silent reader.",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    desc: "Sistem ranking untuk member aktif dan peserta event terbaik.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "Kolaborasi antar komunitas dengan sistem benefit yang jelas.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Moderation",
    desc: "Staff membantu menjaga suasana tetap aman, rapi, dan kondusif.",
  },
];

const featureAccents = [
  "from-violet-500 to-fuchsia-500",
  "from-blue-500 to-cyan-400",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-rose-400 to-pink-500",
  "from-indigo-500 to-violet-500",
  "from-sky-400 to-blue-500",
  "from-lime-400 to-emerald-500",
];

const stats = [
  { label: "Members", value: "5,7K", icon: Users },
  { label: "Roles", value: "190+", icon: Crown },
  { label: "Online Daily", value: "1.4K+", icon: Zap },
  { label: "Events", value: "120+", icon: Calendar },
];

const announcements = [
  {
    title: "Recruitment staff dibuka",
    category: "Open",
    time: "Minggu ini",
    desc: "Beberapa posisi staff sedang dibuka untuk member yang aktif, rapi, dan siap ikut bantu komunitas.",
    icon: Megaphone,
    color: "from-violet-500 to-fuchsia-500",
    href: "#recruitment",
  },
  {
    title: "Event komunitas malam ini",
    category: "Event",
    time: "20.00 WIB",
    desc: "Sesi santai bareng member dengan mini game, ngobrol, dan reward kecil untuk peserta aktif.",
    icon: Calendar,
    color: "from-blue-500 to-cyan-400",
    href: discordUrl,
  },
  {
    title: "Rules server diperbarui",
    category: "Update",
    time: "Terbaru",
    desc: "Ada penyesuaian kecil agar channel tetap rapi dan pengalaman member baru lebih nyaman.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-400",
    href: "#rules",
  },
];

const pastEvents = [
  {
    title: "FUNMATCH MOBILE LEGENDS",
    date: "23 - 24 Januari 2026",
    category: "Tournament",
    desc: "Funmatch Mobile Legends antar member dengan match seru, comeback tidak terduga, dan suasana ramai khas voice chat Mystral.",
    stats: "Mobile Legends",
    image: "",
    poster: "/events/funmatch-mobile-legends/poster.jpg",
    documentation: [] as string[],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "PODCAST TRSRH.",
    date: "22 Januari 2026",
    category: "Podcast",
    desc: "Sesi podcast dan storytelling untuk berbagi cerita, pengalaman pribadi, dan kisah menarik dari member Mystral Academy.",
    stats: "Sharing Session",
    image: "",
    poster: "/events/podcast-trsrh/poster.jpg",
    documentation: [] as string[],
    color: "from-rose-400 to-pink-500",
  },
  {
    title: "THE WHISPERING TRIAL — DESCENT",
    date: "6 Februari 2026",
    category: "Riddle",
    desc: "Event riddle misterius untuk memecahkan clue, simbol, dan teka-teki dengan logika, ketelitian, dan kerja sama.",
    stats: "Mystery Trial",
    image: "",
    poster: "/events/the-whispering-trial-descent/poster.jpg",
    documentation: [] as string[],
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "WHEN THE LOVE FIND ITS VOICE",
    date: "15 Februari 2026",
    category: "Valentine",
    desc: "Event Valentine berisi menfess, couple game, blind date, dan challenge interaktif untuk seru-seruan bareng member.",
    stats: "Special Event",
    image: "",
    poster: "/events/when-the-love-find-its-voice/poster.jpg",
    documentation: [] as string[],
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "CHRONICLES OF RAMADHAN",
    date: "21 Februari 2026",
    category: "Ramadhan",
    desc: "Event Ramadan dengan sesi ceramah, kisah para nabi, dan pembelajaran ringan seputar makna bulan Ramadhan.",
    stats: "Ramadhan Session",
    image: "",
    poster: "/events/chronicles-of-ramadhan/poster.jpg",
    documentation: [] as string[],
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "SANTAI BARENG QUIZ (SABER)",
    date: "28 Februari 2026",
    category: "Quiz",
    desc: "Ngabuburit seru menjelang berbuka dengan quiz interaktif seputar Ramadhan untuk member Mystral Academy.",
    stats: "Ngabuburit Quiz",
    image: "",
    poster: "/events/santai-bareng-quiz-saber/poster.jpg",
    documentation: ["/events/Screenshot_20260309_211322_Gallery.webp"],
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "AFTER RAMADHAN : REAL STORIES",
    date: "1 April 2026",
    category: "Story Sharing",
    desc: "Sharing session setelah Ramadhan untuk membagikan cerita, pengalaman Lebaran, story reading, dan quiz santai.",
    stats: "Live Sharing",
    image: "",
    poster: "/events/after-ramadhan-real-stories/poster.jpg",
    documentation: [
      "/events/20260401_202026.webp",
      "/events/20260401_202040.webp",
    ],
    color: "from-sky-400 to-cyan-500",
  },
  {
    title: "MPL MYSTRAL TOURNAMENT!",
    date: "8 - 15 April 2026",
    category: "Tournament",
    desc: "Turnamen Mobile Legends antar tim Mystral Academy dengan pertandingan kompetitif dan momen terbaik tiap match.",
    stats: "MLBB Tournament",
    image: "",
    poster: "/events/mpl-mystral-tournament/poster.gif",
    documentation: ["/events/image.webp"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "NOBAR MALAM INI: SPIRITED AWAY",
    date: "17 April 2026",
    category: "Movie Night",
    desc: "Movie night bersama member untuk menikmati Spirited Away dalam suasana santai, hangat, dan penuh nostalgia.",
    stats: "Movie Night",
    image: "",
    poster: "/events/nobar-spirited-away/poster.jpg",
    documentation: ["/events/Screenshot_20260417_195256_com.discord.webp"],
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    title: "The Kartini Academy : When Modern Meets Legacy",
    date: "23 April 2026",
    category: "Kartini Day",
    desc: "Perayaan Kartini lewat lomba puisi dan peragaan busana yang memadukan gaya modern dengan semangat legacy.",
    stats: "Creative Event",
    image: "",
    poster: "/events/the-kartini-academy/poster.jpg",
    documentation: [] as string[],
    color: "from-orange-400 to-rose-500",
  },
];

function eventCover(event: (typeof pastEvents)[number]) {
  return event.poster || event.image || event.documentation[0] || "";
}

function eventGalleryItems(event: (typeof pastEvents)[number]) {
  const cover = eventCover(event);
  const documentation = event.documentation.map((image, index) => ({
    title: `${event.title} #${index + 1}`,
    label: "Dokumentasi Event",
    image,
    color: event.color,
  }));

  return [
    {
      title: event.title,
      label: event.category,
      image: cover,
      color: event.color,
    },
    ...documentation,
  ];
}

const eventDetails: Record<string, string> = {
  "FUNMATCH MOBILE LEGENDS":
    "Event seru yang mempertemukan member Mystral Academy dalam pertandingan Mobile Legends penuh tawa, keseruan, dan momen chaos khas Land of Dawn. Dari match bareng, comeback tidak terduga, sampai suasana ramai di voice chat, semuanya jadi bagian dari pengalaman kompetitif yang tetap santai dan menyenangkan.",
  "PODCAST TRSRH.":
    "Sesi sharing dan storytelling bareng member Mystral Academy untuk mendengarkan dan berbagi cerita, pengalaman pribadi, serta kisah menarik dari setiap member. Event ini dibuat sebagai ruang ngobrol yang santai, hangat, dan memberi kesempatan member untuk saling mengenal lewat cerita.",
  "THE WHISPERING TRIAL — DESCENT":
    "Event riddle dan teka-teki yang mengajak peserta memecahkan clue, simbol, dan pertanyaan misterius yang sudah disiapkan. Setiap riddle punya petunjuk tersembunyi yang membutuhkan logika, ketelitian, dan kerja sama, dengan suasana menegangkan tapi tetap seru untuk dimainkan bersama.",
  "WHEN THE LOVE FIND ITS VOICE":
    "Event Valentine special yang diisi dengan menfess, couple game, blind date, dan challenge interaktif lainnya. Event ini dibuat untuk seru-seruan, berbagi pesan, menguji chemistry, dan membuka kesempatan member untuk kenalan dalam suasana santai, ringan, dan penuh keseruan.",
  "CHRONICLES OF RAMADHAN":
    "Event Ramadan bersama member Mystral Academy yang berisi sesi ceramah, penyampaian kisah para nabi, dan pembelajaran ringan seputar makna Ramadhan. Kegiatannya dibuat hangat dan reflektif agar member bisa menikmati momen Ramadan sambil tetap merasa dekat dengan komunitas.",
  "SANTAI BARENG QUIZ (SABER)":
    "Event ngabuburit interaktif yang mengajak member mengisi waktu menjelang berbuka dengan quiz seputar Ramadhan. Formatnya santai, mudah diikuti, dan dibuat untuk menciptakan suasana ramai sebelum waktu berbuka bersama komunitas.",
  "AFTER RAMADHAN : REAL STORIES":
    "Event sharing setelah Ramadhan untuk membagikan cerita, pengalaman Lebaran, momen lucu, dan hal berkesan yang terjadi selama bulan suci. Lewat live sharing session, story reading, dan quiz santai, member bisa saling mendengarkan cerita dari sudut pandang yang berbeda.",
  "MPL MYSTRAL TOURNAMENT!":
    "Turnamen Mobile Legends bersama member Mystral Academy yang menghadirkan pertandingan kompetitif antar tim. Event ini menjadi ruang untuk menunjukkan strategi, chemistry tim, dan momen terbaik dari setiap match, sambil tetap membawa vibes seru khas komunitas.",
  "NOBAR MALAM INI: SPIRITED AWAY":
    "Movie night bersama member Mystral Academy untuk menikmati film Spirited Away dalam suasana santai dan hangat. Event ini mengajak member menikmati perjalanan penuh keajaiban, misteri, dan emosi sambil ngobrol ringan bersama komunitas.",
  "The Kartini Academy : When Modern Meets Legacy":
    "Event untuk merayakan semangat Kartini lewat kreativitas dan keberanian student masa kini. Kegiatannya menghadirkan lomba puisi bertema Kartini dan peragaan busana yang memadukan gaya modern dengan semangat perjuangan perempuan Indonesia.",
};

function eventDetail(event: (typeof pastEvents)[number]) {
  return eventDetails[event.title] || event.desc;
}

const faqItems = [
  {
    question: "Bagaimana cara join Mystral Academy?",
    answer:
      "Klik tombol Gabung Discord, masuk ke server, lalu baca arahan awal di channel welcome dan rules.",
  },
  {
    question: "Bagaimana cara mengambil role?",
    answer:
      "Role bisa diambil melalui channel take role atau fitur role yang tersedia di server. Pilih role yang sesuai minat dan aktivitasmu.",
  },
  {
    question: "Bagaimana cara daftar staff?",
    answer:
      "Cek bagian Open Recruitment, pilih posisi yang cocok, lalu isi form pendaftaran staff yang sudah disediakan.",
  },
  {
    question: "Bagaimana cara donasi atau support server?",
    answer:
      "Kamu bisa cek bagian Donation & Boost Support untuk melihat minimum donasi, benefit, dan cara konfirmasi.",
  },
  {
    question: "Rules penting apa yang harus diperhatikan?",
    answer:
      "Jaga bahasa, hindari spam, gunakan channel sesuai fungsi, jangan promosi tanpa izin, dan ikuti arahan staff.",
  },
];

const staff: StaffMember[] = [
  {
    name: "Ramzy",
    role: ["Founder", "Archduke"],
    color: "from-violet-300 to-fuchsia-400",
    avatar: "/founders/ramzy.jpeg",
  },
  {
    name: "Cyizzie",
    role: ["Founder", "Archmagister", "Developer"],
    color: "from-rose-200 to-pink-300",
    avatar: "/founders/cyizzie.jpg",
  },
  {
    name: "Bara",
    role: ["Founder", "Archmagister", "Developer"],
    color: "from-blue-300 to-indigo-400",
  },
    {
    name: "Lanaa",
    role: ["Founder", "Sentinel"],
    color: "from-rose-200 to-pink-300",
    avatar: "/founders/lana.webp",
  },
  {
    name: "Valent",
    role: ["Founder", "Archmage"],
    color: "from-cyan-300 to-blue-400",
  },
  {
    name: "Nniel",
    role: "Archmage",
    color: "from-purple-300 to-pink-300",
  },
  {
    name: "Arin",
    role: "Archmage",
    color: "from-purple-300 to-pink-300",
  },
  {
    name: "Kairos",
    role: "Developer",
    color: "from-blue-300 to-cyan-400",
  },
  {
    name: "Jila",
    role: ["Head Division", "Archivist"],
    color: "from-amber-200 to-orange-300",
    avatar: "/founders/jila.jpeg",
  },
  {
    name: "Irfanx",
    role: ["Head Division", "Sentinel"],
    color: "from-violet-200 to-fuchsia-300",
  },
  {
    name: "Chloee",
    role: "Sentinel",
    color: "from-pink-200 to-rose-300",
  },

  { name: "Curryy", role: "Lunaris", color: "from-pink-300 to-violet-300" },
  {
    name: "wdym, juu",
    role: "Lunaris",
    color: "from-violet-200 to-indigo-300",
  },
  {
    name: "Bami",
    role: "Lunaris",
    color: "from-purple-200 to-fuchsia-300",
  },
  {
    name: "Irish",
    role: "Lunaris",
    color: "from-sky-200 to-cyan-300",
  },
  {
    name: "AltáirCàlm",
    role: "Lunaris",
    color: "from-indigo-200 to-violet-300",
  },
  {
    name: "Nici",
    role: "Lunaris",
    color: "from-orange-200 to-pink-300",
  },
  {
    name: "Rsyaa",
    role: "Lunaris",
    color: "from-yellow-200 to-orange-300",
  },
  {
    name: "Hiro",
    role: "Lunaris",
    color: "from-cyan-200 to-sky-300",
  },
  {
    name: "Vicay",
    role: "Lunaris",
    color: "from-purple-300 to-indigo-400",
  },
  { name: "Kai", role: "Lunaris", color: "from-fuchsia-200 to-pink-300" },
  { name: "Lana", role: "Lunaris", color: "from-rose-200 to-pink-300" },
  {
    name: "Julius Caesar",
    role: "Artemist",
    color: "from-orange-200 to-amber-300",
  },
  { name: "Pici", role: "Artemist", color: "from-pink-200 to-orange-300" },
  { name: "Stuffed", role: "Artemist", color: "from-violet-200 to-pink-300" },
  { name: "Vilen", role: "Artemist", color: "from-purple-200 to-violet-300" },
  { name: "Scellan", role: "Artisant", color: "from-fuchsia-300 to-pink-400" },
  {
    name: "Mintea",
    role: "Arcane Ally",
    color: "from-emerald-200 to-cyan-300",
  },
];

const founders: Founder[] = [
  {
    name: "Ramzy",
    role: "Founder • Archduke",
    desc: "Menentukan arah besar, konsep, tema, dan identitas utama Mystral Academy.",
    color: "from-violet-300 to-fuchsia-400",
    banner: "from-violet-900 via-purple-800 to-fuchsia-900",
    bio: "Founder dan owner Mystral Academy. Suka bikin komunitas yang rapi, punya vibes sendiri, dan kerasa kayak rumah kedua buat semua member.",
    discord: "couldberamzy",
    tiktok: "@couldberamzy",
    avatar: "/founders/ramzy.jpeg",
  },
  {
    name: "Cyizzie",
    role: "Founder • Archmagister",
    desc: "Membangun sistem server, bot Cyza, dan pengalaman komunitas yang nyaman dan rapi.",
    color: "from-pink-300 to-violet-400",
    banner: "from-pink-900 via-rose-800 to-violet-900",
    bio: "Co-founder sekaligus developer bot Cyza. Bantu bentuk sistem, nuansa, dan semua hal teknis yang bikin server ini berjalan rapi.",
    discord: "2cyi",
    tiktok: "@chyzee26",
    avatar: "/founders/cyizzie.jpg",
  },
  {
    name: "Bara",
    role: "Founder • Archmagister",
    desc: "Membantu pengelolaan komunitas dan menjaga jalannya sistem utama server.",
    color: "from-blue-300 to-indigo-400",
    banner: "from-blue-900 via-indigo-800 to-blue-900",
    bio: "Bagian dari tim inti yang jaga server tetap berjalan rapi. Banyak hal penting yang dia handle di balik layar.",
    discord: "bara",
  },
  {
    name: "Lana",
    role: "Founder • Sentinel",
    desc: "Membantu membentuk karakter komunitas yang hangat, ramah, dan member-friendly.",
    color: "from-rose-200 to-pink-400",
    banner: "from-rose-900 via-pink-800 to-rose-900",
    bio: "Bagian dari tim yang bikin komunitas ini kerasa hangat dan nyaman buat semua orang. Selalu ada buat member yang baru masuk.",
    discord: "alyciawy",
    avatar: "/founders/lana.webp",
  },
  {
    name: "Valent",
    role: "Founder • Archmage",
    desc: "Mendukung pengawasan komunitas, kenyamanan member, dan koordinasi staff.",
    color: "from-cyan-300 to-blue-400",
    banner: "from-cyan-900 via-blue-800 to-indigo-900",
    bio: "Membantu pengawasan dan koordinasi komunitas. Selalu siap kalau ada yang butuh sesuatu atau punya pertanyaan.",
    discord: "valentothemoon.",
    tiktok: "@valent.0787",
  },
];

const staffPositions = [
  {
    id: "developer",
    icon: Code2,
    title: "Developer",
    subtitle: "Technical Development",
    color: "from-blue-400 to-indigo-500",
    desc: "Bikin bot, website, atau tools yang mendukung kebutuhan komunitas dan event akademi.",
    tags: ["Bot Discord", "Web Dev", "Tools"],
  },
  {
    id: "artemis",
    icon: Calendar,
    title: "Artemis",
    subtitle: "Event Organizer",
    color: "from-pink-400 to-rose-500",
    desc: "Tanggung jawab atas perencanaan, pelaksanaan, dan evaluasi event atau kegiatan resmi akademi.",
    tags: ["Event Planning", "Koordinasi", "Evaluasi"],
  },
  {
    id: "arcane-ally",
    icon: Handshake,
    title: "Arcane Ally",
    subtitle: "Partnership",
    color: "from-emerald-400 to-teal-500",
    desc: "Kelola kerjasama partnership dan jaga hubungan baik antar server partner.",
    tags: ["Partnership", "Kolaborasi", "Relasi"],
  },
  {
    id: "visionary",
    icon: Camera,
    title: "Visionary",
    subtitle: "Editor Video",
    color: "from-orange-400 to-amber-500",
    desc: "Kembangkan ide konten biar makin menarik, terus edit video dan kebutuhan visual komunitas.",
    tags: ["Video Editing", "Konten", "Visual"],
  },
  {
    id: "archivist",
    icon: Megaphone,
    title: "Archivist",
    subtitle: "Social Management",
    color: "from-violet-400 to-purple-500",
    desc: "Buat konten sesuai branding Mystral, unggah di TikTok, dan manage sosmed komunitas.",
    tags: ["TikTok", "Konten", "Sosmed"],
  },
];

const donationPerks = [
  {
    icon: Crown,
    title: "Role 💸 Rich Mage 💸",
    desc: "Role permanent eksklusif sebagai identitas resmi donatur di server.",
  },
  {
    icon: Users,
    title: "Voice Channel Khusus",
    desc: "Akses ke voice channel yang di-lock dan di-hide khusus untuk donatur.",
  },
  {
    icon: Zap,
    title: "Prioritas Respon Staff",
    desc: "Pertanyaan dan keperluanmu direspons lebih cepat oleh tim staff.",
  },
  {
    icon: Star,
    title: "Prioritas Join Event",
    desc: "Masuk event atau voice channel tertentu lebih awal dari member biasa.",
  },
  {
    icon: Heart,
    title: "Support Diprioritaskan",
    desc: "Feedback dan saran dari kamu lebih diperhatikan oleh tim Mystral.",
  },
];

const boosterPerks = [
  {
    icon: Crown,
    title: "Role @Mystic Supporter",
    desc: "Identitas resmi pendukung server yang terlihat oleh semua member.",
  },
  {
    icon: Sparkles,
    title: "Custom Name Color",
    desc: "Akses ke channel 🎁﹕custom-role untuk setting warna nama sesukamu.",
  },
  {
    icon: Calendar,
    title: "Priority Event & Giveaway",
    desc: "Slot lebih awal di setiap event dan giveaway komunitas.",
  },
  {
    icon: Paperclip,
    title: "Advanced Chat Permissions",
    desc: "Bisa embed link, attach files, dan pakai external emoji di semua channel.",
  },
  {
    icon: Smile,
    title: "Custom Emoji Request",
    desc: "Bisa request emoji custom di server (syarat & ketentuan berlaku).",
  },
  {
    icon: ShieldCheck,
    title: "Priority Support Ticket",
    desc: "Tiket support-mu lebih cepat ditangani dan diprioritaskan oleh staff.",
  },
];

const bots = [
  {
    name: "Cyza",
    desc: "Pusat sistem server untuk welcome, take role, menfess, ID card, student card, dan automasi harian.",
    creator: "Cyizzie",
    creatorRole: "Founder, Archmagister, Developer",
    color: "from-violet-400 to-fuchsia-500",
    glow: "rgba(167,139,250,.35)",
  },
  {
    name: "Gruvale",
    desc: "Mengurus role shop dan leveling. Member bisa kumpulkan poin dari aktivitas lalu tukar reward.",
    creator: "Bara",
    creatorRole: "Founder, Archmagister",
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(96,165,250,.35)",
  },
  {
    name: "Alexandra",
    desc: "Mencatat aktivitas role secara otomatis agar perubahan penting tetap mudah dipantau staff.",
    creator: null,
    creatorRole: "Official Bot",
    color: "from-rose-400 to-pink-500",
    glow: "rgba(251,113,133,.35)",
  },
  {
    name: "Roxy Lyrielle Sylvestra",
    desc: "Membantu partnership, reminder internal staff Lunaris, dan leaderboard aktivitas member.",
    creator: null,
    creatorRole: "Official Bot",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,.35)",
  },
];

const leaderboardData = {
  sponsors: [{ rank: 1, name: "michelinea", amount: "Rp 800.000" }],
  donators: [
    { rank: 1, name: "ardiirorr", amount: "Rp 300.000" },
    { rank: 2, name: "ayapaw", amount: "Rp 150.000" },
    { rank: 3, name: "victoriesberry", amount: "Rp 50.000" },
    { rank: 4, name: "lovely_feyy", amount: "Rp 35.000" },
    { rank: 5, name: "aethrayn", amount: "Rp 30.000" },
  ],
  topChat: [
    { rank: 1, name: "jia midnιтє 𝗯𝗯𝗯𝗯𝚀𝚌𝚌𝚌 🪹🍧🪄✨🔮🪷" },
    { rank: 2, name: "iann`#AboutSampean1945" },
    { rank: 3, name: "The (V)one and Only" },
    { rank: 4, name: "I F A Backburner" },
    { rank: 5, name: "Ayell | bayi Irishh≥̂^\u2022 ˕ \u2022 ྀ≤̂" },
  ],
  topVoice: [
    { rank: 1, name: "Reyeon" },
    { rank: 2, name: "Pufferfish #blubmuda" },
    { rank: 3, name: "𝑠𝑒𝑚𝑢𝑡𝑡𝑡" },
    { rank: 4, name: "viélᴶ ᶉ 𐀁" },
    { rank: 5, name: "Jett" },
  ],
};

const rulesData = [
  {
    id: 1,
    title: "Saling Menghormati",
    points: "1–6",
    desc: "Hormati seluruh warga server tanpa terkecuali. Dilarang menghina, merendahkan, diskriminasi, atau memprovokasi konflik.",
  },
  {
    id: 2,
    title: "Gunakan Channel & Tag Role Sesuai Fungsinya",
    points: "1",
    desc: "Gunakan channel sesuai topiknya agar server tetap rapi. Dilarang spam mention atau @everyone/@here tanpa izin staff.",
  },
  {
    id: 3,
    title: "Kebisingan di Voice Channel",
    points: "1–2",
    desc: "Gunakan Noise Suppression bila diperlukan. Hindari suara bising, teriakan, mic berisik, atau soundboard berlebihan.",
  },
  {
    id: 4,
    title: "Username, Display Name & Foto Profil",
    points: "1–5",
    desc: "Nama dan foto profil harus sopan, tidak mengandung unsur ofensif, SARA, vulgar, atau meniru identitas staff.",
  },
  {
    id: 5,
    title: "Drama, Toxic & Kata Kasar",
    points: "1–6",
    desc: "Dilarang membuat drama, berkata kasar, atau bersikap toxic yang memicu konflik dan bikin suasana tidak nyaman.",
  },
  {
    id: 6,
    title: "Spam",
    points: "3–4",
    desc: "Segala bentuk spam dilarang: teks berulang, caps berlebihan, flood emoji, spam voice, maupun soundboard.",
  },
  {
    id: 7,
    title: "Spam Link Phishing",
    points: "5–6",
    desc: "Dilarang mengirim link phishing, scam, atau tautan mencurigakan yang berpotensi merugikan pengguna lain.",
  },
  {
    id: 8,
    title: "Promosi & Jual Beli",
    points: "1",
    desc: "Tidak diperbolehkan mempromosikan server lain atau jual beli tanpa izin staff. Promosi via DM tanpa izin juga pelanggaran.",
  },
  {
    id: 9,
    title: "Topik Sensitif",
    points: "1–4",
    desc: "Hindari pembahasan politik, agama, atau topik sensitif lainnya yang dapat memicu perdebatan atau konflik antar member.",
  },
  {
    id: 10,
    title: "Perilaku Tidak Menyenangkan",
    points: "3–6",
    desc: "Dilarang melakukan pelecehan, bullying, ancaman, atau tindakan yang membuat member lain tidak nyaman di chat, DM, maupun voice.",
  },
  {
    id: 11,
    title: "Perilaku Menyimpang",
    points: "3–6",
    desc: "Segala bentuk perilaku yang tidak sesuai norma umum dan mengganggu kenyamanan server akan ditindak tegas.",
  },
  {
    id: 12,
    title: "Menyamar / Impersonation",
    points: "6",
    desc: "Dilarang menyamar sebagai staff atau pihak lain dengan tujuan menipu, bercanda berlebihan, atau menyesatkan member.",
  },
  {
    id: 13,
    title: "Konten Tidak Pantas",
    points: "6",
    desc: "Dilarang mengirim konten NSFW, vulgar, atau konten yang tidak pantas di server ini.",
  },
  {
    id: 14,
    title: "Promosi Judi Online",
    points: "6",
    desc: "Segala promosi judi online termasuk link, referral, atau ajakan bermain sangat dilarang.",
  },
  {
    id: 15,
    title: "Penyalahgunaan DM",
    points: "2–4",
    desc: "Dilarang spam, promosi, atau perilaku tidak menyenangkan melalui DM tanpa persetujuan member.",
  },
  {
    id: 16,
    title: "Penyalahgunaan Bot",
    points: "2–4",
    desc: "Dilarang spam command, exploit bug, atau abuse fitur bot yang mengganggu jalannya server.",
  },
  {
    id: 17,
    title: "Provokasi & Adu Domba",
    points: "4–6",
    desc: "Dilarang memancing konflik, menyebarkan isu, atau mengadu domba antar member.",
  },
  {
    id: 18,
    title: "Kepatuhan terhadap Staff",
    points: "1–4",
    desc: "Member wajib mengikuti arahan staff. Jika tidak setuju, sampaikan dengan sopan melalui jalur yang benar.",
  },
  {
    id: 19,
    title: "Toxicity & Provokasi",
    points: "2–6",
    desc: "Toxic, flame, baiting, atau provokasi konflik dalam bentuk apapun tidak diperbolehkan.",
  },
  {
    id: 20,
    title: "Voice Channel Rules",
    points: "1–3",
    desc: "Di VC: tidak berteriak atau mic terlalu keras, tidak spam soundboard, tidak mengganggu percakapan orang lain.",
  },
];

const sanctionsData = [
  {
    points: 1,
    label: "Peringatan (Warning)",
    color: "from-yellow-400 to-amber-500",
    bg: "from-yellow-500/15 to-amber-500/10",
  },
  {
    points: 2,
    label: "Timeout 1 jam",
    color: "from-orange-400 to-amber-500",
    bg: "from-orange-500/15 to-amber-500/10",
  },
  {
    points: 3,
    label: "Timeout 1 hari",
    color: "from-orange-500 to-red-400",
    bg: "from-orange-500/15 to-red-500/10",
  },
  {
    points: 4,
    label: "Kick dari server",
    color: "from-red-400 to-rose-500",
    bg: "from-red-500/15 to-rose-500/10",
  },
  {
    points: 5,
    label: "Banned Sementara",
    color: "from-red-500 to-rose-600",
    bg: "from-red-500/15 to-rose-600/10",
  },
  {
    points: 6,
    label: "Banned Permanen",
    color: "from-rose-600 to-red-700",
    bg: "from-rose-600/15 to-red-700/10",
  },
];

function initialOf(name: string) {
  return Array.from(name.trim())[0]?.toUpperCase() || "?";
}

function formatCommentTime(comment: MemberComment) {
  const rawTime = comment.createdAt || comment.time;
  const sentAt = new Date(rawTime);

  if (Number.isNaN(sentAt.getTime())) return comment.time;

  const diffMs = Date.now() - sentAt.getTime();
  const diffMinutes = Math.max(0, Math.floor(diffMs / 60000));

  if (diffMinutes < 1) return "baru saja";
  if (diffMinutes < 60) return `${diffMinutes} menit lalu`;
  if (diffMinutes < 24 * 60) {
    const diffHours = Math.floor(diffMinutes / 60);
    return `${diffHours} jam lalu`;
  }

  return sentAt.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function staffRoles(member: StaffMember): string[] {
  return Array.isArray(member.role) ? member.role : [member.role];
}

function RolePill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-[var(--card2)] px-3 py-1 text-xs font-black text-[var(--soft)] shadow-[0_6px_14px_rgba(15,23,42,.08)]">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
  id,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-[1.6rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_18px_60px_rgba(0,0,0,.16)] md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      {/* Fallback gradient + Moon selalu ada, logo.png overlay di atasnya */}
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-950 shadow-[0_0_34px_rgba(139,92,246,.35)]">
        <Moon size={21} className="text-white" />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#f4b47b]" />
        <Image
          src="/logo.png"
          alt="Mystral Academy"
          fill
          sizes="44px"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div>
        <p className="font-serif text-xl font-black tracking-[0.18em] text-[var(--text)]">
          MYSTRAL
        </p>
        <p className="-mt-1 text-[10px] font-black tracking-[0.35em] text-[var(--soft)]">
          ACADEMY
        </p>
      </div>
    </a>
  );
}

function Topbar({
  theme,
  setTheme,
}: {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = nav
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const syncFromHash = () => {
      if (window.location.hash) setActiveSection(window.location.hash);
    };

    syncFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-32% 0px -56% 0px",
        threshold: [0.12, 0.28, 0.45],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  /* Tutup dropdown saat klik luar */
  useEffect(() => {
    if (!aboutOpen && !moreOpen) return;
    const close = () => {
      setAboutOpen(false);
      setMoreOpen(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [aboutOpen, moreOpen]);

  const aboutActive = navAbout.some((item) => item.href === activeSection);
  const moreActive = navMore.some((item) => item.href === activeSection);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.6rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,.16)] backdrop-blur-2xl">
          <Logo />

          {/* Desktop nav — main items + dropdown */}
          <div className="hidden items-center gap-1 lg:flex">
            {navMain.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <div key={item.label} className="flex items-center gap-1">
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-xl px-3 py-2 text-xs font-black transition ${
                      isActive
                        ? "text-[var(--text)]"
                        : "text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[var(--soft)]" />
                    )}
                  </a>

                  {item.label === "Beranda" && (
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setAboutOpen((v) => !v);
                          setMoreOpen(false);
                        }}
                        className={`flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-black transition ${
                          aboutActive || aboutOpen
                            ? "text-[var(--text)]"
                            : "text-[var(--muted)] hover:text-[var(--text)]"
                        }`}
                        aria-expanded={aboutOpen}
                      >
                        Tentang Kami
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-200 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {aboutOpen && (
                        <div
                          className="absolute left-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,.2)] backdrop-blur-2xl"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="mb-1 border-b border-[var(--border)] px-3 pb-1.5 pt-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                              Tentang Kami
                            </p>
                          </div>
                          {navAbout.map((aboutItem) => {
                            const Icon = navIcons[aboutItem.label] || Users;
                            const aboutItemActive =
                              activeSection === aboutItem.href;
                            return (
                              <a
                                key={aboutItem.label}
                                href={aboutItem.href}
                                onClick={() => setAboutOpen(false)}
                                aria-current={
                                  aboutItemActive ? "page" : undefined
                                }
                                className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-black transition ${
                                  aboutItemActive
                                    ? "bg-white/10 text-[var(--text)]"
                                    : "text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]"
                                }`}
                              >
                                <Icon
                                  size={15}
                                  className={
                                    aboutItemActive
                                      ? "text-[var(--accent2)]"
                                      : "text-[var(--soft)]"
                                  }
                                />
                                {aboutItem.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Dropdown Lainnya */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMoreOpen((v) => !v);
                  setAboutOpen(false);
                }}
                className={`flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-black transition ${
                  moreActive || moreOpen
                    ? "text-[var(--text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
                aria-expanded={moreOpen}
              >
                Lainnya
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreOpen && (
                <div
                  className="absolute right-0 top-full z-50 mt-3 w-52 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,.2)] backdrop-blur-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mb-1 border-b border-[var(--border)] px-3 pb-1.5 pt-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                      Menu Lainnya
                    </p>
                  </div>
                  {navMore.map((item) => {
                    const Icon = navIcons[item.label] || Sparkles;
                    const isActive = activeSection === item.href;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-black transition ${
                          isActive
                            ? "bg-white/10 text-[var(--text)]"
                            : "text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]"
                        }`}
                      >
                        <Icon
                          size={15}
                          className={
                            isActive
                              ? "text-[var(--accent2)]"
                              : "text-[var(--soft)]"
                          }
                        />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Kanan: tombol theme + discord + hamburger selalu satu grup */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "pastel" : "dark")}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-white/10 text-[var(--text)] transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/15"
              aria-label="Ganti theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={discordUrl}
              className="hidden rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-5 py-3 text-sm font-black text-white shadow-[0_0_34px_rgba(139,92,246,.35)] transition hover:scale-[1.03] lg:block"
            >
              Gabung Discord
            </a>

            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-white/10 text-[var(--text)] transition hover:bg-white/15 lg:hidden"
              aria-label="Buka menu"
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-sm lg:hidden">
          <aside className="ml-auto h-full w-[86%] max-w-sm overflow-y-auto border-l border-[var(--border)] bg-[var(--bg)] p-5 shadow-[0_0_80px_rgba(0,0,0,.45)]">
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-white/10 text-[var(--text)]"
                aria-label="Tutup menu"
              >
                <X />
              </button>
            </div>

            <div className="space-y-2">
              {nav.map((item) => {
                const Icon = navIcons[item.label] || Sparkles;
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${
                      isActive
                        ? "bg-white/10 text-[var(--text)]"
                        : "text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Icon
                        size={17}
                        className="text-[var(--accent2)]"
                      />
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--soft)]" />
                    )}
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "pastel" : "dark")}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-5 py-4 text-sm font-black text-[var(--text)]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              Ganti Theme
            </button>

            <a
              href={discordUrl}
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-5 py-4 text-sm font-black text-white"
            >
              <Gamepad2 size={18} />
              Gabung Discord
            </a>
          </aside>
        </div>
      )}
    </>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[var(--soft)]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-black leading-tight text-[var(--text)] md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
          {desc}
        </p>
      )}
    </motion.div>
  );
}

function Avatar({ name, small = false }: { name: string; small?: boolean }) {
  return (
    <div
      className={`${small ? "h-9 w-9 text-xs" : "h-12 w-12 text-sm"} grid shrink-0 place-items-center rounded-full border border-white/70 bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-700 font-black text-white shadow-[0_8px_22px_rgba(49,46,129,.28)] ring-2 ring-[var(--bg)]`}
    >
      <span suppressHydrationWarning>{initialOf(name)}</span>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-full bg-violet-600/20 blur-[80px]" />
      <Card className="relative p-3 sm:p-4">
        <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card2)] p-3 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <Avatar name="Mystral" />
              <div className="min-w-0">
                <p className="truncate text-sm font-black text-[var(--text)] sm:text-base">
                  Mystral Academy
                </p>
                <p className="truncate text-[10px] text-[var(--muted)] sm:text-xs">
                  Discord Community Preview
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-black text-emerald-400 sm:px-3 sm:text-xs">
              Online
            </span>
          </div>

          <div className="grid grid-cols-[0.72fr_1.28fr] gap-2 sm:gap-3">
            <div className="space-y-1.5 rounded-2xl border border-[var(--border)] bg-white/[0.04] p-2 sm:space-y-2 sm:p-3">
              {[
                "welcome",
                "rules",
                "announcements",
                "general-chat",
                "event-info",
                "role-shop",
              ].map((x) => (
                <div
                  key={x}
                  className="truncate rounded-xl px-2 py-1.5 text-[10px] font-black text-[var(--muted)] first:bg-white/10 first:text-[var(--text)] sm:px-3 sm:py-2 sm:text-xs"
                >
                  # {x}
                </div>
              ))}
            </div>

            <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-white/[0.04] p-2.5 sm:p-4">
              <p className="mb-3 text-xs font-black text-[var(--text)] sm:mb-4 sm:text-sm">
                # welcome
              </p>
              {[
                [
                  "Ramzy",
                  "Welcome to Mystral Academy. Jangan lupa baca rules ya!",
                ],
                ["cyizzie", "Yuk kenalan di general chat, semua welcome."],
                ["Lana", "Event minggu ini bakal seru, stay tune!"],
              ].map(([name, text]) => (
                <div key={name} className="mb-3 flex gap-2 sm:mb-4 sm:gap-3">
                  <Avatar name={name} small />
                  <div className="min-w-0">
                    <p className="text-xs font-black text-[var(--text)]">
                      {name}
                    </p>
                    <p className="line-clamp-2 text-[11px] leading-5 text-[var(--muted)] sm:text-sm">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-3 truncate rounded-2xl border border-[var(--border)] bg-white/5 px-3 py-2 text-[11px] text-[var(--muted)] sm:mt-5 sm:px-4 sm:py-3 sm:text-sm">
                Message #welcome
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-10 pt-[104px] sm:pt-[96px] lg:px-10 lg:pt-[84px]"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:min-h-[600px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/10 px-4 py-2 text-xs font-black text-[var(--soft)] backdrop-blur-xl">
            <Sparkles size={15} />
            Discord Community
          </div>

          <h1 className="max-w-3xl font-serif text-6xl font-black leading-[0.92] tracking-tight text-[var(--text)] md:text-8xl">
            Mystral
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-[#f4b47b] bg-clip-text text-transparent">
              Academy
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Komunitas Discord yang hangat, rapi, aesthetic, dan penuh aktivitas.
            Temukan teman baru, ikut event, dapatkan role eksklusif, dan jadi
            bagian dari keluarga Mystral Academy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={discordUrl}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-6 py-4 text-sm font-black text-white shadow-[0_0_40px_rgba(139,92,246,.35)] transition hover:scale-[1.03]"
            >
              <Send size={18} />
              Gabung Sekarang
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-6 py-4 text-sm font-black text-[var(--text)] backdrop-blur-xl transition hover:bg-white/15"
            >
              Lihat Fitur
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {founders.map((f) => (
                <Avatar key={f.name} name={f.name} small />
              ))}
              <div className="grid h-8 w-14 place-items-center rounded-full bg-white/15 text-xs font-black text-[var(--text)] ring-2 ring-[var(--bg)]">
                +5.7K
              </div>
            </div>
            <p className="text-sm font-bold text-[var(--muted)]">
              member aktif dan komunitas terus berkembang
            </p>
          </div>
        </div>

        <HeroMockup />
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 md:-mt-10 md:grid-cols-4 md:gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex min-h-[78px] items-center gap-2.5 rounded-[1.35rem] border border-[var(--border)] bg-[var(--card)] px-3 py-3 shadow-[0_8px_18px_rgba(0,0,0,.08)] sm:min-h-[92px] sm:gap-4 sm:rounded-[1.6rem] sm:px-5 sm:py-5 md:shadow-[0_12px_40px_rgba(0,0,0,.18)]"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-[var(--soft)] sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-black leading-none text-[var(--text)] sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 truncate text-[9px] text-[var(--muted)] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-4 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Fitur Unggulan"
          title="Lebih dari sekadar server Discord"
          desc="Fitur komunitas dibuat agar member punya aktivitas, identitas, dan alasan untuk kembali."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, index) => {
            const Icon = f.icon;
            const accent = featureAccents[index % featureAccents.length];
            return (
              <Card
                key={f.title}
                className="group relative min-h-[250px] overflow-hidden text-left transition hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`}
                />
                <div
                  className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-[0_12px_28px_rgba(15,23,42,.2)]`}
                >
                  <Icon size={25} />
                </div>
                <h3 className="text-lg font-black text-[var(--text)]">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {f.desc}
                </p>
                <div className="mt-5 h-px w-16 bg-gradient-to-r from-[var(--soft)] to-transparent opacity-60" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MiniFeatures() {
  const items = [
    {
      icon: Megaphone,
      title: "Announcement Center",
      desc: "Info event, update server, dan pengumuman penting.",
    },
    {
      icon: Gift,
      title: "Giveaway Area",
      desc: "Tempat hadiah dan reward komunitas.",
    },
    {
      icon: Search,
      title: "Role Discovery",
      desc: "Bantu member menemukan role dan divisi yang cocok.",
    },
  ];

  return (
    <section className="px-4 py-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          const accent = featureAccents[(index + 2) % featureAccents.length];
          return (
            <Card
              key={item.title}
              className="relative overflow-hidden p-5 md:p-5"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function AnnouncementPanel() {
  return (
    <section
      id="announcements"
      className="relative overflow-hidden px-4 py-16 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(124,92,255,.08),transparent_42%,rgba(20,184,166,.08))]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--soft)]">
              Live Announcement
            </p>
            <h2 className="mt-2 font-serif text-3xl font-black text-[var(--text)] md:text-5xl">
              Update terbaru server
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Ringkasan informasi penting agar member tidak ketinggalan event,
              pendaftaran, dan perubahan server.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-xs font-black text-[var(--muted)]">
            <Bell size={15} className="text-[var(--soft)]" />
            Update board
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {announcements.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group relative overflow-hidden rounded-[1.45rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_16px_44px_rgba(15,23,42,.12)] transition hover:-translate-y-1 hover:border-violet-400/45"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.color}`}
                />
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-[0_10px_26px_rgba(15,23,42,.18)]`}
                  >
                    <Icon size={21} />
                  </div>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--card2)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--soft)]">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-black text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-[var(--muted)]">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--muted)]">
                    <Clock3 size={14} className="text-[var(--soft)]" />
                    {item.time}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[var(--soft)] transition group-hover:translate-x-0.5">
                    Lihat
                    <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EventHistorySection() {
  const [showEventArchive, setShowEventArchive] = useState(false);
  const [activeEvent, setActiveEvent] =
    useState<(typeof pastEvents)[number] | null>(null);
  const displayedEvents = pastEvents.slice(0, 4);

  return (
    <section id="events" className="relative overflow-hidden px-4 py-16 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(139,92,246,.08),transparent)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--soft)]">
              Dokumentasi Event
            </p>
            <h2 className="mt-2 font-serif text-3xl font-black text-[var(--text)] md:text-5xl">
              Event yang sudah berjalan
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Arsip singkat aktivitas Mystral Academy. Foto dokumentasi event
              bisa ditambahkan nanti dan ikut tampil di galeri komunitas.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowEventArchive(true)}
              className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-black text-[var(--text)] transition hover:border-violet-400/40 hover:bg-white/10"
            >
              Lihat Semua Event
              <Calendar size={16} />
            </button>
            <a
              href="#gallery"
              className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-black text-[var(--text)] transition hover:border-violet-400/40 hover:bg-white/10"
            >
              Lihat Galeri
              <Camera size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {displayedEvents.map((event) => (
            <button
              key={event.title}
              onClick={() => setActiveEvent(event)}
              className="group overflow-hidden rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-0 text-left shadow-[0_14px_36px_rgba(15,23,42,.12)] transition hover:-translate-y-1 hover:border-violet-400/40 sm:rounded-[1.45rem]"
            >
              <div className="relative aspect-square overflow-hidden md:aspect-[2/1]">
                {eventCover(event) ? (
                  <Image
                    src={eventCover(event)}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`relative h-full w-full bg-gradient-to-br ${event.color}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,.35),transparent_30%),linear-gradient(135deg,rgba(255,255,255,.14),transparent)]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-2.5 top-2.5 rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                  {event.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="line-clamp-2 text-sm font-black leading-tight text-white sm:text-base">
                    {event.title}
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-white/75 sm:text-xs">
                    {event.date}
                  </p>
                </div>
              </div>

              <div className="hidden p-4 sm:block sm:p-5">
                <p className="line-clamp-3 min-h-[78px] text-sm leading-6 text-[var(--muted)]">
                  {event.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <span className="text-xs font-black text-[var(--soft)]">
                    {event.stats}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[var(--muted)]">
                    Dokumentasi
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {showEventArchive && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
          onClick={() => setShowEventArchive(false)}
        >
          <div
            className="flex max-h-[86vh] w-full max-w-5xl flex-col rounded-[1.7rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_30px_90px_rgba(0,0,0,.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--soft)]">
                  Event Archive
                </p>
                <h3 className="mt-1 text-xl font-black text-[var(--text)]">
                  Semua event Mystral
                </h3>
              </div>
              <button
                onClick={() => setShowEventArchive(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)]"
                aria-label="Tutup archive event"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto p-5">
              <div className="grid gap-3 md:grid-cols-2">
                {pastEvents.map((event) => (
                  <button
                    key={event.title}
                    onClick={() => setActiveEvent(event)}
                    className="flex gap-4 rounded-[1.25rem] border border-[var(--border)] bg-[var(--card2)] p-3 text-left transition hover:border-violet-400/40 hover:bg-white/10"
                  >
                    <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl">
                      {eventCover(event) ? (
                        <Image
                          src={eventCover(event)}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className={`relative h-full w-full bg-gradient-to-br ${event.color}`}>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.3),transparent_35%)]" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--soft)]">
                          {event.category}
                        </span>
                        <span className="text-xs font-bold text-[var(--muted)]">
                          {event.date}
                        </span>
                      </div>
                      <h4 className="mt-2 text-base font-black text-[var(--text)]">
                        {event.title}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--muted)]">
                        {event.desc}
                      </p>
                      <p className="mt-2 text-xs font-black text-[var(--soft)]">
                        {event.stats}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-2.5 py-3 backdrop-blur-md sm:px-4 sm:py-8"
          onClick={() => setActiveEvent(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_34px_110px_rgba(0,0,0,.55)] sm:rounded-[1.8rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-xl border border-white/20 bg-black/45 text-white backdrop-blur-md sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:rounded-2xl"
              aria-label="Tutup detail event"
            >
              <X size={18} />
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,rgba(139,92,246,.16),rgba(244,180,123,.08))] p-3 sm:min-h-[320px] sm:p-4 lg:min-h-full">
                {eventCover(activeEvent) ? (
                  <Image
                    src={eventCover(activeEvent)}
                    alt={activeEvent.title}
                    className="relative z-10 max-h-[38vh] w-auto max-w-full rounded-xl object-contain shadow-[0_24px_70px_rgba(0,0,0,.42)] sm:max-h-[72vh] sm:rounded-2xl"
                  />
                ) : (
                  <div className={`absolute inset-3 rounded-xl bg-gradient-to-br sm:inset-4 sm:rounded-2xl ${activeEvent.color}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.32),transparent_34%)]" />
                  </div>
                )}
                {eventCover(activeEvent) && (
                  <Image
                    src={eventCover(activeEvent)}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-14 z-20 sm:bottom-5 sm:left-5 sm:right-5">
                  <span className="rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                    {activeEvent.category}
                  </span>
                  <h3 className="mt-2 line-clamp-2 text-lg font-black leading-tight text-white sm:mt-3 sm:text-2xl">
                    {activeEvent.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-white/75 sm:text-sm">
                    {activeEvent.date}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                  Detail Event
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:leading-7">
                  {eventDetail(activeEvent)}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card2)] p-3 sm:rounded-2xl sm:p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--soft)]">
                      Kategori
                    </p>
                    <p className="mt-1 text-sm font-black text-[var(--text)]">
                      {activeEvent.category}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card2)] p-3 sm:rounded-2xl sm:p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--soft)]">
                      Status
                    </p>
                    <p className="mt-1 text-sm font-black text-[var(--text)]">
                      {activeEvent.stats}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--card2)] p-3 sm:mt-5 sm:rounded-2xl sm:p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--soft)]">
                    Dokumentasi
                  </p>
                  {activeEvent.documentation.length > 0 ? (
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {activeEvent.documentation.map((image) => (
                        <Image
                          key={image}
                          src={image}
                          alt={`${activeEvent.title} documentation`}
                          className="aspect-square rounded-lg object-cover sm:rounded-xl"
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Dokumentasi event bisa ditambahkan ke folder event ini
                      dan akan tampil otomatis di sini.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

function StaffProfileModal({
  member,
  onClose,
}: {
  member: StaffMember;
  onClose: () => void;
}) {
  const roles = staffRoles(member);
  const primaryRole = roles[0] ?? "Staff";

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_26px_80px_rgba(0,0,0,.36)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${member.color} opacity-90`}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.5),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,.18))]" />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/50"
          aria-label="Tutup profil staff"
        >
          <X size={16} />
        </button>

        <div className="relative px-5 pb-6 pt-14">
          <div className="flex items-end gap-4">
            <div
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br ${member.color} p-[3px] shadow-[0_16px_36px_rgba(0,0,0,.28)] ring-4 ring-[var(--card)]`}
            >
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="h-full w-full rounded-[1.25rem] object-cover object-center"
                />
              ) : (
                <div className="grid h-full w-full place-items-center rounded-[1.25rem] bg-slate-900 text-2xl font-black text-white">
                  {initialOf(member.name)}
                </div>
              )}
            </div>

            <div className="min-w-0 pb-1">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--soft)]">
                Staff Profile
              </p>
              <h3 className="mt-1 truncate text-2xl font-black text-[var(--text)]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-bold text-[var(--muted)]">
                {primaryRole}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {roles.map((role) => (
              <RolePill key={role}>{role}</RolePill>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-[var(--border)] bg-[var(--card2)] p-4">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--soft)]">
              Tugas
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              Bagian dari tim Mystral Academy yang membantu menjaga komunitas
              tetap rapi, aktif, dan nyaman sesuai role yang dipegang.
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-4 w-full rounded-2xl border border-[var(--border)] bg-white/10 px-4 py-3 text-sm font-black text-[var(--text)] transition hover:bg-white/15"
          >
            Tutup Profil
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function StaffSection() {
  const roles = [
    "All",
    ...Array.from(new Set(staff.flatMap((s) => staffRoles(s)))),
  ];
  const [activeRole, setActiveRole] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [activeStaff, setActiveStaff] = useState<StaffMember | null>(null);

  const filteredStaff = staff.filter((member) => {
    const matchRole =
      activeRole === "All" || staffRoles(member).includes(activeRole);
    const matchQuery = member.name.toLowerCase().includes(query.toLowerCase());
    return matchRole && matchQuery;
  });

  const isFiltering = activeRole !== "All" || query.trim() !== "";
  const INITIAL_SHOW = 12;
  const displayedStaff =
    showAll || isFiltering
      ? filteredStaff
      : filteredStaff.slice(0, INITIAL_SHOW);
  const hasMore =
    !isFiltering && filteredStaff.length > INITIAL_SHOW && !showAll;

  return (
    <section
      id="staff"
      className="relative overflow-hidden px-4 py-20 lg:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(139,92,246,.18),transparent_60%),radial-gradient(ellipse_60%_50%_at_85%_70%,rgba(244,180,123,.14),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Staff Academy"
          title="Tim yang jaga komunitas"
          desc="Staff Mystral Academy yang berdedikasi menjaga server tetap nyaman, rapi, dan menyenangkan."
        />

        <Card>
          {/* Filter bar */}
          <div className="mb-5 grid gap-3 md:grid-cols-[1fr_260px]">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setActiveRole(role);
                    setShowAll(false);
                  }}
                  className={`shrink-0 rounded-2xl px-4 py-2 text-xs font-black transition ${
                    activeRole === role
                      ? "bg-gradient-to-r from-violet-500 to-purple-700 text-white shadow-[0_0_24px_rgba(139,92,246,.28)]"
                      : "bg-white/10 text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-4">
              <Search size={17} className="text-[var(--muted)]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari staff..."
                className="w-full bg-transparent py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
              />
            </div>
          </div>

          {/* Staff grid */}
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
            {displayedStaff.map((s, index) => (
              <motion.div
                key={`${s.name}-${s.role}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.04, 0.4),
                }}
                onClick={() => setActiveStaff(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveStaff(s);
                }}
                className="group relative min-h-[68px] cursor-pointer overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(135deg,rgba(124,92,255,.08),rgba(14,165,233,.04)),var(--card2)] p-2 shadow-[0_10px_28px_rgba(15,23,42,.08)] outline-none transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:shadow-[0_8px_24px_rgba(139,92,246,.15)] focus-visible:border-violet-400/70 sm:min-h-[112px] sm:rounded-[1.35rem] sm:p-4"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5" />

                {/* Mobile: vertical compact | sm+: horizontal */}
                <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-3">
                  <div
                    className={`relative h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${s.color} p-[2px] sm:h-11 sm:w-11 sm:rounded-xl sm:p-[3px]`}
                  >
                    <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[6px] bg-slate-800/90 text-xs font-black text-white shadow-inner sm:rounded-[9px] sm:text-base">
                      {s.avatar ? (
                        <Image
                          src={s.avatar}
                          alt={s.name}
                          fill
                          sizes="(min-width: 640px) 44px, 32px"
                          className="object-cover"
                        />
                      ) : (
                        <span suppressHydrationWarning>{initialOf(s.name)}</span>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0 w-full text-center sm:text-left">
                    <h3
                      suppressHydrationWarning
                      className="truncate text-[9px] font-black leading-tight text-[var(--text)] sm:text-[13px]"
                    >
                      {s.name}
                    </h3>
                    <p className="truncate text-[7px] font-bold text-[var(--soft)] sm:mt-0.5 sm:text-[9px]">
                      {staffRoles(s).join(", ")}
                    </p>
                  </div>
                </div>

                {/* Desktop only: role badge */}
                <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
                  {staffRoles(s).map((role) => (
                    <span
                      key={role}
                      className={`inline-block rounded-full bg-gradient-to-r ${s.color} px-2 py-0.5 text-[9px] font-black text-white shadow-[0_6px_16px_rgba(15,23,42,.14)]`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more */}
          {hasMore && (
            <div className="mt-5 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-6 py-3 text-sm font-black text-[var(--muted)] transition hover:bg-white/15 hover:text-[var(--text)]"
              >
                Lihat Semua Staff ({filteredStaff.length} orang)
                <ArrowRight size={14} className="rotate-90" />
              </button>
            </div>
          )}
          {showAll && !isFiltering && (
            <div className="mt-5 text-center">
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-6 py-3 text-sm font-black text-[var(--muted)] transition hover:bg-white/15 hover:text-[var(--text)]"
              >
                Tampilkan Lebih Sedikit
                <ArrowRight size={14} className="-rotate-90" />
              </button>
            </div>
          )}
        </Card>
      </div>

      {activeStaff && (
        <StaffProfileModal
          member={activeStaff}
          onClose={() => setActiveStaff(null)}
        />
      )}
    </section>
  );
}

function HierarchySection() {
  const levels = [
    {
      role: "Archduke — Owner",
      icon: Crown,
      color: "from-violet-500 to-fuchsia-600",
      desc: "Menentukan arah, konsep, tema, dan tujuan server.",
    },
    {
      role: "Archmagister — Co-owner",
      icon: Sparkles,
      color: "from-violet-400 to-purple-600",
      desc: "Mendampingi owner dan menjaga sistem komunitas berjalan.",
    },
    {
      role: "Archmage — Administrator",
      icon: ShieldCheck,
      color: "from-indigo-400 to-violet-500",
      desc: "Mengawasi server, membantu member, dan menjaga kenyamanan.",
    },
    {
      role: "Head Division — Kepala Divisi",
      icon: Users,
      color: "from-blue-400 to-indigo-500",
      desc: "Membagi tugas, memantau tim, dan melaporkan progres divisi.",
    },
    {
      role: "Developer — Technical Team",
      icon: Code2,
      color: "from-cyan-400 to-indigo-500",
      desc: "Mengembangkan bot, website, sistem, dan tools teknis komunitas.",
    },
    {
      role: "Sentinel — Penjaga Server",
      icon: BadgeCheck,
      color: "from-sky-400 to-blue-500",
      desc: "Memantau aktivitas, membantu member baru, dan meredam masalah.",
    },
    {
      role: "Lunaris — Public Relations",
      icon: Handshake,
      color: "from-pink-400 to-violet-500",
      desc: "Menjaga relasi, nama baik server, dan membantu member baru.",
    },
    {
      role: "Artemist — Event Organizer",
      icon: Calendar,
      color: "from-rose-400 to-pink-500",
      desc: "Merancang konsep, alur, dan evaluasi event komunitas.",
    },
    {
      role: "Artisant — Design Visual",
      icon: Camera,
      color: "from-fuchsia-400 to-pink-500",
      desc: "Membuat poster, banner, logo, dan kebutuhan visual server.",
    },
    {
      role: "Archivist — Social Management",
      icon: Megaphone,
      color: "from-amber-400 to-orange-500",
      desc: "Mengelola sosial media dan konten kreatif Mystral Academy.",
    },
    {
      role: "Visionary — Editor Video",
      icon: Music2,
      color: "from-cyan-400 to-blue-500",
      desc: "Mengedit video agar konten terlihat rapi, hidup, dan menarik.",
    },
    {
      role: "Arcane Ally — Partnership",
      icon: Handshake,
      color: "from-emerald-400 to-teal-500",
      desc: "Menjaga kerja sama partner, benefit, dan riwayat kolaborasi.",
    },
    {
      role: "Member",
      icon: Heart,
      color: "from-slate-400 to-slate-500",
      desc: "Anggota komunitas yang ikut meramaikan Mystral Academy.",
    },
  ];

  return (
    <section
      id="hierarchy"
      className="relative overflow-hidden px-4 py-16 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(99,102,241,.18),transparent_65%),radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(139,92,246,.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Struktur Organisasi"
          title="Hirarki Komunitas"
          desc="Alur koordinasi yang jelas dari Founder sampai Member."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
          <Card className="relative overflow-hidden p-5 md:p-6">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-400" />
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--soft)]">
                  Chain of Command
                </p>
                <h3 className="mt-2 text-2xl font-black text-[var(--text)]">
                  Jalur koordinasi
                </h3>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card2)] px-3 py-2 text-xs font-black text-[var(--muted)]">
                {levels.length} level
              </div>
            </div>

            <div className="relative space-y-2">
              <div className="absolute bottom-6 left-[18px] top-6 w-px bg-gradient-to-b from-violet-400 via-cyan-400 to-slate-500/40" />
            {levels.map((level, i) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={level.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group relative flex items-center gap-3 rounded-[1rem] border border-[var(--border)] bg-[var(--card2)] p-2.5 transition hover:-translate-y-0.5 hover:border-violet-400/45"
                >
                  <div
                    className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${level.color} text-white shadow-[0_8px_18px_rgba(15,23,42,.18)]`}
                  >
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="truncate text-xs font-black text-[var(--text)]">
                        @{level.role}
                      </p>
                      <span className="shrink-0 rounded-full border border-[var(--border)] px-2 py-0.5 text-[9px] font-black text-[var(--muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </Card>

          <Card className="relative overflow-hidden p-5 md:p-6">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
                  Tugas setiap level
                </p>
                <h3 className="mt-2 text-2xl font-black text-[var(--text)]">
                  Peran staff & member
                </h3>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {levels.map((level, i) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.role}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`flex min-h-[118px] items-start gap-3 rounded-[1.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,.08),transparent),var(--card2)] p-4 transition hover:-translate-y-0.5 hover:border-violet-400/35 ${i === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${level.color} text-white`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-black text-[var(--text)]">
                          @{level.role}
                        </p>
                        <span className="text-[10px] font-black text-[var(--soft)]">
                          L{i + 1}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">
                        {level.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Founder Profile Modal ───────────────────────────── */

function FounderProfileModal({
  founder,
  onClose,
}: {
  founder: Founder;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(168,85,247,.24),transparent_34%),radial-gradient(circle_at_75%_72%,rgba(244,180,123,.18),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-[var(--card)] shadow-[0_36px_110px_rgba(0,0,0,.58)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.08),transparent_36%,rgba(255,255,255,.03))]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

        <div className={`relative h-36 w-full bg-gradient-to-br ${founder.banner}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.32),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,.34))]" />
        </div>

        {/* Tombol tutup */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55"
          aria-label="Tutup profil founder"
        >
          <X size={18} />
        </button>

        <div className="relative px-6 pb-6">
          <div className="-mt-12">
            <div
              className={`h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br ${founder.color} p-[4px] shadow-[0_18px_42px_rgba(0,0,0,.34)] ring-4 ring-[var(--card)]`}
            >
              {founder.avatar ? (
                <Image
                  src={founder.avatar}
                  alt={founder.name}
                  width={96}
                  height={96}
                  className="h-full w-full rounded-full object-cover object-center"
                />
              ) : (
                <div className="grid h-full w-full place-items-center rounded-full bg-[var(--bg)] text-3xl font-black text-white">
                  {initialOf(founder.name)}
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-3xl font-black text-[var(--text)]">
                {founder.name}
              </h3>
              {founder.discord && (
                <p className="mt-1 text-sm font-bold text-[var(--muted)]">
                  @{founder.discord.replace(/^@/, "")}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {founder.role.split(" • ").map((role) => (
                  <RolePill key={role}>{role}</RolePill>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-5 rounded-[1.35rem] border border-[var(--border)] bg-[var(--card2)] p-4">
            <p className="text-sm leading-7 text-[var(--muted)]">
              {founder.bio}
            </p>
          </div>

          {/* Sosmed */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            {/* Discord — pakai discordLink personal kalau ada */}
            <a
              href={founder.discordLink ?? discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-4 py-3 text-xs font-black text-[var(--text)] transition hover:border-violet-400/40 hover:bg-white/15"
            >
              <MessageCircle size={15} />
              {founder.discord ? founder.discord.replace(/^@/, "") : "Discord"}
            </a>

            {/* TikTok — pakai tiktokLink personal kalau ada, fallback konstruksi dari username */}
            {founder.tiktok && (
              <a
                href={
                  founder.tiktokLink ??
                  `https://www.tiktok.com/@${founder.tiktok.replace(/^@/, "")}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-4 py-3 text-xs font-black text-[var(--text)] transition hover:border-pink-400/40 hover:bg-white/15"
              >
                <Music2 size={15} />
                {founder.tiktok.replace(/^@/, "")}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────────── Founder Section ───────────────────────────── */

function FounderSection() {
  const [activeFounder, setActiveFounder] = useState<Founder | null>(null);

  return (
    <section
      id="founder"
      className="relative overflow-hidden px-4 py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_20%,rgba(236,72,153,.18),transparent_60%),radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(139,92,246,.15),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Founder"
          title="Founder Mystral Academy"
          desc="Tim inti yang membentuk arah, suasana, dan identitas Mystral Academy sejak awal."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card
                className="group flex h-full cursor-pointer flex-col overflow-hidden text-center transition hover:-translate-y-1 hover:border-violet-400/40"
                onClick={() => setActiveFounder(founder)}
              >
                {/* Mini banner */}
                <div
                  className={`-mx-6 -mt-6 mb-6 h-16 rounded-t-[2rem] bg-gradient-to-br ${founder.banner} md:-mx-8 md:-mt-8`}
                />

                {/* Avatar */}
                <div
                  className={`mx-auto -mt-14 h-20 w-20 overflow-hidden rounded-full bg-gradient-to-br ${founder.color} p-[3px] shadow-[0_0_28px_rgba(139,92,246,.3)] ring-4 ring-[var(--card)]`}
                >
                  {founder.avatar ? (
                    <Image
                      src={founder.avatar}
                      alt={founder.name}
                      width={80}
                      height={80}
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center rounded-full bg-[var(--bg2)] text-2xl font-black text-white">
                      {initialOf(founder.name)}
                    </div>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-black text-[var(--text)]">
                  {founder.name}
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--soft)]">
                  {founder.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {founder.desc}
                </p>

                <div className="mt-auto flex items-center justify-center gap-1.5 pt-4 text-xs text-[var(--muted)] transition group-hover:text-[var(--soft)]">
                  <UserRound size={13} />
                  <span>Lihat profil</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {activeFounder && (
        <FounderProfileModal
          founder={activeFounder}
          onClose={() => setActiveFounder(null)}
        />
      )}
    </section>
  );
}

/* ───────────────────────────── Donation Section ───────────────────────────── */

function DonationSection() {
  return (
    <section id="donation" className="relative px-4 py-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(244,180,123,.14),transparent_60%),radial-gradient(ellipse_40%_40%_at_10%_20%,rgba(139,92,246,.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Dukung Komunitas"
          title="Donation & Boost Support"
          desc="Ada dua cara untuk mendukung Mystral Academy keduanya dapet reward eksklusif yang berbeda."
        />

        {/* Cara Support */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {/* Donasi */}
          <Card className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_8px_20px_rgba(251,146,60,.3)]">
                <QrCode size={22} />
              </div>
              <div>
                <p className="font-black text-[var(--text)]">
                  Donasi via QRIS / DANA
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Pembayaran langsung ke Ramzy
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                ["Min. Uang", "Rp 30.000"],
                ["Min. OwO", "3.000.000"],
                ["Status", "Permanent"],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-white/10 p-3 text-center"
                >
                  <p className="text-[10px] font-black uppercase tracking-wider text-[var(--soft)]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-black text-[var(--text)]">
                    {val}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white/10 p-4">
              <p className="mb-1 text-[10px] font-black uppercase tracking-wider text-[var(--soft)]">
                Cara Donasi
              </p>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Submit ticket di{" "}
                <span className="font-black text-[var(--text)]">
                  📫 ticket-desk
                </span>{" "}
                atau DM langsung ke{" "}
                <span className="font-black text-[var(--text)]">@Ramzy</span>
              </p>
            </div>

            <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-3">
              <p className="text-xs text-[var(--muted)]">
                📊 Setiap donasi yang masuk akan diumumkan di channel{" "}
                <span className="font-black text-amber-400">
                  🧾 donator-update
                </span>{" "}
                disertai nominal dan ucapan terima kasih.
              </p>
            </div>
          </Card>

          {/* Boost */}
          <Card className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-[0_8px_20px_rgba(139,92,246,.3)]">
                <Zap size={22} />
              </div>
              <div>
                <p className="font-black text-[var(--text)]">
                  Server Boost Discord
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Boost langsung dari aplikasi Discord
                </p>
              </div>
            </div>

            <div className="flex-1 rounded-2xl border border-[var(--border)] bg-white/10 p-4">
              <p className="mb-1 text-[10px] font-black uppercase tracking-wider text-[var(--soft)]">
                Cara Boost
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                Buka server Mystral Academy di Discord, lalu tap icon Boost di
                halaman server. Setelah boost, konfirmasi ke staff untuk klaim
                reward-mu ya!
              </p>
            </div>

            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-5 py-3 text-sm font-black text-white shadow-[0_0_24px_rgba(139,92,246,.28)] transition hover:scale-[1.02]"
            >
              <Zap size={16} />
              Boost Mystral Academy
            </a>
          </Card>
        </div>

        {/* Benefit Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Donation Benefits */}
          <Card>
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_8px_20px_rgba(251,146,60,.3)]">
                <Gift size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                  Donation Benefit
                </p>
                <h3 className="font-serif text-xl font-black text-[var(--text)]">
                  💸 Rich Mage Perks
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              {donationPerks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/10 p-4"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-400/20 text-amber-400">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[var(--text)]">
                        {perk.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Boost Benefits */}
          <Card>
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-[0_8px_20px_rgba(139,92,246,.3)]">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                  Booster Benefit
                </p>
                <h3 className="font-serif text-xl font-black text-[var(--text)]">
                  👑 Mystic Supporter Perks
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              {boosterPerks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/10 p-4"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/20 text-[var(--soft)]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[var(--text)]">
                        {perk.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Ketentuan */}
        <Card className="mt-6">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
            Ketentuan Donation
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Minimal donasi Rp30.000 atau 3.000.000 OwO",
              "Benefit bersifat permanent selama tidak ada pelanggaran",
              "Penyalahgunaan benefit akan dikenakan sanksi",
              "Keputusan staff bersifat final dan tidak bisa diganggu gugat",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/10 p-4"
              >
                <BadgeCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--soft)]"
                />
                <p className="text-xs leading-5 text-[var(--muted)]">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ───────────────────────────── Bot Section ───────────────────────────── */

function BotSection() {
  return (
    <section id="bot" className="relative overflow-hidden px-4 py-14 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_50%,rgba(139,92,246,.18),transparent_60%),radial-gradient(ellipse_40%_40%_at_85%_20%,rgba(244,180,123,.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sistem Pendukung Server"
          title="Bot pendukung Mystral Academy"
          desc="Beberapa bot ini membantu kegiatan server berjalan lebih rapi, nyaman, dan mudah digunakan oleh member maupun staff."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bots.map((bot) => (
            <Card
              key={bot.name}
              className="group relative flex min-h-[226px] flex-col overflow-hidden p-0 transition hover:-translate-y-0.5 hover:border-violet-400/35 hover:shadow-[0_16px_42px_rgba(79,70,229,.12)] sm:min-h-[242px]"
            >
              <div className={`h-1.5 bg-gradient-to-r ${bot.color}`} />

              <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5">
                <div className="flex items-start gap-3">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${bot.color} text-white shadow-[0_8px_20px_rgba(15,23,42,.14)]`}
                  >
                    <Bot size={19} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-black leading-5 text-[var(--text)] sm:text-[15px]">
                      {bot.name}
                    </h3>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-[var(--soft)]">
                      Active Bot
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-[var(--muted)] sm:text-[13px] sm:leading-[1.55]">
                  {bot.desc}
                </p>

                <div className="mt-auto pt-4">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card2)] px-3 py-2.5">
                    {bot.creator ? (
                      <div className="min-w-0">
                        <p className="text-[9px] font-black uppercase tracking-wider text-[var(--soft)]">
                          Dibuat oleh
                        </p>
                        <p className="mt-0.5 truncate text-[13px] font-black text-[var(--text)]">
                          {bot.creator}
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-[10px] leading-4 text-[var(--muted)]">
                          {bot.creatorRole}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-wider text-[var(--soft)]">
                          Status
                        </p>
                        <p className="mt-0.5 text-[13px] font-black text-[var(--text)]">
                          {bot.creatorRole}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Leaderboard Section ───────────────────────────── */

function LeaderboardSection() {
  const rankEmoji = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];

  return (
    <section
      id="leaderboard"
      className="relative overflow-hidden px-4 py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(251,191,36,.16),transparent_60%),radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(139,92,246,.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Mystral Academy Support"
          title="🏆 Leaderboard Komunitas"
          desc="Rekap bulanan member paling aktif, donatur terbaik, dan sponsor yang mendukung Mystral Academy."
        />

        {/* Support Board */}
        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          {/* Sponsor */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-300 text-white shadow-[0_8px_20px_rgba(251,191,36,.3)]">
                <Star size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                  Sponsor Top 5
                </p>
                <h3 className="font-serif text-xl font-black text-[var(--text)]">
                  ⭐ Sponsor Terbaik
                </h3>
              </div>
            </div>
            <div className="space-y-2">
              {leaderboardData.sponsors.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/10 px-4 py-3"
                >
                  <span className="text-xl">{rankEmoji[item.rank - 1]}</span>
                  <p className="flex-1 font-black text-[var(--text)]">
                    {item.name}
                  </p>
                  <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-black text-amber-400">
                    {item.amount}
                  </span>
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-3 text-center text-xs text-[var(--muted)]">
                Posisi 2–5 masih terbuka — jadilah sponsor berikutnya! 💛
              </div>
            </div>
          </Card>

          {/* Donatur */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 text-white shadow-[0_8px_20px_rgba(167,139,250,.3)]">
                <Heart size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                  Donatur Top 5
                </p>
                <h3 className="font-serif text-xl font-black text-[var(--text)]">
                  💎 Donatur Terbaik
                </h3>
              </div>
            </div>
            <div className="space-y-2">
              {leaderboardData.donators.map((item) => (
                <div
                  key={item.rank}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${item.rank <= 3 ? "border-violet-400/30 bg-violet-500/10" : "border-[var(--border)] bg-white/10"}`}
                >
                  <span className="text-xl">{rankEmoji[item.rank - 1]}</span>
                  <p className="flex-1 font-black text-[var(--text)]">
                    {item.name}
                  </p>
                  <span className="rounded-full bg-violet-400/20 px-3 py-1 text-xs font-black text-[var(--soft)]">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Monthly Recap */}
        <div className="mb-6">
          <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
            《 Monthly Recap 》
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Top Chat */}
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-[0_8px_20px_rgba(96,165,250,.3)]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                    Bulan ini
                  </p>
                  <h3 className="font-serif text-xl font-black text-[var(--text)]">
                    💬 Top Chat
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                {leaderboardData.topChat.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${item.rank === 1 ? "border-blue-400/30 bg-blue-500/10" : "border-[var(--border)] bg-white/10"}`}
                  >
                    <span className="w-6 text-center text-lg">
                      {rankEmoji[item.rank - 1]}
                    </span>
                    <p className="min-w-0 flex-1 truncate text-sm font-black text-[var(--text)]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Voice */}
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_8px_20px_rgba(52,211,153,.3)]">
                  <Megaphone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--soft)]">
                    Bulan ini
                  </p>
                  <h3 className="font-serif text-xl font-black text-[var(--text)]">
                    🎤 Top Voice
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                {leaderboardData.topVoice.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${item.rank === 1 ? "border-emerald-400/30 bg-emerald-500/10" : "border-[var(--border)] bg-white/10"}`}
                  >
                    <span className="w-6 text-center text-lg">
                      {rankEmoji[item.rank - 1]}
                    </span>
                    <p className="flex-1 text-sm font-black text-[var(--text)]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Rules Section ───────────────────────────── */

function RulesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showAllRules, setShowAllRules] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const INITIAL_RULES = isDesktop ? 12 : 5;
  const visibleRules = showAllRules
    ? rulesData
    : rulesData.slice(0, INITIAL_RULES);

  return (
    <section
      id="rules"
      className="relative overflow-hidden px-4 py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,.18),transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_100%,rgba(236,72,153,.1),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Peraturan Akademi"
          title="📜 Peraturan Mystral Academy"
          desc="Peraturan ini mengacu pada Discord Community Guidelines dan ToS. Setiap member wajib membaca dan memahaminya."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Rules List */}
          <Card className="p-0 md:p-0">
            <div className="p-6 md:p-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
                📖 Rules Mystral Academy
              </p>
              <div className="space-y-2">
                {visibleRules.map((rule) => (
                  <motion.button
                    key={rule.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() =>
                      setExpanded(expanded === rule.id ? null : rule.id)
                    }
                    className="w-full rounded-2xl border border-[var(--border)] bg-white/10 p-4 text-left transition hover:border-violet-400/30 hover:bg-white/15"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-500/20 text-[10px] font-black text-[var(--soft)]">
                          {rule.id}
                        </span>
                        <div>
                          <p className="text-sm font-black text-[var(--text)]">
                            {rule.title}
                          </p>
                          {expanded === rule.id && (
                            <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                              {rule.desc}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2 py-0.5 text-[10px] font-black text-[var(--soft)]">
                          {rule.points}p
                        </span>
                        <ArrowRight
                          size={14}
                          className={`text-[var(--muted)] transition-transform ${expanded === rule.id ? "rotate-90" : ""}`}
                        />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Show all rules toggle */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    setShowAllRules(!showAllRules);
                    if (showAllRules) setExpanded(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-white/10 px-5 py-2.5 text-xs font-black text-[var(--muted)] transition hover:bg-white/15 hover:text-[var(--text)]"
                >
                  {showAllRules
                    ? "Tampilkan Lebih Sedikit"
                    : `Lihat Semua Peraturan (${rulesData.length} aturan)`}
                  <ArrowRight
                    size={13}
                    className={`transition-transform ${showAllRules ? "-rotate-90" : "rotate-90"}`}
                  />
                </button>
              </div>
            </div>
          </Card>

          {/* Sanctions + Notes */}
          <div className="space-y-4">
            <Card>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
                ⚖️ Sistem Sanksi
              </p>
              <h3 className="mb-5 font-serif text-xl font-black text-[var(--text)]">
                Hukuman sesuai poin pelanggaran
              </h3>
              <div className="space-y-2">
                {sanctionsData.map((s) => (
                  <div
                    key={s.points}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/10 p-3.5"
                  >
                    <div
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-xs font-black text-white shadow-[0_4px_12px_rgba(0,0,0,.2)]`}
                    >
                      {s.points}
                    </div>
                    <p className="text-sm font-black text-[var(--text)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4">
                <p className="text-xs font-black text-amber-400">
                  Catatan Penting
                </p>
                <p className="mt-1 text-xs leading-6 text-[var(--muted)]">
                  Akumulasi poin dapat memperberat hukuman. Staff berhak
                  mengambil keputusan di luar rules tertulis demi menjaga
                  keamanan server.
                </p>
              </div>
            </Card>

            <Card>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
                ✨ Ringkasan Poin
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    label: "Warning",
                    desc: "1 poin",
                    color: "text-yellow-400",
                  },
                  {
                    label: "Timeout 1 jam",
                    desc: "2 poin",
                    color: "text-orange-400",
                  },
                  {
                    label: "Timeout 1 hari",
                    desc: "3 poin",
                    color: "text-orange-500",
                  },
                  { label: "Kick", desc: "4 poin", color: "text-red-400" },
                  {
                    label: "Banned Sementara",
                    desc: "5 poin",
                    color: "text-red-500",
                  },
                  {
                    label: "Banned Permanen",
                    desc: "6 poin",
                    color: "text-rose-600",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--border)] bg-white/10 p-3"
                  >
                    <p className={`text-sm font-black ${item.color}`}>
                      {item.desc}
                    </p>
                    <p className="text-xs text-[var(--muted)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Recruitment Section ───────────────────────────── */

function RecruitmentSection() {
  return (
    <section
      id="recruitment"
      className="relative overflow-hidden px-4 py-20 lg:px-10"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(139,92,246,.2),transparent_65%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(236,72,153,.12),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Open Recruitment"
          title="Mau ikut bangun komunitas ini?"
          desc="Kami lagi buka beberapa posisi staff. Kalau kamu tertarik dan merasa cocok, yuk daftar sekarang!"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {staffPositions.map((pos) => {
            const Icon = pos.icon;
            return (
              <Card
                key={pos.id}
                className="group flex flex-col transition hover:-translate-y-1 hover:border-violet-400/40"
              >
                {/* Icon */}
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${pos.color} text-white shadow-[0_8px_28px_rgba(0,0,0,.22)]`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-black text-[var(--text)]">
                  {pos.title}
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--soft)]">
                  {pos.subtitle}
                </p>

                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
                  {pos.desc}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {pos.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-white/10 px-3 py-1 text-xs font-black text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={staffFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-5 py-3 text-sm font-black text-white transition hover:opacity-90"
                >
                  Daftar Sekarang
                  <ArrowRight size={15} />
                </a>
              </Card>
            );
          })}
        </div>

        {/* Syarat umum */}
        <Card className="mt-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--soft)]">
              Syarat Umum
            </p>
            <h3 className="mt-2 font-serif text-2xl font-black text-[var(--text)]">
              Sebelum daftar, cek ini dulu ya
            </h3>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, text: "Aktif di Discord minimal 2 minggu" },
              { icon: Heart, text: "Berdedikasi dan mau terus belajar" },
              { icon: Users, text: "Bisa koordinasi dan kerja bareng tim" },
              {
                icon: BadgeCheck,
                text: "Paham dan setuju dengan rules server",
              },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/10 p-4"
              >
                <Icon size={18} className="shrink-0 text-[var(--soft)]" />
                <p className="text-sm text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ───────────────────────────── Testimonials ───────────────────────────── */

const commentsStorageKey = "mystral-comments";

const defaultComments: MemberComment[] = [
  {
    id: 1,
    name: "Starlight_",
    message: "Servernya rapi, staffnya aktif, dan vibes-nya nyaman banget.",
    time: "2 jam lalu",
  },
  {
    id: 2,
    name: "MoonWalker",
    message:
      "Aku suka karena bisa aktif ataupun jadi silent reader tetap diterima.",
    time: "5 jam lalu",
  },
  {
    id: 3,
    name: "DreamyCloud",
    message: "Fitur role, event, dan community system-nya keren banget.",
    time: "1 hari lalu",
  },
];

function readStoredComments() {
  try {
    const saved = localStorage.getItem(commentsStorageKey);
    if (!saved) return defaultComments;

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : defaultComments;
  } catch {
    return defaultComments;
  }
}

function Testimonials() {
  const [comments, setComments] = useState<MemberComment[]>(defaultComments);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    setComments(readStoredComments());
  }, []);

  function submitComment() {
    if (!name.trim() || !message.trim()) return;

    setLoading(true);

    const createdAt = new Date().toISOString();
    const newComment: MemberComment = {
      id: Date.now(),
      name: name.trim().slice(0, 40),
      message: message.trim().slice(0, 220),
      time: createdAt,
      createdAt,
    };
    const nextComments = [newComment, ...comments];

    setComments(nextComments);
    localStorage.setItem(commentsStorageKey, JSON.stringify(nextComments));
    setName("");
    setMessage("");
    setLoading(false);
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(124,92,255,.07)_44%,transparent),linear-gradient(90deg,rgba(244,180,123,.08),transparent_38%,rgba(99,102,241,.08))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Apa Kata Mereka?"
          title="Komentar member Mystral"
          desc="Ruang singkat buat member ninggalin kesan, saran, atau sapaan."
        />

        <Card className="bg-[var(--card)]">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--soft)]">
                Live Comments
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {comments.length} komentar terkumpul
              </p>
            </div>
            {comments.length > 0 && (
              <button
                onClick={() => setShowAllComments(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card2)] px-5 py-3 text-sm font-black text-[var(--text)] transition hover:border-violet-400/45"
              >
                Semua komentar
                <MessageCircle size={15} />
              </button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {comments.slice(0, 6).map((comment) => (
              <div
                key={comment.id}
                className="flex min-h-[210px] flex-col rounded-[1.35rem] border border-[var(--border)] bg-[var(--card2)] p-5 shadow-[0_12px_32px_rgba(15,23,42,.12)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Avatar name={comment.name} small />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-[var(--text)]">
                      {comment.name}
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      {formatCommentTime(comment)}
                    </p>
                  </div>
                </div>
                <p className="line-clamp-3 text-sm leading-7 text-[var(--muted)]">
                  {comment.message}
                </p>
                <div className="mt-auto flex gap-1 pt-4 text-[#d9903d]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[1.35rem] border border-[var(--border)] bg-[var(--card2)] p-4">
            <div className="grid gap-3 md:grid-cols-[220px_1fr_auto]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
              />
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis komentar kamu..."
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
              />
              <button
                onClick={submitComment}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 px-6 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(79,70,229,.28)] disabled:opacity-60"
              >
                {!loading && <Send size={15} />}
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </div>
          </div>
        </Card>
      </div>

      {showAllComments && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm"
          onClick={() => setShowAllComments(false)}
        >
          <div
            className="flex max-h-[86vh] w-full max-w-4xl flex-col rounded-[1.6rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_30px_90px_rgba(0,0,0,.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--soft)]">
                  Semua Komentar
                </p>
                <h3 className="mt-1 text-xl font-black text-[var(--text)]">
                  Komentar member
                </h3>
              </div>
              <button
                onClick={() => setShowAllComments(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)]"
                aria-label="Tutup komentar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto p-5">
              <div className="grid gap-3 md:grid-cols-2">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="rounded-[1.2rem] border border-[var(--border)] bg-[var(--card2)] p-4"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Avatar name={comment.name} small />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-[var(--text)]">
                          {comment.name}
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          {formatCommentTime(comment)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {comment.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden px-4 py-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(99,102,241,.08),transparent)]" />

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--soft)]">
            FAQ
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black text-[var(--text)] md:text-5xl">
            Pertanyaan yang sering ditanyakan
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
            Jawaban singkat untuk member baru yang ingin memahami cara join,
            role, pendaftaran staff, support server, dan rules utama.
          </p>

          <div className="mt-6 rounded-[1.35rem] border border-[var(--border)] bg-[var(--card)] p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                <CircleHelp size={20} />
              </div>
              <div>
                <p className="text-sm font-black text-[var(--text)]">
                  Butuh bantuan langsung?
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  Kamu bisa bertanya lewat channel bantuan atau hubungi staff
                  yang sedang aktif.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-3 md:p-4">
          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[1.2rem] border border-[var(--border)] bg-[var(--card2)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <span className="text-sm font-black leading-6 text-[var(--text)] md:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[var(--soft)] transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[var(--border)] px-4 pb-4 pt-3">
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}

function GallerySection() {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const galleryItems = [
    ...pastEvents.flatMap(eventGalleryItems),
  ];
  const displayedGallery = showAllGallery
    ? galleryItems
    : galleryItems.slice(0, 8);

  return (
    <section id="gallery" className="px-4 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Card>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
                Galeri Komunitas
              </p>
              <h2 className="mt-2 font-serif text-3xl font-black text-[var(--text)]">
                Momen-momen seru Mystral Academy
              </h2>
            </div>
            <button
              onClick={() => setShowAllGallery((value) => !value)}
              className="rounded-2xl bg-gradient-to-r from-violet-500 to-purple-700 px-5 py-3 text-sm font-black text-white"
            >
              {showAllGallery ? "Tampilkan Sedikit" : "Lihat Semua Galeri"}
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {displayedGallery.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--border)] shadow-[0_14px_34px_rgba(15,23,42,.1)]"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.24),transparent_42%),linear-gradient(180deg,transparent,rgba(0,0,0,.62))]" />
                <div className="relative flex h-full items-end p-5">
                  <div className="rounded-2xl bg-black/25 px-4 py-2 backdrop-blur-xl">
                    <p className="text-sm font-black text-white">{item.title}</p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-[var(--border)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(139,92,246,.12),transparent)]" />

      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 pt-16 lg:px-10">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              Komunitas Discord yang hangat, rapi, dan penuh aktivitas. Tempat
              tumbuh bareng teman baru setiap harinya.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border)] bg-white/10 text-[var(--muted)] transition hover:text-[var(--soft)]"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border)] bg-white/10 text-[var(--muted)] transition hover:text-[var(--soft)]"
              >
                <Music2 size={17} />
              </a>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-2xl border border-[var(--border)] bg-white/10 text-[var(--muted)] transition hover:text-[var(--soft)]"
              >
                <Camera size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
              Navigasi
            </p>
            <div className="space-y-3">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bot Lineup */}
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--soft)]">
              Bot Lineup
            </p>
            <div className="space-y-3">
              {bots.map((bot) => (
                <div key={bot.name} className="flex items-center gap-2.5">
                  <div
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${bot.color} text-white`}
                  >
                    <Bot size={13} />
                  </div>
                  <div>
                    <p className="text-sm font-black leading-none text-[var(--text)]">
                      {bot.name}
                    </p>
                    {bot.creator && (
                      <p className="mt-0.5 text-[10px] text-[var(--muted)]">
                        by {bot.creator}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © 2026{" "}
            <span className="font-black text-[var(--text)]">
              Mystral Academy
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeMode>("pastel");

  useEffect(() => {
    const canRestoreScroll = "scrollRestoration" in window.history;
    const previousScrollRestoration = canRestoreScroll
      ? window.history.scrollRestoration
      : "auto";

    if (canRestoreScroll) {
      window.history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    return () => {
      if (canRestoreScroll) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  return (
    <main
      data-theme={theme}
      className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
    >
      {/* Background utama */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--bg)_0%,var(--bg2)_46%,var(--bg)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_20%,rgba(124,92,255,.13)_20%,rgba(124,92,255,.13)_34%,transparent_34%,transparent_56%,rgba(253,224,71,.18)_56%,rgba(253,224,71,.18)_69%,transparent_69%,transparent_80%,rgba(244,180,123,.12)_80%,rgba(244,180,123,.12)_90%,transparent_90%)] opacity-85" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_70%_70%_at_18%_12%,rgba(124,92,255,.24),transparent_62%),radial-gradient(ellipse_62%_64%_at_80%_8%,rgba(20,184,166,.16),transparent_58%),linear-gradient(135deg,rgba(253,224,71,.16),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_75%_60%_at_50%_100%,rgba(244,180,123,.2),transparent_62%)]" />
      </div>

      <div className="relative z-10">
        <Topbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Features />
        <MiniFeatures />
        <AnnouncementPanel />
        <EventHistorySection />
        <FounderSection />
        <StaffSection />
        <HierarchySection />
        <DonationSection />
        <LeaderboardSection />
        <RulesSection />
        <RecruitmentSection />
        <BotSection />
        <Testimonials />
        <FAQSection />
        <GallerySection />
        <Footer />
      </div>
    </main>
  );
}
