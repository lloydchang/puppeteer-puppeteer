import {Dialog} from '../api/Dialog.js';

import type {UserPrompt} from './core/UserPrompt.js';

export class BidiDialog extends Dialog {
  static create(prompt: UserPrompt): BidiDialog {
    return new BidiDialog(prompt);
  }

  #prompt: UserPrompt;
  constructor(prompt: UserPrompt) {
    super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
    this.#prompt = prompt;
  }

  protected override async handle(options: {
    accept: boolean;
    text?: string | undefined;
  }): Promise<void> {
    await this.#prompt.handle({
      accept: options.accept,
      userText: options.text,
    });
  }
}
