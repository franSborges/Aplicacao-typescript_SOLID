import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryService";

const categoriesRoutes = Router();
const CategoriesRepositorys = new CategoriesRepository();

categoriesRoutes.post("/",  (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(CategoriesRepositorys);
  
  createCategoryService.execute({ name, description });
  return res.status(201).send();
});


categoriesRoutes.get("/", (req, res) => {
  const all = CategoriesRepositorys.list();
  return res.json(all);
});


export { categoriesRoutes };


