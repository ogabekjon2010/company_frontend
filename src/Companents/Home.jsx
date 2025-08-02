import "../home.css"
import {
  Phone,
  Mail,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  MapPin,
  PhoneCall,
  SendIcon,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

export default function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <div className="logo">Logo</div>
          <nav className="nav">
            <a href="#" className="nav-link">
              O kompaniya
            </a>
            <a href="#" className="nav-link">
              Portfoliyo
            </a>
            <a href="#" className="nav-link">
              Uslugi
            </a>
            <a href="#" className="nav-link">
              Kontakti
            </a>
          </nav>
        </div>
        <div className="header-right">
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>+998 90 777-77-77</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>chotatam@gmail.com</span>
            </div>
          </div>
          <div className="theme-toggle">
            <Sun size={20} />
            <Moon size={20} />
          </div>
          <button className="call-button">Zakazat' zvonok</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Biz veb-saytlar, ilovalarni ishlab chiqamiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="portfolio-button">Portfoliyo</button>
        </div>
        <div className="hero-image-placeholder">
          <img src="/placeholder.svg?height=400&width=400" alt="Abstract design" />
        </div>
      </section>

      {/* About Company Section */}
      <section className="about-company-section">
        <h2>Kompaniya haqida</h2>
        <div className="about-content">
          <p>
            Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion echimlarni taqdim etish maqsadida tashkil
            etilgan veb-agentlik. Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni taklif qilish uchun
            yaqin hamkorlikda ishlaydigan tajribali veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
          </p>
          <p>
            Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO optimallashtirish, kontent yaratish va
            reklama kompaniyalarini o'z ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi
            texnologiyalar va innovatsion usullardan foydalangan holda brendni rivojlantirish va sotishni ko'paytirish
            bilan shug'ullanamiz.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Proektov zapustil</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4 goda</span>
            <span className="stat-label">Opita razrabotki</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Professionalov</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4 goda</span>
            <span className="stat-label">Opita razrabotki</span>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="advantages-section">
        <h2>Bizning afzalliklarimiz</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Individual approach icon" className="advantage-icon" />
            <h3>Individual yondashuv</h3>
            <p>
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.
            </p>
          </div>
          <div className="advantage-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Expertise icon" className="advantage-icon" />
            <h3>Ekspertiza</h3>
            <p>
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.
            </p>
          </div>
          <div className="advantage-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Professional service icon" className="advantage-icon" />
            <h3>Professional xizmat</h3>
            <p>
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.
            </p>
          </div>
          <div className="advantage-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Individual approach icon" className="advantage-icon" />
            <h3>Individual yondashuv</h3>
            <p>
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.
            </p>
          </div>
          <div className="advantage-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Expertise icon" className="advantage-icon" />
            <h3>Ekspertiza</h3>
            <p>
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.
            </p>
          </div>
          <div className="advantage-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Professional service icon" className="advantage-icon" />
            <h3>Professional xizmat</h3>
            <p>
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="projects-section">
        <h2>Bajargan loyihalarimiz</h2>
        <div className="project-filters">
          <button className="filter-button active">Barchasi</button>
          <button className="filter-button">Veb sayt</button>
          <button className="filter-button">SMM</button>
          <button className="filter-button">Mobil ilova</button>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=300" alt="Mobile app screenshot" className="project-image" />
            <div className="project-overlay">
              <span className="project-tag">Mobil ilova</span>
              <h4 className="project-title">UYMAKON mobil ilovasi</h4>
            </div>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=300" alt="Web dashboard screenshot" className="project-image" />
            <div className="project-overlay">
              <span className="project-tag">Veb sayt</span>
              <h4 className="project-title">Veb sayt loyihasi</h4>
            </div>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=300" alt="SMM campaign screenshot" className="project-image" />
            <div className="project-overlay">
              <span className="project-tag">SMM</span>
              <h4 className="project-title">SMM kampaniyasi</h4>
            </div>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=300" alt="Mobile app screenshot" className="project-image" />
            <div className="project-overlay">
              <span className="project-tag">Mobil ilova</span>
              <h4 className="project-title">O'zbekistonda borjchalardagi qodalanib...</h4>
            </div>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=300" alt="Web design screenshot" className="project-image" />
            <div className="project-overlay">
              <span className="project-tag">Veb sayt</span>
              <h4 className="project-title">Veb dizayn loyihasi</h4>
            </div>
          </div>
          <div className="project-card">
            <img src="/placeholder.svg?height=200&width=300" alt="SMM design screenshot" className="project-image" />
            <div className="project-overlay">
              <span className="project-tag">SMM</span>
              <h4 className="project-title">Zakovat ila ilmingni charxla va ziyola qil!</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2>Bizning xizmatlar</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Web development icon" className="service-icon" />
            <h3>Veb saytlar</h3>
            <p>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yaratang.</p>
          </div>
          <div className="service-card">
            <img src="/placeholder.svg?height=48&width=48" alt="UI/UX design icon" className="service-icon" />
            <h3>UI/UX Dizayn</h3>
            <p>Biz UI/UX dizayn xizmatlarini taqdim etamiz.</p>
          </div>
          <div className="service-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Mobile apps icon" className="service-icon" />
            <h3>Mobil ilovalar</h3>
            <p>Biz eng yaxshi dizaynerlar xizmatlarini taqdim etamiz.</p>
          </div>
          <div className="service-card">
            <img src="/placeholder.svg?height=48&width=48" alt="SMM icon" className="service-icon" />
            <h3>SMM</h3>
            <p>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yaratang.</p>
          </div>
          <div className="service-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Graphic design icon" className="service-icon" />
            <h3>Grafik dizayn</h3>
            <p>Biz fotografiya xizmatlarini taqdim etamiz.</p>
          </div>
          <div className="service-card">
            <img src="/placeholder.svg?height=48&width=48" alt="Motion design icon" className="service-icon" />
            <h3>Motion dizayn</h3>
            <p>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yaratang.</p>
          </div>
        </div>
      </section>

      {/* Blog News Section */}
      <section className="blog-section">
        <h2>Blog yangiliklarimiz</h2>
        <div className="blog-carousel">
          <button className="carousel-arrow left">
            <ChevronLeft size={24} />
          </button>
          <div className="blog-posts-container">
            <div className="blog-post-card">
              <img src="/placeholder.svg?height=200&width=300" alt="QA image" className="blog-image" />
              <div className="blog-content">
                <h4>«QA» mutaxassisi qanday bo'lishi kerak?</h4>
                <p>
                  Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham
                  qo'shilgan.
                </p>
                <div className="blog-meta">
                  <span>#hi_tech</span>
                  <span>14:45</span>
                  <span>22/02/23</span>
                </div>
              </div>
            </div>
            <div className="blog-post-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Najot Ta'lim logo" className="blog-image" />
              <div className="blog-content">
                <h4>«Najot Ta'lim» logosi haqida nimalarni bilasiz?</h4>
                <p>«Najot Ta'lim» logosi Abat logo hisoblanadi. Bu kabi martada ilg'ash qiyin bo'li...</p>
                <div className="blog-meta">
                  <span>#hi_tech</span>
                  <span>14:45</span>
                  <span>22/02/23</span>
                </div>
              </div>
            </div>
            <div className="blog-post-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Java developers" className="blog-image" />
              <div className="blog-content">
                <h4>«TechJobs» kompaniyasi Java dasturchilarni maxsus «Deep interview»ga taklif qiladi!</h4>
                <p>Intervyuda sizning o'z sohangizdagi bo'shliqlaringiz, kamchiliklaringiz aniqlanib...</p>
                <div className="blog-meta">
                  <span>#hi_tech #apple</span>
                  <span>14:45</span>
                  <span>22/02/23</span>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-arrow right">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Bizning jamoa</h2>
        <div className="team-carousel">
          <button className="carousel-arrow left">
            <ChevronLeft size={24} />
          </button>
          <div className="team-members-container">
            <div className="team-member-card">
              <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="member-image" />
              <h4 className="member-name">Saidalixon Sobirov</h4>
              <p className="member-role">Frontend dasturchi</p>
            </div>
            <div className="team-member-card">
              <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="member-image" />
              <h4 className="member-name">Saidalixon Sobirov</h4>
              <p className="member-role">SMM designer</p>
            </div>
            <div className="team-member-card">
              <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="member-image" />
              <h4 className="member-name">Saidalixon Sobirov</h4>
              <p className="member-role">Project Manager</p>
            </div>
            <div className="team-member-card">
              <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="member-image" />
              <h4 className="member-name">Saidalixon Sobirov</h4>
              <p className="member-role">UX/UI web designer</p>
            </div>
          </div>
          <button className="carousel-arrow right">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-content">
          <h2>Sizni bir finjon qahva ustida loyihangizni batafsil muhokama qilishga mamnuniyat ila taklif qilamiz.</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ismingiz</label>
              <input type="text" id="name" name="name" placeholder=" " />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon raqamingiz</label>
              <input type="text" id="phone" name="phone" placeholder=" " />
            </div>
            <div className="form-group">
              <label htmlFor="message">G'oyangiz haqida qisqacha (Muhim emas)</label>
              <textarea id="message" name="message" rows="3" placeholder=" "></textarea>
            </div>

            <h3>Qanday xizmatlardan foydalanishni xoxlaysiz?</h3>
            <div className="checkbox-grid">
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="backend" /> Backend
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="frontend" /> Frontend
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="crm" /> CRM ishlab chiqish
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="graphic-design" /> Grafik dizayn
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="internet-magazine" /> Internet magazin ishlab chiqish
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="motion-design" /> Motion dizayn
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="logotip-brandbook" /> Logotip va Brandbook
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="mobile-app" /> Mobil ilova ishlab chiqish
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="portal" /> Portal ishlab chiqish
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="web-site" /> Veb sayt ishlab chiqish
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="web-design" /> Veb dizayn
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="smm-design" /> SMM dizayn
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="service" value="mobilograf" /> Mobilograf
              </label>
            </div>

            <h3>NIMANI MA'QUL KO'RASIZ?</h3>
            <div className="drink-options">
              <div className="drink-item">
                <img src="/placeholder.svg?height=100&width=100" alt="Black coffee" />
                <span>Achchiq kofe</span>
              </div>
              <div className="drink-item">
                <img src="/placeholder.svg?height=100&width=100" alt="Milk coffee" />
                <span>Sutli kofe</span>
              </div>
              <div className="drink-item">
                <img src="/placeholder.svg?height=100&width=100" alt="Water glass" />
                <span>Suv</span>
              </div>
              <div className="drink-item">
                <img src="/placeholder.svg?height=100&width=100" alt="Tea cup" />
                <span>Choy</span>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Mijoz bo'lish
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <div className="logo">LOGO</div>
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <div className="footer-address">
              <MapPin size={16} />
              <span>Manzil: Toshkent shahri, Sergeli tumani, Navro'z Mo'ljal: "ASIA AUTO" avtosalon ichki qismi</span>
            </div>
            <div className="footer-phones">
              <PhoneCall size={16} />
              <span>+998 99 999 99 99</span>
              <PhoneCall size={16} />
              <span>+998 99 999 99 99</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Send">
              <SendIcon size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
