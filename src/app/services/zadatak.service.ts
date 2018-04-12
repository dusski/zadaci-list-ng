import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IZadatak } from "../interfaces/zadatak.interface";

@Injectable()
export class ZadatakService {
  constructor() {}

  public zadaci$: IZadatak[] = [
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false },
    { title: "Zadatak 1", description: "Opis zadatka 1", completed: false }
  ];

  getZadatak(): Observable<IZadatak[]> {
    return new Observable(observer => {
      observer.next(this.zadaci$);
      observer.complete();
    });
  }
}
