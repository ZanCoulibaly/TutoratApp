import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEcolePageRoutingModule } from './list-ecole-routing.module';

import { ListEcolePage } from './list-ecole.page';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEcolePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListEcolePage]
})
export class ListEcolePageModule {}
