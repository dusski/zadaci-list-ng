import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';

// material modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";

const ngModules = [
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule,
  MatInputModule
];

@NgModule({
  imports: [
    // CommonModule
    ngModules
  ],
  exports: [ngModules],
  declarations: []
})
export class NgMaterialModule {}
