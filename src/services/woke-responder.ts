import {Message} from "discord.js";
import {WokeMessage} from "./woke-message";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";

const Wokes = [ "If practice makes perfect and nobody's perfect, why pratices ?",
 "Since you already born, you're birthday isn't actually you're second ?", 
 "If i punched myself and i'm hurt, am i strong or weak ?",
 "If two mindreader read each other's mind, who's mind they are reading ?",
 "When butterflies are in love, do they have human in the stomach ?",
 "Do you ever wonder how your dog call you ?",
 "If a ginger work at a bakery, does this make him a gingerbread man ?",
 "If you're fingers have fingertips but you're toe don't have toetips, why you can tiptoe but can't fingertip ?",
 "Who put the alphabet in alphabetical order ?",
 "When the first watch was created, how did they know what it was ?",
 "If i work as a security guard at a samsung store, does that make me the guardian of the galaxy",
 "If two vegans are arguing, can it still considered as a beef ?",
 "Do You think sand is call sand because it's between sea and land ?",
 "If money is the root of all the evil, why are they asking money at church ?",
 "When you buy a bigger bed for you're bedroom, do you have more bed room or less bedroom ?",
 "If we can't see air, do you think fishs can see water ?",
 "When pornstars takes off their clothes, are they dressing up for work ?",
 "If nothing is impossible, is it possible to do something impossible ?",
 "Why we call bacon, bacon and cookie, cookie if we cook bacon and bake cookie ?",
 "If you were born deaf, in which language are you thinking ?"
];

function wokeFact() {
  let woke = Wokes[Math.floor(Math.random() * Wokes.length)];
  return woke
}

@injectable()
export class WokeResponder {
    private WokeMessage: WokeMessage;

    constructor(
        @inject(TYPES.WokeMessage) WokeMessage: WokeMessage
    ) {
        this.WokeMessage = WokeMessage;
    }
    
    handle(message: Message): Promise<Message | Message[]> {
        if (this.WokeMessage.isWoke(message.content)) {
          let woke : any = wokeFact();
          return message.reply('*Hit the blunt* ' + "\n\n" + woke)
        }
    
        return Promise.reject();
      }
}