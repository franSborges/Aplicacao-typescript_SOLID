import { Router } from "express";
import multer from "multer";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => listCategoriesController.handle(req, res));

categoriesRoutes.post("/import", upload.single("file"), (req, res) => importCategoryController.handle(req, res));

export { categoriesRoutes };


