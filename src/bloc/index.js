import CounterRepository from "../repositories/counterRepository";
import HomeBloc from "./homeBloc";

const counterRepository = new CounterRepository();
const homeBloc = new HomeBloc(counterRepository);

export { homeBloc };
