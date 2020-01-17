import { Component, OnInit } from '@angular/core';
import { Observable, Subject, empty } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Expense } from '../../interfaces/Expense';
import { DataController } from '../../interfaces/DataController';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    expenses$: Observable<Expense[]>;
	dataCtrl$: Observable<DataController>;
	error$ = new Subject<boolean>();

	numberOfExpenses: number;
	panelOpenState: boolean = false;
	isDanger: boolean = false;
	calc: number;

  	constructor(private dashService: DashService) { }

	ngOnInit() {
		this.onRefresh();
	}

	onRefresh() {
		this.expenses$ = this.dashService.getLastTenExpenses().pipe(
			tap(resp => {
				this.numberOfExpenses = resp.length;
			}),
			catchError(err => {
				this.error$.next(err);
				return empty();
			})
		);
		this.dataCtrl$ = this.dashService.getUserController().pipe(
			tap(resp => {
				this.calc = resp.userSalary - resp.sumOfValues;
				if (this.calc >= 0) {
					this.isDanger = false;
				} else {
					this.isDanger = true;
				}
			}),
			catchError(err => {
				this.error$.next(err);
				return empty();
			})
		);
	}

}