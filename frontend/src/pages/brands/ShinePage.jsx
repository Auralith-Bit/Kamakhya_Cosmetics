import React from "react";
import ShineHero from "../../components/brands/Shine/ShineHero";
import BrandPhilosophy from "../../components/brands/Shine/BrandPhilosophy";
import ProductCategories from "../../components/brands/Shine/ProductCategories";
import ProductSpotlight from "../../components/brands/Shine/ProductSpotLight";
import WhyChooseShine from "../../components/brands/Shine/WhyChooseShine";
import FormulaSpotlight from "../../components/brands/Shine/FormulaSpotLight";

const ShinePage = () => (
  <>
    <ShineHero />
    <BrandPhilosophy />
    <ProductCategories />
    <ProductSpotlight/>
    <WhyChooseShine/>
    <FormulaSpotlight/>

  </>
);

export default ShinePage;