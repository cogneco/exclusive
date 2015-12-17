/// <reference path="../typings/node/node.d.ts" />

module Exclusive{
	export class Backend_User{
		private company: string;
		get Company(){return this.company;}
		set Company(value: string){this.company = value;}
		
		private contact: string;
		get Contact(){return this.contact;}
		set Contact(value: string){this.contact = value;}
		
		private crm: string;
		get Crm(){return this.crm;}
		set Crm(value: string){this.crm = value;}
		
		constructor(company: string, contact: string, crm: string){
			this.company = company;
			this.contact = contact;
			this.crm = crm;
		}
	}
}