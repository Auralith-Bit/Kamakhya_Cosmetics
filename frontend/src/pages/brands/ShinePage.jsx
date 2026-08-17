import React from "react";
import ShineHero from "../../components/brands/Shine/ShineHero";
import BrandPhilosophy from "../../components/brands/Shine/BrandPhilosophy";
import ProductCategories from "../../components/brands/Shine/ProductCategories";
import ProductSpotlight from "../../components/brands/Shine/ProductSpotLight";
import WhyChooseShine from "../../components/brands/Shine/WhyChooseShine";
import FormulaSpotlight from "../../components/brands/Shine/FormulaSpotLight";
import FaqCta from "../../components/brands/Shine/FaqCta";
import CtaBand from "../../components/brands/Shine/CtaBand";

const ShinePage = () => (
  <>
    <ShineHero />
    <BrandPhilosophy />
    <ProductCategories />
    <ProductSpotlight/>
    <WhyChooseShine/>
    <FormulaSpotlight/>
    <FaqCta/>
    <CtaBand/>

  </>
);

export default ShinePage;