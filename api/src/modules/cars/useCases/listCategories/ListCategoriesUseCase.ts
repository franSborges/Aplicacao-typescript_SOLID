import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository                                                                                                                                                                         ategoriesRepository) {}

  execute(): Category[]{
    const categories = this.categoriesRepository.list();
    return categories
  }

}


export {ListCategoriesUseCase}