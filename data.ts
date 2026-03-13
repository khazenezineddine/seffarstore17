export const STORE_CATEGORIES = {
    products: [
        {
            id: 'electronics',
            name: 'الإلكترونيات',
            icon: 'laptop',
            image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800',
            sub: ['الهواتف الذكية', 'الحواسيب واللابتوب', 'السماعات', 'الاكسسوارات الإلكترونية']
        },
        {
            id: 'clothing',
            name: 'الملابس',
            icon: 'shirt',
            image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
            sub: ['ملابس رجالية', 'ملابس نسائية', 'ملابس الأطفال', 'ملابس رياضية']
        },
        {
            id: 'shoes',
            name: 'الأحذية',
            icon: 'footprints',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
            sub: ['أحذية رجالية', 'أحذية نسائية', 'أحذية الأطفال', 'الأحذية الرياضية', 'الأحذية الكلاسيكية']
        },
        {
            id: 'perfumes',
            name: 'العطور',
            icon: 'spray-can',
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
            sub: ['عطور رجالية', 'عطور نسائية', 'عطور شرقية', 'مسك الطهارة']
        },
        {
            id: 'beauty',
            name: 'الجمال والعناية',
            icon: 'sparkles',
            image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800',
            sub: ['العناية بالبشرة', 'العناية بالشعر', 'مستحضرات التجميل']
        },
        {
            id: 'sports',
            name: 'الرياضة',
            icon: 'dumbbell',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
            sub: ['مكملات غذائية', 'معدات رياضية']
        },
        {
            id: 'home',
            name: 'المنزل والمطبخ',
            icon: 'home',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
            sub: ['أدوات المطبخ والتنظيف', 'الديكور', 'الأجهزة المنزلية']
        },
        {
            id: 'accessories',
            name: 'الإكسسوارات',
            icon: 'watch',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
            sub: ['الساعات', 'النظارات', 'الحقائب', 'المجوهرات']
        },
        {
            id: 'kids',
            name: 'الأطفال والألعاب',
            icon: 'gamepad-2',
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
            sub: ['ألعاب الأطفال', 'مستلزمات الأطفال']
        }
    ],
    books: [
        { id: 'literary', name: 'الكتب الأدبية', icon: 'book-open', sub: ['الروايات', 'القصص القصيرة', 'الشعر'] },
        { id: 'scientific', name: 'الكتب العلمية', icon: 'microscope', sub: ['الفيزياء', 'الكيمياء', 'الرياضيات', 'علم الأحياء'] },
        { id: 'educational', name: 'الكتب التعليمية', icon: 'graduation-cap', sub: ['تعلم اللغات'] },
        { id: 'self-dev', name: 'تطوير الذات', icon: 'brain', sub: ['تنمية المهارات', 'تحسين التفكير', 'إدارة الوقت', 'النجاح والتحفيز'] },
        { id: 'religious', name: 'الكتب الدينية', icon: 'heart', sub: ['التفسير', 'الحديث', 'الفقه', 'العقيدة'] },
        { id: 'historical', name: 'الكتب التاريخية', icon: 'history', sub: ['تاريخ الدول', 'تاريخ الحروب', 'السير الذاتية'] },
        { id: 'business', name: 'الأعمال والمال', icon: 'briefcase', sub: ['ريادة الأعمال', 'التسويق', 'الاستثمار'] },
        { id: 'tech', name: 'الكتب التقنية', icon: 'cpu', sub: ['البرمجة', 'الذكاء الاصطناعي', 'التكنولوجيا'] },
        { id: 'biographies', name: 'السير الذاتية', icon: 'user-circle', sub: ['حياة الشخصيات المشهورة', 'قصص النجاح'] },
        { id: 'entertainment', name: 'الكتب الترفيهية', icon: 'puzzle', sub: ['الألغاز', 'كتب الهوايات'] }
    ],
    courses: [
        {
            id: 'sports-courses',
            name: 'دورات رياضية',
            icon: 'trophy',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
            sub: ['البرامج التدريبية', 'البرامج الغذائية']
        },
        {
            id: 'languages',
            name: 'تعلم اللغات',
            icon: 'languages',
            image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=800',
            sub: ['اللغة الفرنسية', 'اللغة الإنجليزية', 'اللغة الإسبانية']
        }
    ]
};

export const SPECIAL_SECTIONS = [
    { id: 'offers', name: 'العروض والخصومات', color: 'bg-royal-purple' },
    { id: 'new', name: 'المنتجات الجديدة', color: 'bg-royal-purple-light' },
    { id: 'best-seller', name: 'الأكثر مبيعاً', color: 'bg-royal-purple-dark' },
    { id: 'featured', name: 'المنتجات المميزة', color: 'bg-purple-400' }
];
