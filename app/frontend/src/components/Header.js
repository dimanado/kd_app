import React from 'react';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
import geraldic from 'geraldic.png';
import 'Header.css';

const locales = { ru, en };

export default function Header({ hideLogo, locale = 'ru', reverse, children }) {
  const { Header } = locales[locale];

  return (
    <header className="masthead">
      <div className="line-bg">
        <div className="container">
          <div className={`row py-3 ${ reverse ? 'flex-row-reverse text-right' : '' }`}>
            { !hideLogo &&
              <div className="col-md-1 mt-1 mx-auto">
                <img className="site-logo" src={geraldic} alt="Следственный комитет Республики Беларусь" title="Следственный комитет Республики Беларусь" />
              </div>
            }

            <div className="col-md-6 mx-auto align-self-center">
              <div className="site-heading">
                <h1>
                  { Header.title }
                  <br />
                  <span className="text-wide">{ Header.titleSecond }</span>
                </h1>
                <span className="subheading text-center text-uppercase">
                  { Header.desc }
                  <br />
                  { Header.descSecond }
                </span>
              </div>
            </div>

            <div className="col-md-5 mt-1">
              { children }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
