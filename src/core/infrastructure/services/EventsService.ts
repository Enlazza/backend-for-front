import IEventRepository from '../repositories/interfaces/IEventRepository';

export default class EventsService {
  private eventRepository: IEventRepository;

  constructor(eventRepository: IEventRepository) {
    this.eventRepository = eventRepository;
  }

  async getEventsByUserIdAndDay(id: number, day: number) {
    /*
    Por ahora se devuelve lo mismo que entrega el core, eventualmente se
    debería cambiar para que lo retornado siga el formato del contrato entre el
    BFF y el front
    */
    return this.eventRepository.getByUserIdAndDay(id, day);
  }
}