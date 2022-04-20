import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

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


