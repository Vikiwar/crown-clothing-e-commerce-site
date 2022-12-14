import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";
import { getCategoriesAndDocuments } from "../../utlis/firebase/firebase.utlis";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
