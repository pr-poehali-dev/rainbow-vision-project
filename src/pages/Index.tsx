export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">PIZZA&ROLLS</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать доставку</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ГОРЯЧАЯ,
              <br />
              КАК <span>ЛЮБОВЬ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Настоящая итальянская пицца в духе американских 70-х. Тесто на закваске, авторские соусы и доставка до двери за 40 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать доставку
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ДОСТАВКА
              <br />
              40 МИНУТ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ПИЦЦА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПИЦЦА НА ЗАКВАСКЕ * ДОСТАВКА 40 МИНУТ * ГОРЯЧАЯ ВСЕГДА * АВТОРСКИЕ СОУСЫ * ГОТОВИМ С ДУШОЙ *
            ПИЦЦА НА ЗАКВАСКЕ * ДОСТАВКА 40 МИНУТ * ГОРЯЧАЯ ВСЕГДА * АВТОРСКИЕ СОУСЫ * ГОТОВИМ С ДУШОЙ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ СЕЗОНА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Маргарита"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Маргарита</h3>
                  <span className="price">690 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Томатный соус, моцарелла фиор ди латте, свежий базилик, тесто на закваске.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Пепперони"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пепперони</h3>
                  <span className="price">850 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Двойная пепперони, острый мёд, томатный соус, хрустящий бортик.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="4 сыра"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Четыре Сыра</h3>
                  <span className="price">950 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Моцарелла, горгонзола, пармезан и рикотта — идеальный квартет для ценителей.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВКУС, КОТОРЫЙ ПОМНИШЬ.</h2>
            <p className="vibe-text">
              Мы не просто печём пиццу. Мы делаем её с душой — на дровяной печи, с тестом на живой закваске и только свежими ингредиентами. Приходи к нам или закажи доставку — горячей будет в любом случае.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @PIZZA.RETRO
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пицца 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пицца 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пицца 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пицца 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">PIZZA&ROLLS</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Горячая пицца с доставкой до двери. Тесто на закваске, авторские соусы и ретро-вайб с 2024 года.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 11:00–23:00</li>
            <li>Сб–Вс: 11:00–00:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>Доставка до 22:30</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (999) 000-00-00</li>
            <li>pizza@retro.ru</li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <style>{`
        .grain-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        .floating-tag {
          position: absolute;
          background: var(--accent);
          color: var(--dark);
          padding: 6px 14px;
          border: var(--border);
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: rotate(-5deg);
        }
        .retro-vibe {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: var(--border);
          border-bottom: var(--border);
          min-height: 500px;
        }
        @media (max-width: 767px) {
          .retro-vibe { grid-template-columns: 1fr; }
        }
        .retro-vibe > div:first-child {
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          border-right: var(--border);
        }
        @media (min-width: 768px) {
          .retro-vibe > div:first-child { padding: 60px; }
        }
        .vibe-title {
          font-family: "Unbounded", sans-serif;
          font-size: 32px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
        }
        @media (min-width: 768px) {
          .vibe-title { font-size: 48px; }
        }
        .vibe-text {
          font-size: 16px;
          line-height: 1.7;
          color: #444;
        }
        .vibe-img {
          background: url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80") center center / cover;
          min-height: 300px;
        }
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .menu-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .menu-card {
          border: var(--border);
          box-shadow: var(--shadow);
          overflow: hidden;
          position: relative;
          background: white;
        }
        .menu-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          border-bottom: var(--border);
        }
        .menu-card-body {
          padding: 20px;
        }
        .menu-card-body h3 {
          font-family: "Unbounded", sans-serif;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }
        .menu-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--primary);
          color: white;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid var(--dark);
        }
        .price {
          font-family: "Unbounded", sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--primary);
        }
        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 768px) {
          .social-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }
        .social-item {
          aspect-ratio: 1;
          overflow: hidden;
          border: var(--border);
        }
        .social-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .social-item:hover img { transform: scale(1.05); }
        footer {
          border-top: var(--border);
          padding: 40px 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          background: white;
        }
        @media (min-width: 768px) {
          footer { grid-template-columns: 2fr 1fr 1fr 1fr; padding: 60px 50px; gap: 40px; }
        }
        .footer-logo {
          font-family: "Unbounded", sans-serif;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .footer-links h4 {
          font-family: "Unbounded", sans-serif;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 16px;
          color: var(--primary);
        }
        .footer-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}