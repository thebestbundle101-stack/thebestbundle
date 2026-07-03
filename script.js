function scrollToPacks() {
    document.getElementById('packs').scrollIntoView({ behavior: 'smooth' });
}

const translations = {
    en: {
        tag: "Digital Products",
        hero_title: "BUILD YOUR DIGITAL BUNDLE",
        hero_subtitle: "Buy Ebooks individually $27 per unit or save with Bundle",
        how_title: "How It Works",
        step1: "Choose Your Pack",
        step2: "Pick Any Ebooks",
        step3: "Download Instantly",
        see_bundles: "See All Bundles →",
        packs_title: "Our Featured Packs",
        packs_subtitle: "Choose from our entire collection of ebooks",
        pack_starter: "Starter Pack",
        starter_desc: "Get 2 books from 10 books",
        buy_starter: "Buy Starter Pack",
        popular: "MOST POPULAR",
        pack_creator: "Creator Pack",
        creator_desc: "Get 3 books",
        buy_creator: "Buy Creator Pack",
        pack_pro: "Pro Pack",
        pro_desc: "Get 5 books",
        buy_pro: "Buy Pro Pack",
        pack_vault: "Vault Pack",
        vault_desc: "Get all 10 books",
        all_books: "• All 10 books included",
        buy_vault: "Buy Vault Pack",
        choose_note: "Choose from our entire collection of ebooks",
        social_title: "500+ creators use our Products already",
        review1: "\"The Creator Pack gave me everything I needed to launch my digital business. Incredible value!\"",
        creator_title: "Content Creator",
        review2: "\"I bought the Pro Pack and the ebooks saved me weeks of work. Highly recommend!\"",
        entrepreneur: "Entrepreneur",
        review3: "\"The Vault Pack is the best investment I've made for my business. All 10 books are gold!\"",
        coach: "Business Coach",
        faq_title: "FAQ",
        faq1_q: "Can I choose any ebook in the bundle?",
        faq1_a: "Yes! With any pack, you get to pick which ebooks you want from our full collection of 10 titles.",
        faq2_q: "How do I receive my products after purchase?",
        faq2_a: "Instant download. After your Stripe payment, you’ll get an email with download links for your selected ebooks.",
        faq3_q: "What payment methods are accepted?",
        faq3_a: "We accept all major credit cards, debit cards, and Apple Pay/Google Pay through Stripe’s secure checkout."
    },
    ht: {
        tag: "Pwodwi Dijital",
        hero_title: "KONSTRIWI PAKÈ DIJITAL OU",
        hero_subtitle: "Achte Ebooks endividyèl $27 chak oswa ekonomize ak Pakè",
        how_title: "Kijan Li Mache",
        step1: "Chwazi Pakè Ou",
        step2: "Chwazi Nenpòt Ebooks",
        step3: "Telechaje Touswit",
        see_bundles: "Wè Tout Pakè yo →",
        packs_title: "Pakè Vedèt Nou Yo",
        packs_subtitle: "Chwazi nan tout koleksyon ebook nou yo",
        pack_starter: "Pakè Debitan",
        starter_desc: "Jwenn 2 liv nan 10 liv",
        buy_starter: "Achte Pakè Debitan",
        popular: "PI POPIILÈ",
        pack_creator: "Pakè Kreyatè",
        creator_desc: "Jwenn 3 liv",
        buy_creator: "Achte Pakè Kreyatè",
        pack_pro: "Pakè Pro",
        pro_desc: "Jwenn 5 liv",
        buy_pro: "Achte Pakè Pro",
        pack_vault: "Pakè Vault",
        vault_desc: "Jwenn tout 10 liv yo",
        all_books: "• Tout 10 liv yo enkli",
        buy_vault: "Achte Pakè Vault",
        choose_note: "Chwazi nan tout koleksyon ebook nou yo",
        social_title: "500+ kreyatè itilize Pwodwi nou yo deja",
        review1: "\"Pakè Kreyatè a ban mwen tout sa mwen te bezwen pou lanse biznis dijital mwen. Valè enkwayab!\"",
        creator_title: "Kreyatè Kontni",
        review2: "\"Mwen achte Pakè Pro a ebooks yo sove m semèn travay. Mwen rekòmande li!\"",
        entrepreneur: "Antreprenè",
        review3: "\"Pakè Vault la se pi bon envestisman mwen fè pou biznis mwen. Tout 10 liv yo se lò!\"",
        coach: "Coach Biznis",
        faq_title: "Kesyon Poze Souvan",
        faq1_q: "Èske mwen ka chwazi nenpòt ebook nan pakè a?",
        faq1_a: "Wi! Ak nenpòt pakè, ou ka chwazi ki ebooks ou vle nan tout koleksyon nou an ki gen 10 tit.",
        faq2_q: "Kijan mwen resevwa pwodwi mwen yo apre acha?",
        faq2_a: "Telechajman enstantane. Apre peman Stripe ou a, w ap resevwa yon imel ak lyen telechajman pou ebooks ou chwazi yo.",
        faq3_q: "Ki metòd peman ki aksepte?",
        faq3_a: "Nou aksepte tout gwo kat kredi, kat debi, ak Apple Pay/Google Pay atravè checkout sekirize Stripe la."
    },
    fr: {
        tag: "Produits Digitaux",
        hero_title: "CRÉEZ VOTRE PACK DIGITAL",
        hero_subtitle: "Achetez les Ebooks individuellement $27 l'unité ou économisez avec un Pack",
        how_title: "Comment Ça Marche",
        step1: "Choisissez Votre Pack",
        step2: "Choisissez N'importe Quels Ebooks",
        step3: "Téléchargez Instantanément",
        see_bundles: "Voir Tous les Packs →",
        packs_title: "Nos Packs Vedettes",
        packs_subtitle: "Choisissez parmi toute notre collection d'ebooks",
        pack_starter: "Pack Débutant",
        starter_desc: "Obtenez 2 livres sur 10 livres",
        buy_starter: "Acheter Pack Débutant",
        popular: "LE PLUS POPULAIRE",
        pack_creator: "Pack Créateur",
        creator_desc: "Obtenez 3 livres",
        buy_creator: "Acheter Pack Créateur",
        pack_pro: "Pack Pro",
        pro_desc: "Obtenez 5 livres",
        buy_pro: "Acheter Pack Pro",
        pack_vault: "Pack Vault",
        vault_desc: "Obtenez les 10 livres",
        all_books: "• Les 10 livres inclus",
        buy_vault: "Acheter Pack Vault",
        choose_note: "Choisissez parmi toute notre collection d'ebooks",
        social_title: "500+ créateurs utilisent déjà nos Produits",
        review1: "\"Le Pack Créateur m'a donné tout ce dont j'avais besoin pour lancer mon entreprise digitale. Valeur incroyable!\"",
        creator_title: "Créateur de Contenu",
        review2: "\"J'ai acheté le Pack Pro et les ebooks m'ont fait gagner des semaines de travail. Je recommande vivement!\"",
        entrepreneur: "Entrepreneur",
        review3: "\"Le Pack Vault est le meilleur investissement que j'ai fait pour mon entreprise. Les 10 livres sont de l'or!\"",
        coach: "Coach Business",
        faq_title: "FAQ",
        faq1_q: "Puis-je choisir n'importe quel ebook dans le pack?",
        faq1_a: "Oui! Avec n'importe quel pack, vous pouvez choisir quels ebooks vous voulez parmi notre collection complète de 10 titres.",
        faq2_q: "Comment je reçois mes produits après l'achat?",
        faq2_a: "Téléchargement instantané. Après votre paiement Stripe, vous recevrez un email avec les liens de téléchargement pour vos ebooks sélectionnés.",
        faq3_q: "Quels moyens de paiement sont acceptés?",
        faq3_a: "Nous acceptons toutes les principales cartes de crédit, cartes de débit, et Apple Pay/Google Pay via le checkout sécurisé de Stripe."
    },
    es: {
        tag: "Productos Digitales",
        hero_title: "CREA TU PAQUETE DIGITAL",
        hero_subtitle: "Compra Ebooks individualmente $27 cada uno o ahorra con un Pack",
        how_title: "Cómo Funciona",
        step1: "Elige Tu Pack",
        step2: "Elige Cualquier Ebook",
        step3: "Descarga Instantáneamente",
        see_bundles: "Ver Todos los Packs →",
        packs_title: "Nuestros Packs Destacados",
        packs_subtitle: "Elige de toda nuestra colección de ebooks",
        pack_starter: "Pack Inicial",
        starter_desc: "Obtén 2 libros de 10 libros",
        buy_starter: "Comprar Pack Inicial",
        popular: "MÁS POPULAR",
        pack_creator: "Pack Creador",
        creator_desc: "Obtén 3 libros",
        buy_creator: "Comprar Pack Creador",
        pack_pro: "Pack Pro",
        pro_desc: "Obtén 5 libros",
        buy_pro: "Comprar Pack Pro",
        pack_vault: "Pack Vault",
        vault_desc: "Obtén los 10 libros",
        all_books: "• Los 10 libros incluidos",
        buy_vault: "Comprar Pack Vault",
        choose_note: "Elige de toda nuestra colección de ebooks",
        social_title: "500+ creadores ya usan nuestros Productos",
        review1: "\"El Pack Creador me dio todo lo que necesitaba para lanzar mi negocio digital. ¡Valor increíble!\"",
        creator_title: "Creador de Contenido",
        review2: "\"Compré el Pack Pro y los ebooks me ahorraron semanas de trabajo. ¡Lo recomiendo mucho!\"",
        entrepreneur: "Emprendedor",
        review3: "\"El Pack Vault es la mejor inversión que he hecho para mi negocio. ¡Los 10 libros son oro!\"",
        coach: "Coach de Negocios",
        faq_title: "Preguntas Frecuentes",
        faq1_q: "¿Puedo elegir cualquier ebook en el pack?",
        faq1_a: "¡Sí! Con cualquier pack, puedes elegir qué ebooks quieres de nuestra colección completa de 10 títulos.",
        faq2_q: "¿Cómo recibo mis productos después de la compra?",
        faq2_a: "Descarga instantánea. Después de tu pago en Stripe, recibirás un email con enlaces de descarga para tus ebooks seleccionados.",
        faq3_q: "¿Qué métodos de pago se aceptan?",
        faq3_a: "Aceptamos todas las tarjetas de crédito principales, tarjetas de débito, y Apple Pay/Google Pay a través del checkout seguro de Stripe."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.lang === lang) btn.classList.add('active');
    });

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if(translations && translations && translations[key]) {
        el.innerText = translations[key];
        }
    });

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(other => {
                if(other!== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
