import { Category } from "../model/Category";
import { IcategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements IcategoriesRepository {
  findByName(name: string): Category{
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
    
  }
}

export { PostgresCategoriesRepository }