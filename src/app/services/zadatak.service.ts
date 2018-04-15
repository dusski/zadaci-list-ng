import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IZadatak } from "../interfaces/zadatak.interface";

@Injectable()
export class ZadatakService {
  constructor() {}

  public zadaci: IZadatak[] = [
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 2", description: "Opis zadatka 2", completed: false },
    { title: "Zadatak 3", description: "Opis zadatka 3", completed: false },
    { title: "Zadatak 4", description: "Opis zadatka 4", completed: false },
    { title: "Zadatak 5", description: "Opis zadatka 5", completed: false },
    { title: "Zadatak 6", description: "Opis zadatka 6", completed: false },
    { title: "Zadatak 7", description: "Opis zadatka 7", completed: false },
    { title: "Zadatak 8", description: "Opis zadatka 8", completed: false }
  ];

  getZadaci() {
    return this.zadaci;
  }

  addZadatak(zadatak: IZadatak) {
    this.zadaci.push(zadatak);
  }

  toggleCompleted(index: number) {
    this.zadaci[index].completed = !this.zadaci[index].completed;
  }

}
