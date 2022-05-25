import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) { }
  
  execute({ name, description }: IRequest): void {
    const specificationAreadyExists = this.specificationRepository.findByName(name);

    if (specificationAreadyExists) {
      throw new Error("Category Already exists");
    }
    
    this.specificationRepository.create({
      name,
      description
     })
   }
}

export { CreateSpecificationService }