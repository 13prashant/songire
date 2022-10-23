export default function Home() {
  return (
    <div className="diwali">
      <div className="diwali__wrapper">
        <div className="diwali__left">
          <h1>
            Happy <br /> Diwali
          </h1>
          <hr className="desktop" />
          <div className="desktop">
            <h3>songire.com</h3>
            <p>Coming soon</p>
          </div>
        </div>
        <div className="diwali__right">
          <div className="diwali__diya">
            <img src="/images/diya.svg" alt="Happy Diwali" width="100%" />
          </div>
          <div className="mobile">
            <h3>songire.com</h3>
            <p>Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
