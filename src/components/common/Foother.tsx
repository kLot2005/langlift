import '@/styles/footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src="/logo.svg" alt="LangLift logo" className="footer__logo" />
          <span className="footer__name">LangLift</span>
        </div>

        <nav className="footer__nav">
          <a href="#about" className="footer__link">О проекте</a>
          <a href="#pricing" className="footer__link">Тарифы</a>
          <a href="#contact" className="footer__link">Контакты</a>
        </nav>

        <div className="footer__contact">
          <p>info@langlift.kz</p>
          <p>@langlift</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} LangLift. Все права защищены.</p>
      </div>
    </footer>
  )
}
