import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero container">
      <div className="hero_content">
        <div className="hero__title">
          <h1 className="hero__heading" data-text={t("HeroHeading")}>
            {t("HeroHeading")}
          </h1>
        </div>
        <span className="hero__scroll-down">
          <h1>SCROLL DOWN &raquo;</h1>
        </span>
      </div>
    </section>
  );
};

export default Hero;
