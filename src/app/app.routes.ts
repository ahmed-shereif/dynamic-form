import { Component, signal } from '@angular/core';
import { Routes } from '@angular/router';
import { SignalComponent } from './signal/signal.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

export const routes: Routes = [
    {path:"signal",component:SignalComponent},
    {path:"d",component:DynamicFormsComponent},
];
