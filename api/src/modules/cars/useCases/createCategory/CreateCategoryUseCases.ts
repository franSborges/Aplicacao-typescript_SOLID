import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {
  }

  execute({ name, description }: IRequest): void {
  const categoryAlreadyExists = this.categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    throw new Error("Category Already exists!");
  }

  this.categoriesRepository.create({ name, description });

  }
}


export { CreateCategoryUseCase }
