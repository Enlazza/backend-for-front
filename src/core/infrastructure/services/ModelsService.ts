import IModelRepository from '../repositories/interfaces/IModelRepository';

export default class ModelsService {
  private modelRepository: IModelRepository;

  constructor(modelRepository: IModelRepository) {
    this.modelRepository = modelRepository;
  }

  async getAllModels() {
    return this.modelRepository.getAll()
  }
}
