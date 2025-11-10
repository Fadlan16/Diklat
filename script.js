// Modern JavaScript dengan efek interaktif
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const heroSection = document.getElementById('hero');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          // diklat.js - JavaScript untuk Portal Berita

// Inisialisasi ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portal Berita - JavaScript loaded');
    
    // Inisialisasi komponen
    initMobileMenu();
    initSearchFunctionality();
    initNewsInteractions();
    initNewsletterSubscription();
    initDarkModeToggle();
});

// Fungsi untuk mobile menu
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    
    // Buat mobile menu
    mobileMenu.className = 'mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6';
    mobileMenu.innerHTML = `
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold">Menu</h2>
            <button class="close-menu text-2xl">&times;</button>
        </div>
        <nav class="space-y-4">
            <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Beranda</a>
            <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Politik</a>
            <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Ekonomi</a>
            <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Teknologi</a>
            <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Olahraga</a>
            <a href="#" class="block text-gray-700 hover:text-blue-600 font-medium">Hiburan</a>
        </nav>
        <div class="mt-8">
            <div class="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <i class="fas fa-search text-gray-500 mr-2"></i>
                <input type="text" placeholder="Cari berita..." class="bg-transparent focus:outline-none w-full">
            </div>
        </div>
    `;
    
    // Tambahkan mobile menu ke body
    document.body.appendChild(mobileMenu);
    
    // Event listener untuk tombol menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }
    
    // Event listener untuk tombol close
    const closeButton = mobileMenu.querySelector('.close-menu');
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Tutup menu ketika klik di luar
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Fungsi untuk pencarian
function initSearchFunctionality() {
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Cari"]');
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    });
}

function performSearch(query) {
    if (query.trim() === '') return;
    
    // Simulasi pencarian
    console.log(`Mencari: ${query}`);
    
    // Dalam implementasi nyata, ini akan mengarahkan ke halaman hasil pencarian
    // atau melakukan permintaan AJAX
    alert(`Hasil pencarian untuk: ${query}`);
}

// Fungsi untuk interaksi berita
function initNewsInteractions() {
    // Tambahkan event listener untuk semua card berita
    const newsCards = document.querySelectorAll('.bg-white.rounded-xl');
    
    newsCards.forEach(card => {
        // Tambahkan kelas untuk animasi
        card.classList.add('news-card');
        
        // Simpan berita yang dilihat
        card.addEventListener('click', function() {
            const title = this.querySelector('h3, h4').textContent;
            trackNewsView(title);
        });
    });
    
    // Update view count untuk berita populer
    updatePopularNews();
}

function trackNewsView(title) {
    // Simulasi pelacakan view
    console.log(`Melihat berita: ${title}`);
    
    // Dalam implementasi nyata, ini akan mengirim data ke analytics
    // atau backend untuk melacak berita populer
}

function updatePopularNews() {
    // Simulasi update berita populer
    // Dalam implementasi nyata, ini akan mengambil data dari API
    setTimeout(() => {
        console.log('Memperbarui berita populer...');
    }, 5000);
}

// Fungsi untuk newsletter
function initNewsletterSubscription() {
    const newsletterForm = document.querySelector('footer input[type="email"]');
    const subscribeButton = document.querySelector('footer button.bg-blue-600');
    
    if (newsletterForm && subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            const email = newsletterForm.value;
            
            if (validateEmail(email)) {
                subscribeToNewsletter(email);
            } else {
                alert('Masukkan alamat email yang valid!');
            }
        });
        
        // Juga berfungsi dengan tombol Enter
        newsletterForm.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeButton.click();
            }
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function subscribeToNewsletter(email) {
    // Simulasi pendaftaran newsletter
    console.log(`Mendaftar newsletter dengan email: ${email}`);
    
    // Dalam implementasi nyata, ini akan mengirim data ke backend
    alert(`Terima kasih! Anda telah berlangganan newsletter dengan email: ${email}`);
    
    // Reset form
    document.querySelector('footer input[type="email"]').value = '';
}

// Fungsi untuk dark mode
function initDarkModeToggle() {
    // Cek preferensi dark mode sistem
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Tambahkan toggle dark mode (opsional)
    // Dalam implementasi lengkap, Anda bisa menambahkan tombol toggle
}

// Fungsi utilitas untuk format tanggal
function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
        return 'Baru saja';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} menit yang lalu`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} jam yang lalu`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} hari yang lalu`;
    }
}

// Ekspor fungsi untuk penggunaan di tempat lain (jika diperlukan)
window.PortalBerita = {
    search: performSearch,
    subscribe: subscribeToNewsletter,
    formatTime: formatRelativeTime
};  header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Parallax effect untuk hero section
        if (heroSection) {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });

    // Smooth scroll untuk navigasi
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);

    // Animate skill bars when in viewport
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute('data-level');
                entry.target.style.width = skillLevel + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // Typing effect untuk hero section
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Hover effect untuk card items
    const cards = document.querySelectorAll('.skill-item, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    console.log("🚀 Website siap dengan desain modern!");
});