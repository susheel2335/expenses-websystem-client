import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* Angular Material */
import {
	MatTableModule, MatIconModule, MatButtonModule,
	MatCardModule, MatInputModule, MatToolbarModule,
	MatFormFieldModule, MatGridListModule, MatSidenavModule,
	MatDialogModule, MatDatepickerModule, MatNativeDateModule,
	MatListModule, MatSnackBarModule, MatProgressBarModule,
	MatExpansionModule, MatMenuModule, MatPaginatorModule
} from '@angular/material';

/* Components / Modules */
import { AppComponent } from './app.component';
import { RoutesModule } from './app.routing.module';
import { AuthComponent } from './auth/auth.component';
import { DashComponent } from './dash/dash.component';
import { AccountComponent } from './dash/account/account.component';
import { AllExpensesComponent } from './dash/all-expenses/all-expenses.component';
import { HomePageComponent } from './dash/home-page/home-page.component';
import { FloatingBtnComponent } from './dash/floating-btn/floating-btn.component';
import { NavBarComponent } from './dash/nav-bar/nav-bar.component';
import { SettingsComponent } from './dash/settings/settings.component';
import { MenuComponent } from './dash/nav-bar/menu/menu.component';

const MaterialModules = [
    MatTableModule, MatIconModule, MatButtonModule,
	MatCardModule, MatInputModule, MatToolbarModule,
	MatFormFieldModule, MatGridListModule, MatSidenavModule,
	MatDialogModule, MatDatepickerModule, MatNativeDateModule,
	MatListModule, MatSnackBarModule, MatProgressBarModule,
	MatExpansionModule, MatMenuModule, MatPaginatorModule
]

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModules,
        HttpClientModule,
        RoutesModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        DashComponent,
        AccountComponent,
        AllExpensesComponent,
        HomePageComponent,
        FloatingBtnComponent,
        NavBarComponent,
        SettingsComponent,
        MenuComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }