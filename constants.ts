import { 
  Smartphone, Monitor, Headphones, Watch, 
  Shirt, User, Baby, Trophy, 
  Footprints, Gem, Sparkles, Dumbbell, 
  Utensils, Home, ShoppingBag, Gift, 
  Book, BookOpen, GraduationCap, Brain, 
  History, Briefcase, Code, Star, 
  Flame, Zap, Heart, Languages, 
  Stethoscope, Palette, Camera, Laptop
} from 'lucide-react';

export interface SubCategory {
  id: string;
  name: string;
  icon?: any;
}

export interface Category {
  id: string;
  name: string;
  icon: any;
  image?: string;
  subCategories: SubCategory[];
}

export const PRODUCT_STORE_CATEGORIES: Category[] = [
  {
    id: 'electronics',
    name: 'الإلكترونيات',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'phones', name: 'الهواتف الذكية' },
      { id: 'computers', name: 'الحواسيب واللابتوب' },
      { id: 'headphones', name: 'السماعات' },
      { id: 'accessories-elec', name: 'الاكسسوارات الإلكترونية' },
    ]
  },
  {
    id: 'clothing',
    name: 'الملابس',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'men-clothes', name: 'ملابس رجالية' },
      { id: 'women-clothes', name: 'ملابس نسائية' },
      { id: 'kids-clothes', name: 'ملابس الأطفال' },
      { id: 'sports-clothes', name: 'ملابس رياضية' },
    ]
  },
  {
    id: 'shoes',
    name: 'الأحذية',
    icon: Footprints,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'men-shoes', name: 'أحذية رجالية' },
      { id: 'women-shoes', name: 'أحذية نسائية' },
      { id: 'kids-shoes', name: 'أحذية الأطفال' },
      { id: 'sports-shoes', name: 'الأحذية الرياضية' },
      { id: 'classic-shoes', name: 'الأحذية الكلاسيكية' },
    ]
  },
  {
    id: 'perfumes',
    name: 'العطور',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'men-perfumes', name: 'عطور رجالية' },
      { id: 'women-perfumes', name: 'عطور نسائية' },
      { id: 'oriental-perfumes', name: 'العطور الشرقية' },
      { id: 'musk', name: 'مسك الطهارة' },
    ]
  },
  {
    id: 'beauty',
    name: 'الجمال والعناية',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'skin-care', name: 'العناية بالبشرة' },
      { id: 'hair-care', name: 'العناية بالشعر' },
      { id: 'makeup', name: 'مستحضرات التجميل' },
    ]
  },
  {
    id: 'sports',
    name: 'الرياضة',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'supplements', name: 'مكملات غذائية' },
      { id: 'sports-equip', name: 'معدات رياضية' },
    ]
  },
  {
    id: 'home',
    name: 'المنزل والمطبخ',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'kitchen', name: 'أدوات المطبخ والتنظيف' },
      { id: 'decor', name: 'الديكور' },
      { id: 'appliances', name: 'الأجهزة المنزلية' },
    ]
  },
  {
    id: 'accessories',
    name: 'الاكسسوارات',
    icon: Watch,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'watches', name: 'الساعات' },
      { id: 'glasses', name: 'النظارات' },
      { id: 'bags', name: 'الحقائب' },
      { id: 'jewelry', name: 'المجوهرات' },
    ]
  },
  {
    id: 'kids',
    name: 'الأطفال والألعاب',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1515488042178-993d2174627e?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'toys', name: 'ألعاب الأطفال' },
      { id: 'kids-supplies', name: 'مستلزمات الأطفال' },
    ]
  },
  {
    id: 'special',
    name: 'أقسام مميزة',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
    subCategories: [
      { id: 'offers', name: 'العروض والخصومات' },
      { id: 'new', name: 'المنتجات الجديدة' },
      { id: 'best-sellers', name: 'الأكثر مبيعاً' },
      { id: 'featured', name: 'المنتجات المميزة' },
    ]
  }
];

export const EBOOK_STORE_CATEGORIES: Category[] = [
  {
    id: 'literary',
    name: 'الكتب الأدبية',
    icon: Book,
    subCategories: [
      { id: 'novels', name: 'الروايات' },
      { id: 'short-stories', name: 'القصص القصيرة' },
      { id: 'poetry', name: 'الشعر' },
    ]
  },
  {
    id: 'scientific',
    name: 'الكتب العلمية',
    icon: Laptop,
    subCategories: [
      { id: 'physics', name: 'كتب الفيزياء' },
      { id: 'chemistry', name: 'كتب الكيمياء' },
      { id: 'math', name: 'كتب الرياضيات' },
      { id: 'biology', name: 'كتب علم الأحياء' },
    ]
  },
  {
    id: 'educational',
    name: 'الكتب التعليمية',
    icon: GraduationCap,
    subCategories: [
      { id: 'lang-learning', name: 'كتب تعلم اللغات' },
    ]
  },
  {
    id: 'self-dev',
    name: 'تطوير الذات',
    icon: Brain,
    subCategories: [
      { id: 'skills', name: 'كتب تنمية المهارات' },
      { id: 'thinking', name: 'كتب تحسين التفكير' },
      { id: 'time-mgmt', name: 'كتب إدارة الوقت' },
      { id: 'success', name: 'كتب النجاح والتحفيز' },
    ]
  },
  {
    id: 'religious',
    name: 'الكتب الدينية',
    icon: BookOpen,
    subCategories: [
      { id: 'tafsir', name: 'كتب التفسير' },
      { id: 'hadith', name: 'كتب الحديث' },
      { id: 'fiqh', name: 'كتب الفقه' },
      { id: 'aqidah', name: 'كتب العقيدة' },
    ]
  },
  {
    id: 'historical',
    name: 'الكتب التاريخية',
    icon: History,
    subCategories: [
      { id: 'nations-history', name: 'تاريخ الدول' },
      { id: 'wars-history', name: 'تاريخ الحروب' },
      { id: 'biographies-hist', name: 'السير الذاتية' },
    ]
  },
  {
    id: 'business',
    name: 'الأعمال والمال',
    icon: Briefcase,
    subCategories: [
      { id: 'entrepreneurship', name: 'كتب ريادة الأعمال' },
      { id: 'marketing', name: 'كتب التسويق' },
      { id: 'investment', name: 'كتب الاستثمار' },
    ]
  },
  {
    id: 'technical',
    name: 'الكتب التقنية',
    icon: Code,
    subCategories: [
      { id: 'programming', name: 'كتب البرمجة' },
      { id: 'ai', name: 'كتب الذكاء الاصطناعي' },
      { id: 'tech-general', name: 'كتب التكنولوجيا' },
    ]
  },
  {
    id: 'biography',
    name: 'سير ذاتية',
    icon: User,
    subCategories: [
      { id: 'famous-lives', name: 'حياة الشخصيات المشهورة' },
      { id: 'success-stories', name: 'قصص النجاح' },
    ]
  },
  {
    id: 'entertainment',
    name: 'الكتب الترفيهية',
    icon: Palette,
    subCategories: [
      { id: 'puzzles', name: 'الألغاز' },
      { id: 'hobbies', name: 'كتب الهوايات' },
    ]
  }
];

export const COURSE_STORE_CATEGORIES: Category[] = [
  {
    id: 'sports-courses',
    name: 'دورات رياضية',
    icon: Dumbbell,
    subCategories: [
      { id: 'training-prog', name: 'البرامج التدريبية' },
      { id: 'nutrition-prog', name: 'البرامج الغذائية' },
    ]
  },
  {
    id: 'lang-courses',
    name: 'تعلم اللغات',
    icon: Languages,
    subCategories: [
      { id: 'french', name: 'اللغة الفرنسية' },
      { id: 'english', name: 'اللغة الانكليزية' },
      { id: 'spanish', name: 'اللغة الاسبانية' },
    ]
  }
];
