import { Component } from "@angular/core";
import { IZadatak } from "./interfaces/zadatak.interface";
import { ZadatakService } from "./services/zadatak.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  zadaci: IZadatak[];

  constructor(public _zadatakService: ZadatakService, ) {


    this.zadaci = _zadatakService.zadaci$;

  }
}
