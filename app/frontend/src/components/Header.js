import React from 'react';
import SocialIcons from 'SocialIcons';
import SearchForm from 'SearchForm';
import geraldic from 'geraldic.png';
import 'Header.css';

export default function Header() {
  return (
    <header className="masthead">
      <div className="line-bg">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-1 mt-1 mx-auto">
              <img className="site-logo" src={geraldic} alt="Следственный комитет Республики Беларусь" title="Следственный комитет Республики Беларусь" />
            </div>

            <div className="col-md-6 mx-auto align-self-center">
              <div className="site-heading">
                <h1>
                  Предварительное
                  <br />
                  <span className="text-wide">расследование</span>
                </h1>
                <span className="subheading text-center text-uppercase">
                  Научно-практический журнал
                  <br />
                  Cледственного Комитета Республики Беларусь
                </span>
              </div>
            </div>

            <div className="col-md-5 mt-1">
              <SocialIcons large className="d-flex justify-content-between" />

              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
