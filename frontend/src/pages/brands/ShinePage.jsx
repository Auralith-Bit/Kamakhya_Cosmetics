import React from "react";
import ShineHero from "../../components/brands/Shine/ShineHero";
import BrandPhilosophy from "../../components/brands/Shine/BrandPhilosophy";
import ProductCategories from "../../components/brands/Shine/ProductCategories";
import ProductSpotlight from "../../components/brands/Shine/ProductSpotLight";
import WhyChooseShine from "../../components/brands/Shine/WhyChooseShine";
import FormulaSpotlight from "../../components/brands/Shine/FormulaSpotLight";
import FaqCta from "../../components/brands/Shine/FaqCta";

const ShinePage = () => (
  <>
    <ShineHero />
    <BrandPhilosophy />
    <ProductCategories />
    <ProductSpotlight/>
    <WhyChooseShine/>
    <FormulaSpotlight/>
    <FaqCta/>

  </>
);

export default ShinePage;