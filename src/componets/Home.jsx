// "use client"

// import { useState, useEffect } from "react"
// import "./style/home.css"

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const portfolioItems = [
//     { id: 1, title: "UZINFOCOM mobil ilovasi", image: "/placeholder.svg?height=300&width=400" },
//     { id: 2, title: "Xarita loyihasi", image: "/placeholder.svg?height=300&width=400" },
//     { id: 3, title: "Mobil ilova", image: "/placeholder.svg?height=300&width=400" },
//     { id: 4, title: "Veb sayt loyihasi", image: "/placeholder.svg?height=300&width=400" },
//     { id: 5, title: "Korporativ sayt", image: "/placeholder.svg?height=300&width=400" },
//     { id: 6, title: "E-commerce loyiha", image: "/placeholder.svg?height=300&width=400" },
//   ]

//   const blogPosts = [
//     {
//       id: 1,
//       title: "NAJOT TA'LIM",
//       description: "Zamonaviy ta'lim texnologiyalari haqida",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "15 Dekabr 2024",
//     },
//     {
//       id: 2,
//       title: "MAXSUS INTERVYU",
//       description: "IT sohasidagi eng so'nggi yangiliklar",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "12 Dekabr 2024",
//     },
//     {
//       id: 3,
//       title: "TEXNOLOGIYA",
//       description: "Kelajak texnologiyalari haqida",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "10 Dekabr 2024",
//     },
//   ]

//   const teamMembers = [
//     { id: 1, name: "Abdullayev Bobur", position: "Frontend Developer", image: "/placeholder.svg?height=200&width=200" },
//     { id: 2, name: "Karimova Gulnora", position: "UI/UX Designer", image: "/placeholder.svg?height=200&width=200" },
//     { id: 3, name: "Toshmatov Sardor", position: "Backend Developer", image: "/placeholder.svg?height=200&width=200" },
//     { id: 4, name: "Nazarova Sevara", position: "Project Manager", image: "/placeholder.svg?height=200&width=200" },
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="home">
//       {/* Header */}
//       <header className="header">
//         <div className="container">
//           <div className="header-content">
//             <div className="logo">
//               <h2>Logo</h2>
//             </div>
//             <nav className="nav">
//               <a href="#home">Bosh sahifa</a>
//               <a href="#about">Kompaniya haqida</a>
//               <a href="#services">Xizmatlar</a>
//               <a href="#portfolio">Loyihalar</a>
//             </nav>
//             <div className="header-contact">
//               <span className="phone">+998 99 123 45 67</span>
//               <button className="contact-btn">Bog'lanish</button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="container">
//           <div className="hero-content">
//             <div className="hero-text">
//               <h1>Biz veb-saytlar, ilovalarni ishlab chiqamiz</h1>
//               <p>
//                 Zamonaviy texnologiyalar yordamida sizning biznesingiz uchun professional veb-saytlar va mobil ilovalar
//                 yaratamiz
//               </p>
//               <button className="hero-btn">Loyiha boshlash</button>
//             </div>
//             <div className="hero-circle">
//               <div className="circle-gradient"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats">
//         <div className="container">
//           <h2>Kompaniya haqida</h2>
//           <div className="stats-grid">
//             <div className="stat-item">
//               <h3>20+</h3>
//               <p>Tajriba yillari</p>
//             </div>
//             <div className="stat-item">
//               <h3>4 yildan</h3>
//               <p>Bozor tajribasi</p>
//             </div>
//             <div className="stat-item">
//               <h3>100+</h3>
//               <p>Muvaffaqiyatli loyihalar</p>
//             </div>
//             <div className="stat-item">
//               <h3>4 yildan</h3>
//               <p>Mijozlar bilan ishlash</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         <div className="container">
//           <h2>Bizning xizmatlarimiz</h2>
//           <div className="services-grid">
//             <div className="service-card">
//               <div className="service-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                   <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="#8B5CF6" strokeWidth="2" />
//                 </svg>
//               </div>
//               <h3>Veb-sayt yaratish</h3>
//               <p>Zamonaviy va responsive veb-saytlar yaratamiz</p>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                   <path d="M10 10H30V30H10V10Z" stroke="#8B5CF6" strokeWidth="2" />
//                   <path d="M15 15L25 25M25 15L15 25" stroke="#8B5CF6" strokeWidth="2" />
//                 </svg>
//               </div>
//               <h3>Dizayn</h3>
//               <p>Professional UI/UX dizayn xizmatlari</p>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                   <path d="M20 5L30 15H25V25H15V15H10L20 5Z" stroke="#8B5CF6" strokeWidth="2" />
//                 </svg>
//               </div>
//               <h3>Professional xizmat</h3>
//               <p>Yuqori sifatli texnik yordamlar</p>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                   <circle cx="20" cy="20" r="15" stroke="#8B5CF6" strokeWidth="2" />
//                   <path d="M20 10V20L25 25" stroke="#8B5CF6" strokeWidth="2" />
//                 </svg>
//               </div>
//               <h3>Vaqtida yetkazish</h3>
//               <p>Loyihalarni belgilangan muddatda bajaramiz</p>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                   <path d="M15 20L18 23L25 16" stroke="#8B5CF6" strokeWidth="2" />
//                   <circle cx="20" cy="20" r="15" stroke="#8B5CF6" strokeWidth="2" />
//                 </svg>
//               </div>
//               <h3>Sifat kafolati</h3>
//               <p>Yuqori sifat va uzoq muddatli qo'llab-quvvatlash</p>
//             </div>
//             <div className="service-card">
//               <div className="service-icon">
//                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                   <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="#8B5CF6" strokeWidth="2" />
//                 </svg>
//               </div>
//               <h3>Professional xizmat</h3>
//               <p>Tajribali mutaxassislar jamoasi</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section className="portfolio">
//         <div className="container">
//           <h2>Bizlardan loyihalarimiz</h2>
//           <div className="portfolio-grid">
//             {portfolioItems.map((item) => (
//               <div key={item.id} className="portfolio-item">
//                 <img src={item.image || "/placeholder.svg"} alt={item.title} />
//                 <div className="portfolio-overlay">
//                   <h3>{item.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Services */}
//       <section className="additional-services">
//         <div className="container">
//           <h2>Bizning xizmatlar</h2>
//           <div className="additional-services-grid">
//             <div className="additional-service">
//               <h3>Veb saytlar</h3>
//               <p>Korporativ saytlar, internet do'konlar va boshqa veb loyihalar</p>
//             </div>
//             <div className="additional-service">
//               <h3>UX/UI Dizayn</h3>
//               <p>Foydalanuvchi tajribasi va interfeys dizayni</p>
//             </div>
//             <div className="additional-service">
//               <h3>Mobil ilovalar</h3>
//               <p>Android va iOS uchun mobil ilovalar yaratish</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="blog">
//         <div className="container">
//           <h2>Blog yangiklarimiz</h2>
//           <div className="blog-grid">
//             {blogPosts.map((post) => (
//               <div key={post.id} className="blog-card">
//                 <img src={post.image || "/placeholder.svg"} alt={post.title} />
//                 <div className="blog-content">
//                   <h3>{post.title}</h3>
//                   <p>{post.description}</p>
//                   <span className="blog-date">{post.date}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="team">
//         <div className="container">
//           <h2>Bizning jamoa</h2>
//           <div className="team-slider">
//             <div className="team-grid" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
//               {teamMembers.map((member) => (
//                 <div key={member.id} className="team-member">
//                   <img src={member.image || "/placeholder.svg"} alt={member.name} />
//                   <h3>{member.name}</h3>
//                   <p>{member.position}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="faq">
//         <div className="container">
//           <div className="faq-content">
//             <div className="faq-text">
//               <h2>Savollar bo'yicha qo'llab-quvvatlash</h2>
//               <p>Sizda savollar bormi? Biz sizga yordam berishga tayyormiz</p>
//               <div className="faq-list">
//                 <div className="faq-item">✓ Bepul maslahat</div>
//                 <div className="faq-item">✓ 24/7 qo'llab-quvvatlash</div>
//                 <div className="faq-item">✓ Tez javob berish</div>
//                 <div className="faq-item">✓ Professional yondashuv</div>
//               </div>
//             </div>
//             <div className="faq-awards">
//               <h3>BIZNING MUKOFOTLARIMIZ</h3>
//               <div className="awards-grid">
//                 <div className="award">
//                   <div className="award-icon gold"></div>
//                   <span>Oltin medal</span>
//                 </div>
//                 <div className="award">
//                   <div className="award-icon silver"></div>
//                   <span>Kumush medal</span>
//                 </div>
//                 <div className="award">
//                   <div className="award-icon bronze"></div>
//                   <span>Bronza medal</span>
//                 </div>
//                 <div className="award">
//                   <div className="award-icon red"></div>
//                   <span>Maxsus mukofot</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-logo">
//               <h2>LOGO</h2>
//               <p>Biz sizning biznesingizni rivojlantirishga yordam beramiz</p>
//             </div>
//             <div className="footer-contact">
//               <h3>Bog'lanish</h3>
//               <p>+998 99 123 45 67</p>
//               <p>info@xcompany.uz</p>
//               <div className="social-links">
//                 <a href="#" aria-label="Facebook">
//                   📘
//                 </a>
//                 <a href="#" aria-label="Instagram">
//                   📷
//                 </a>
//                 <a href="#" aria-label="Telegram">
//                   ✈️
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Home



import { useState } from "react"
import "./Style/home.css"
import { useEffect } from "react"

function Home() {

  const [companydata,setCOmpanyData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/company/projects/')
      .then((responese) => {
          if(!responese.ok) {
              setError("Backenddan malumot olishda xatolik yuz berdi..")
          }
          console.log(responese);
          
          return responese.json()
      })
      .then((data) => {
          setCOmpanyData(data)
          console.log(data);
          setLoading(false)
      })
      .catch((err) => {
          setError(err.message)
      })
  },[])

  if (!loading) {
      <h1>Yuklanmoqda......</h1>
  }

  if (!error) {
    <h1>MAluimotlarni olishda xatolik yuz berdi..</h1>
  }
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <nav className="nav">
              <a href="#" className="nav-link">
                Kompaniya
              </a>
              <a href="#" className="nav-link">
                Loyihalar
              </a>
              <a href="#" className="nav-link">
                Xizmatlar
              </a>
              <a href="#" className="nav-link">
                Kontaktlar
              </a>
            </nav>
            <div className="header-contact">
              <span className="phone">+998 99 123 45 67</span>
              <button className="cta-button">Bog'lanish</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Biz veb-saytlar, ilovalarni ishlab chiqamiz</h1>
              <p>
                Zamonaviy texnologiyalar yordamida sizning biznesingiz uchun professional veb-saytlar va mobil ilovalar
                yaratamiz. Bizning tajribali jamoamiz har bir loyihaga individual yondashadi.
              </p>
              <button className="hero-button">Batafsil</button>
            </div>
            <div className="hero-visual">
              <div className="hero-circle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-content">
            <div className="stats-text">
              <h2>Kompaniya haqida</h2>
              <p>
                Bizning kompaniyamiz 5 yildan ortiq vaqt davomida raqamli yechimlar sohasida faoliyat yuritadi. Biz
                mijozlarimizning ehtiyojlarini tushunib, ularning biznesini rivojlantirishga yordam beramiz.
              </p>
              <p>
                Har bir loyiha uchun individual yondashuv va zamonaviy texnologiyalardan foydalanish bizning asosiy
                tamoyillarimizdir.
              </p>
            </div>
            <div className="stats-numbers">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Yil tajriba</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4 yoqda</span>
                <span className="stat-label">Olib borilgan loyihalar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Mutaxassislar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4 yoqda</span>
                <span className="stat-label">Mamnun mijozlar</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Bizning afzalliklarimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🎯</span>
                </div>
              </div>
              <h3>Individual yondashuv</h3>
              <p>
                Har bir mijoz uchun maxsus yechimlar ishlab chiqamiz va ularning biznes ehtiyojlarini hisobga olamiz.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>⚡️</span>
                </div>
              </div>
              <h3>Tezkorlik</h3>
              <p>Loyihalarni belgilangan muddatlarda sifatli va tezkor tarzda amalga oshiramiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🚀</span>
                </div>
              </div>
              <h3>Professional xizmat</h3>
              <p>Zamonaviy texnologiyalar va eng so'nggi trendlardan foydalanib professional xizmat ko'rsatamiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🎯</span>
                </div>
              </div>
              <h3>Individual yondashuv</h3>
              <p>Mijozlarimizning har bir talabini diqqat bilan o'rganib, eng yaxshi yechimlarni taklif etamiz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>⚡️</span>
                </div>
              </div>
              <h3>Tezkorlik</h3>
              <p>Vaqtni tejash va samaradorlikni oshirish bizning ustuvor yo'nalishlarimizdan biridir.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-circle">
                  <span>🚀</span>
                </div>
              </div>
              <h3>Professional xizmat</h3>
              <p>Yuqori sifatli xizmat va mijozlar bilan uzoq muddatli hamkorlik o'rnatishga intilamiz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2 className="section-title">Bizlardan loyihalarimiz</h2>
        <div className="container">
          <div  className="portfolio-grid">
          {companydata.map((item) => {
             return(
                  <div key={item.id} className="portfolio-item">
                    <img src={item.image} />
                    <div className="portfolio-overlay">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <a href={item.link} >malumotni to'liq kurish</a>
                    </div>
                  </div>
             )
            })}
            </div>
            </div>
      </section>


      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">Bizning xizmatlar</h2>
          <div className="additional-services-grid">
            <div className="additional-service-item">
              <div className="service-icon-small">🌐</div>
              <h4>Veb saytlar</h4>
              <p>Zamonaviy va responsive veb-saytlar yaratamiz</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">📱</div>
              <h4>UX/UI Dizayn</h4>
              <p>Foydalanuvchi tajribasini yaxshilaydigan dizaynlar</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">💼</div>
              <h4>Mobil ilovalar</h4>
              <p>iOS va Android uchun mobil ilovalar ishlab chiqamiz</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">🎨</div>
              <h4>SMM</h4>
              <p>Ijtimoiy tarmoqlarda marketing va reklama</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">📊</div>
              <h4>Grafik dizayn</h4>
              <p>Professional grafik dizayn xizmatlari</p>
            </div>
            <div className="additional-service-item">
              <div className="service-icon-small">🔧</div>
              <h4>Texnik qo'llab-quvvatlash</h4>
              <p>24/7 texnik yordam va qo'llab-quvvatlash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <h2 className="section-title">Blog yangilikalarimiz</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Blog 1" />
              <div className="blog-content">
                <span className="blog-date">15 Dekabr 2024</span>
                <h4>Veb-sayt yaratishda eng muhim qoidalar</h4>
                <p>Zamonaviy veb-sayt yaratishda e'tibor berish kerak bo'lgan asosiy qoidalar haqida...</p>
              </div>
            </div>
            <div className="blog-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Blog 2" />
              <div className="blog-content">
                <span className="blog-date">12 Dekabr 2024</span>
                <h4>Mobil ilovalar kelajagi</h4>
                <p>2025 yilda mobil ilova ishlab chiqish sohasida kutilayotgan o'zgarishlar...</p>
              </div>
            </div>
            <div className="blog-card">
              <img src="/placeholder.svg?height=200&width=300" alt="Blog 3" />
              <div className="blog-content">
                <span className="blog-date">10 Dekabr 2024</span>
                <h4>UI/UX dizayn tendensiyalari</h4>
                <p>2024 yilning eng mashhur dizayn tendensiyalari va ularning ahamiyati...</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Bizning jamoa</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Jamoa a'zosi" />
              <h4>Sardorbek Boboyev</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Jamoa a'zosi" />
              <h4>Gulnoza Karimova</h4>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Jamoa a'zosi" />
              <h4>Otabek Rahimov</h4>
              <p>Backend Developer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=200&width=200" alt="Jamoa a'zosi" />
              <h4>Nilufar Tosheva</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>
                Sayt bo'yicha qo'shimcha ma'lumot olishingiz uchun quyidagi raqamga qo'ng'iroq qiling yoki telegramda
                yozing
              </h2>
              <div className="contact-info">
                <div className="contact-item">
                  <span>Telefon raqami:</span>
                  <p>+998 99 123 45 67</p>
                </div>
                <div className="contact-item">
                  <span>Qo'shimcha ma'lumot olish uchun telegramda yozing:</span>
                  <p>@username</p>
                </div>
              </div>
            </div>
            <div className="contact-awards">
              <h3>NIMA UCHUN BIZNI TANLAYSIZ?</h3>
              <div className="awards-grid">
                <div className="award-item">
                  <div className="award-icon gold"></div>
                  <span>Oltin medal</span>
                </div>
                <div className="award-item">
                  <div className="award-icon silver"></div>
                  <span>Kumush medal</span>
                </div>
                <div className="award-item">
                  <div className="award-icon bronze"></div>
                  <span>Bronza medal</span>
                </div>
                <div className="award-item">
                  <div className="award-icon red"></div>
                  <span>Maxsus mukofot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>LOGO</h3>
            </div>
            <div className="footer-info">
              <p>Bizning kompaniya professional veb-saytlar va mobil ilovalar yaratish bo'yicha xizmat ko'rsatadi.</p>
              <div className="footer-contact">
                <p>📞 +998 99 123 45 67</p>
                <p>📧 info@company.uz</p>
                <p>📍 Toshkent, O'zbekiston</p>
              </div>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                📷
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
