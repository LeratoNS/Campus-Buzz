import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {
  private successMessage = '';

  setSuccess(message: string): void {
    this.successMessage = message;
  }

  consumeSuccess(): string {
    const message = this.successMessage;
    this.successMessage = '';
    return message;
  }
}
