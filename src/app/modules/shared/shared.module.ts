import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material/material.module';

const MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class SharedModule {}
