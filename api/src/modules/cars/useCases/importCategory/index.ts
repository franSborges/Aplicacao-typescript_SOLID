import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategorysUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export { importCategoryController };