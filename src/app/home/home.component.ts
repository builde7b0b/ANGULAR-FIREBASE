import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../api.service';


//decorator that specifies teh metadat for the component.
// properties: selector, templateurl, styleUrls
// defined custom HTMl element that represents the comp
// urls specify the location of the Componets HTML template and styles
@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.css']  
})  

//define class 'HomeComponent'
// uses OnInit interface implementation
export class HomeComponent implements OnInit {
	products: any[] = []; //init any array to hold products
	//using api service to fetch data from datbase

	//constructor method, DI for ApiService as a dependency
	constructor(private apiService: ApiService) { }
	//ngOnInit is called when component is initialized
	// it used get() from 'ApiService' to send a get request to backedn.
	ngOnInit() {
		this.apiService.get().subscribe((data: any)=>{  
			// console.log(data);  
			// this.products = data as any[];  
			this.products = data.products;
			// store response in products array
			// data is displayed in template
      console.log(this.products);
		})  
	}
}
