import { IcategoriesRepository, ICreateCategoryDTO } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: IcategoriesRepository) {
  }

  execute({ name, description }: IRequest): void {
  const categoryAlreadyExists = this.categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    throw new Error("Category Already exists!");
  }

  this.categoriesRepository.create({ name, description });

  }
}


export { CreateCategoryService }