import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';

// material modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  imports: [
    // CommonModule
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [MatToolbarModule, MatChipsModule, MatIconModule, MatListModule, MatCheckboxModule],
  declarations: []
})
export class NgMaterialModule {}
