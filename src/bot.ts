import {Client, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {MessageResponder} from "./services/message-responder";
import {HelloResponder} from "./services/hello-responder";
import {WokeResponder} from "./services/woke-responder";

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder;
  private HelloResponder: HelloResponder;
  private WokeResponder: WokeResponder;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.HelloResponder) HelloResponder: HelloResponder,
    @inject(TYPES.WokeResponder) WokeResponder: WokeResponder,
    @inject(TYPES.MessageResponder) messageResponder: MessageResponder) {
        this.client = client;
        this.token = token;
        this.HelloResponder = HelloResponder;
        this.messageResponder = messageResponder;
        this.WokeResponder = WokeResponder;
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
          if (message.author.bot) {
            console.log('Ignoring bot message!')
            return;
          }
    
          console.log("Message received! Contents: ", message.content);
    
          this.messageResponder.handle(message).then(() => {
            console.log("ah, doesn't waiting for my answer huh!");
          }).catch(() => {
            console.log("Mleh... to tired to answer this one.")
          }),

          this.HelloResponder.handle(message).then(() => {
            console.log("I said Hi !!! <3");
          }).catch(() => {
            console.log("Not For me, I'll let this one.")
          }),

          this.WokeResponder.handle(message).then(() => {
            console.log("Stay Woke !!!");
          }).catch(() => {
            console.log("Not For me, Not Wokish enough for my answer !! ")
          })
        });
    
        return this.client.login(this.token);
    }
}