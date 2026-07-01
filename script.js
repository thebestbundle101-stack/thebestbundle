/* ============================================================
   TheBestBundle – script.js
   Translations, language switcher, price updater, Stripe checkout
   ============================================================ */

'use strict';

/* ---------- Stripe Public Key ---------- */
const STRIPE_PUBLIC_KEY = 'pk_live_51TXX89Rtp4gVtODydZxYlNUY39a726EJikJoAJQMLvlKcZ1ATvfaqqgVP0Abhpy7cguHNl3lfriosXNxQGDUfjQz00LccqSNa6';
const stripe = Stripe(STRIPE_PUBLIC_KEY);
/* ---------- Prices Object ---------- */
const PRI = {
  pack2:  37,
  pack3:  47,
  pack5:  67,
  pack10: 97
};

/* ---------- Translations ---------- */
const TRANSLATIONS = {
  en: {
    heroBadge:        'Digital Products',
    heroTitle:        'Build Your Digital Bundle',
    heroSlogan:       'Buy Ebooks & Templates Individually or Save with Bundles',
    heroCta:          'See All Bundles →',
    howTitle:         'How It Works',
    step1:            'Choose Your Pack',
    step2:            'Pick Any Ebooks & Templates',
    step3:            'Download Instantly',
    packsTitle:       'Our Featured Packs',
    packsSubtitle:    'Choose from our entire collection of ebooks and templates',
    packsDesc:        'Choose from our entire collection of ebooks and templates',
    packPick2:        'Choose 2 products',
    packPick3:        'Choose 3 products',
    packPick5:        'Choose 5 products',
    packPick10:       'Get All Ebooks + All Templates',
    packCta:          'Get This Pack →',
    packCtaVault:     'Get Complete Vault →',
    ribbonPopular:    'Most Popular',
    indivTitle:       'Prefer to Buy Individually?',
    indivSubtitle:    'Browse all our ebooks and templates',
    indivEbooks:      'All Ebooks →',
    indivTemplates:   'All Templates →',
    proofHeadline:    '2,000+ Creators Use Our Products',
    testimonial1Text: '"The Creator Pack gave me everything I needed to launch my digital business. Incredible value!"',
    testimonial1Role: 'Content Creator',
    testimonial2Text: '"I bought the Pro Pack and the templates saved me weeks of work. Highly recommend!"',
    testimonial2Role: 'Entrepreneur',
    faqTitle:         'FAQ',
    faq1Q:            'Can I choose any ebook or template in the bundle?',
    faq1A:            "Yes. You can pick from our entire collection. After purchase, you'll get an email to select your products.",
    faq2Q:            'How do I receive my products after purchase?',
    faq2A:            "After your payment is confirmed, you'll be redirected to a page where you select your products. We'll send them to your email within 10 minutes.",
    faq3Q:            'What payment methods are accepted?',
    faq3A:            'We accept Credit/Debit Cards, Apple Pay, Google Pay, US Bank Transfers (ACH), Klarna, and Link by Stripe.',
    footerRights:     'All rights reserved.',
    checkoutLoading:  'Redirecting to secure checkout…',
  },
  ht: {
    heroBadge:        'Pwodui Dijital',
    heroTitle:        'Bati Bundle Dijital Ou',
    heroSlogan:       'Achte Ebooks ak Templates An Inite oswa Ekonomize ak Bundle',
    heroCta:          'Wè Tout Bundle yo →',
    howTitle:         'Kijan Sa Mache',
    step1:            'Chwazi Pack Ou',
    step2:            'Pran Ebooks ak Templates Ou Vle',
    step3:            'Download Touswit',
    packsTitle:       'Pack Vedet Nou Yo',
    packsSubtitle:    'Chwazi nan tout koleksyon ebooks ak templates nou yo',
    packsDesc:        'Chwazi nan tout koleksyon ebooks ak templates nou yo',
    packPick2:        'Chwazi 2 pwodui',
    packPick3:        'Chwazi 3 pwodui',
    packPick5:        'Chwazi 5 pwodui',
    packPick10:       'Jwenn Tout Ebooks + Tout Templates',
    packCta:          'Pran Pack Sa →',
    packCtaVault:     'Pran Complete Vault →',
    ribbonPopular:    'Pi Popilè',
    indivTitle:       'Prefere Achte An Inite?',
    indivSubtitle:    'Gade tout ebooks ak templates nou yo',
    indivEbooks:      'Tout Ebooks →',
    indivTemplates:   'Tout Templates →',
    proofHeadline:    'Plis pase 2,000 Kreyatè Sèvi ak Pwodui Nou Yo',
    testimonial1Text: '"Creator Pack la ban mwen tout sa m te bezwen pou lanse biznis dijital mwen an. Valè enkwayab!"',
    testimonial1Role: 'Kreyatè Kontni',
    testimonial2Text: '"Mwen achte Pro Pack la epi templates yo ekonomize semèn travay pou mwen. Mwen rekòmande l!"',
    testimonial2Role: 'Antreprenè',
    faqTitle:         'FAQ',
    faq1Q:            'Èske m ka chwazi nenpòt ebook oswa template nan bundle la?',
    faq1A:            'Wi. Ou ka chwazi nan tout koleksyon nou an. Apre acha, ou ap resevwa yon imèl pou chwazi pwodui ou vle yo.',
    faq2Q:            'Kijan m ap resevwa pwodui mwen yo apre acha?',
    faq2A:            'Apre peman ou konfime, ou ap redirije sou yon paj kote ou chwazi pwodui ou yo. N ap voye yo nan imèl ou nan 10 minit.',
    faq3Q:            'Ki metòd peman yo aksepte?',
    faq3A:            'Nou aksepte Kat Kredi/Debi, Apple Pay, Google Pay, Transfè Bank Ameriken (ACH), Klarna, ak Link by Stripe.',
    footerRights:     'Tout dwa rezève.',
    checkoutLoading:  'Redireksyon nan checkout sekirize…',
  },
  fr: {
    heroBadge:        'Produits Numériques',
    heroTitle:        'Construisez Votre Pack Digital',
    heroSlogan:       'Achetez Ebooks et Templates à l\'Unité ou Économisez avec nos Packs',
    heroCta:          'Voir Tous les Packs →',
    howTitle:         'Comment Ça Marche',
    step1:            'Choisissez Votre Pack',
    step2:            'Sélectionnez Vos Ebooks & Templates',
    step3:            'Téléchargez Instantanément',
    packsTitle:       'Nos Packs Vedettes',
    packsSubtitle:    'Choisissez parmi toute notre collection d\'ebooks et de templates',
    packsDesc:        'Choisissez parmi toute notre collection d\'ebooks et de templates',
    packPick2:        'Choisissez 2 produits',
    packPick3:        'Choisissez 3 produits',
    packPick5:        'Choisissez 5 produits',
    packPick10:       'Obtenez Tous les Ebooks + Tous les Templates',
    packCta:          'Obtenir Ce Pack →',
    packCtaVault:     'Obtenir le Vault Complet →',
    ribbonPopular:    'Le Plus Populaire',
    indivTitle:       'Préférez Acheter à l\'Unité ?',
    indivSubtitle:    'Parcourez tous nos ebooks et templates',
    indivEbooks:      'Tous les Ebooks →',
    indivTemplates:   'Tous les Templates →',
    proofHeadline:    'Plus de 2 000 Créateurs Utilisent Nos Produits',
    testimonial1Text: '"Le Creator Pack m\'a donné tout ce dont j\'avais besoin pour lancer mon activité digitale. Valeur incroyable !"',
    testimonial1Role: 'Créateur de Contenu',
    testimonial2Text: '"J\'ai acheté le Pro Pack et les templates m\'ont économisé des semaines de travail. Je recommande vivement !"',
    testimonial2Role: 'Entrepreneur',
    faqTitle:         'FAQ',
    faq1Q:            'Puis-je choisir n\'importe quel ebook ou template dans le pack ?',
    faq1A:            'Oui. Vous pouvez choisir dans toute notre collection. Après l\'achat, vous recevrez un e-mail pour sélectionner vos produits.',
    faq2Q:            'Comment vais-je recevoir mes produits après l\'achat ?',
    faq2A:            'Après confirmation de votre paiement, vous serez redirigé vers une page pour sélectionner vos produits. Nous vous les enverrons par e-mail dans les 10 minutes.',
    faq3Q:            'Quels modes de paiement sont acceptés ?',
    faq3A:            'Nous acceptons les Cartes de Crédit/Débit, Apple Pay, Google Pay, Virements Bancaires US (ACH), Klarna et Link by Stripe.',
    footerRights:     'Tous droits réservés.',
    checkoutLoading:  'Redirection vers le paiement sécurisé…',
  },
  es: {
    heroBadge:        'Productos Digitales',
    heroTitle:        'Construye Tu Pack Digital',
    heroSlogan:       'Compra Ebooks y Plantillas Individuales o Ahorra con Packs',
    heroCta:          'Ver Todos los Packs →',
    howTitle:         'Cómo Funciona',
    step1:            'Elige Tu Pack',
    step2:            'Selecciona Tus Ebooks y Plantillas',
    step3:            'Descarga al Instante',
    packsTitle:       'Nuestros Packs Destacados',
    packsSubtitle:    'Elige de toda nuestra colección de ebooks y plantillas',
    packsDesc:        'Elige de toda nuestra colección de ebooks y plantillas',
    packPick2:        'Elige 2 productos',
    packPick3:        'Elige 3 productos',
    packPick5:        'Elige 5 productos',
    packPick10:       'Obtén Todos los Ebooks + Todas las Plantillas',
    packCta:          'Obtener Este Pack →',
    packCtaVault:     'Obtener el Vault Completo →',
    ribbonPopular:    'Más Popular',
    indivTitle:       '¿Prefieres Comprar Individualmente?',
    indivSubtitle:    'Explora todos nuestros ebooks y plantillas',
    indivEbooks:      'Todos los Ebooks →',
    indivTemplates:   'Todas las Plantillas →',
    proofHeadline:    'Más de 2,000 Creadores Usan Nuestros Productos',
    testimonial1Text: '"El Creator Pack me dio todo lo que necesitaba para lanzar mi negocio digital. ¡Valor increíble!"',
    testimonial1Role: 'Creador de Contenido',
    testimonial2Text: '"Compré el Pro Pack y las plantillas me ahorraron semanas de trabajo. ¡Muy recomendado!"',
    testimonial2Role: 'Emprendedor',
    faqTitle:         'Preguntas Frecuentes',
    faq1Q:            '¿Puedo elegir cualquier ebook o plantilla del pack?',
    faq1A:            'Sí. Puedes elegir de toda nuestra colección. Después de la compra, recibirás un correo para seleccionar tus productos.',
    faq2Q:            '¿Cómo recibiré mis productos después de la compra?',
    faq2A:            'Tras confirmar tu pago, serás redirigido a una página para seleccionar tus productos. Te los enviaremos por correo en 10 minutos.',
    faq3Q:            '¿Qué métodos de pago se aceptan?',
    faq3A:            'Aceptamos Tarjetas de Crédito/Débito, Apple Pay, Google Pay, Transferencias Bancarias US (ACH), Klarna y Link by Stripe.',
    footerRights:     'Todos los derechos reservados.',
    checkoutLoading:  'Redirigiendo al pago seguro…',
  }
};

/* ---------- Update Prices ---------- */
function updatePrices() {
  document.querySelectorAll('.price[data-pack]').forEach(function (el) {
    const packId = el.getAttribute('data-pack');
    if (PRI[packId] !== undefined) {
      el.textContent = '$' + PRI[packId];
    }
  });
}

/* ---------- Switch Language ---------- */
function switchLang(lang) {
  if (!TRANSLATIONS[lang]) return;

  const t = TRANSLATIONS[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Save to localStorage
  try {
    localStorage.setItem('tbb_lang', lang);
  } catch (e) { /* ignore */ }
}

/* ---------- Handle Checkout ---------- */
async function handleCheckout(packId) {
  const overlay = document.getElementById('checkoutOverlay');

  // Show loading overlay
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');

  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packId: packId })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || 'Network error: ' + response.status);
    }

    const data = await response.json();

    if (!data.sessionId) {
      throw new Error('No session ID returned from server.');
    }

    // Redirect to Stripe Checkout (modal-like experience)
    const stripe = Stripe(STRIPE_PUBLIC_KEY);
    const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });

    if (result.error) {
      throw new Error(result.error.message);
    }

  } catch (err) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    console.error('Checkout error:', err);
    alert('Checkout error: ' + err.message + '\n\nPlease make sure STRIPE_PUBLIC_KEY is configured.');
  }
}

/* ---------- FAQ Accordion ---------- */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      // Close all
      document.querySelectorAll('.faq-question').forEach(function (q) {
        q.setAttribute('aria-expanded', 'false');
        const a = q.nextElementSibling;
        if (a) a.hidden = true;
      });

      // Toggle clicked
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });
}

/* ---------- Language Switcher Buttons ---------- */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = this.getAttribute('data-lang');
      switchLang(lang);
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', function () {
  // Determine language: localStorage → browser → default 'en'
  let savedLang = 'en';
  try {
    const stored = localStorage.getItem('tbb_lang');
    if (stored && TRANSLATIONS[stored]) {
      savedLang = stored;
    } else {
      const browserLang = (navigator.language || 'en').toLowerCase().split('-')[0];
      if (TRANSLATIONS[browserLang]) {
        savedLang = browserLang;
      }
    }
  } catch (e) { /* ignore */ }

  updatePrices();
  initLangSwitcher();
  initFAQ();
  switchLang(savedLang);
});
