import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategorysUseCase";


class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  handle(req: Request, res: Response) {
    const { file } = req;
    
    this.importCategoryUseCase.execute(file);

    return res.send();
  }
}

export { ImportCategoryController }