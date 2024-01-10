import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {
    console.log("Constructor - SharedService - Called")
  }

  mySharedFunction() {
    console.log('Shared function called');
  }
}
