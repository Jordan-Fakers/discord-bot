import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {PingFinder} from "./services/finder-ping";
import {MessageResponder} from "./services/message-responder";
import {Client} from "discord.js";
import { HelloResponder } from "./services/hello-responder";
import { HelloMessage } from "./services/hello-message";
import { WokeMessage } from "./services/woke-message";
import { WokeResponder } from "./services/woke-responder";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<HelloResponder>(TYPES.HelloResponder).to(HelloResponder).inSingletonScope();
container.bind<HelloMessage>(TYPES.HelloMessage).to(HelloMessage).inSingletonScope();
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();
container.bind<WokeMessage>(TYPES.WokeMessage).to(WokeMessage).inSingletonScope();
container.bind<WokeResponder>(TYPES.WokeResponder).to(WokeResponder).inSingletonScope();
export default container;