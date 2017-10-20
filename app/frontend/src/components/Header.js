import React from "react";
import ru from "../locales/ru.json";
import en from "../locales/en.json";
import skrb from "skrb.png";
import "Header.css";

const locales = { ru, en };

export default function Header({ hideLogo, locale = "ru", reverse, children }) {
  const { Header } = locales[locale];

  return (
    <header className={`Header masthead ${reverse ? "Header--reverse" : ""}`}>
      <div className="line-bg">
        <div className="ornament-bg">
          <div className="container">
            <div
              className={`row py-3 align-items-center ${reverse
                ? "flex-row-reverse text-right"
                : ""}`}
            >
              <div className="col-lg-7">
                {!hideLogo && (
                  <img
                    className="site-logo"
                    src={skrb}
                    alt="Следственный комитет Республики Беларусь"
                    title="Следственный комитет Республики Беларусь"
                  />
                )}
                <div className="site-heading">
                  <h1>
                    {Header.title}
                    <br />
                    <span className="text-wide">{Header.titleSecond}</span>
                  </h1>
                  <span className="subheading text-center text-uppercase">
                    {Header.desc}
                    <br />
                    {Header.descSecond}
                  </span>
                </div>
              </div>

              <div
                className={`col-lg-4 mt-1 ${reverse ? "mr-auto" : "ml-auto"}`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
