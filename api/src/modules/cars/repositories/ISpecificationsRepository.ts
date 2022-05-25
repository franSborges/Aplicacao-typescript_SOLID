import { Specifications } from "../model/Specifications";

interface ICreateSpecificationDTO {
  name: string;
  description: string
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specifications
}

export { ISpecificationsRepository, ICreateSpecificationDTO };