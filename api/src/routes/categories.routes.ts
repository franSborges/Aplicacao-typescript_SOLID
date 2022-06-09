import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";


const categoriesRoutes = Router();
const CategoriesRepositorys = new CategoriesRepository();

categoriesRoutes.post("/",  (req, res) => {
  return createCategoryController.handle(req, res);
});


categoriesRoutes.get("/", (req, res) => {
  const all = CategoriesRepositorys.list();
  return res.json(all);
});


export { categoriesRoutes };


