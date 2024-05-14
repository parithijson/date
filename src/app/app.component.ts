import { Component } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
        ::ng-deep .MuiTable-root {
            width: 80%;
            margin: 0 auto;
        }
    `]

})
export class AppComponent {
  dataSource = ELEMENT_DATA
  FilteredData:any;
  displayedColumns: string[] = [
    "BorrowerName",
    "EffectiveDate",
    "ContractId",
    "Currency",
    "GlobalLoanAmount",
    "YourShare",
    "AllInRate",
    "SpreadOrFloor",
    "BaseRate",
    "StartDate",
    "EndDate",
    "RemittanceAmount",
    "IntermediaryBank",
    "IntermediarySWIFT",
    "IntermAcctNumber",
    "BenificiarySWIFT",
    "IBAN",
    "ABAOrRoutingNo",
    "BeneficiaryBank",
    "BeneficiaryAccountName",
    "BeneficiaryAccountNumber",
    "ReferenceOrRef",
    "AuditConfirmationsContact",
    "ContactInformation"
  ];
  ngOnInit(){
    this.FilteredData = ELEMENT_DATA
  }
  applyFilter(startDate:any, endDate:any) {
    if(startDate.value && endDate.value){
    let astartDate = new Date(startDate.value);
    let aendDate = new Date(endDate.value);
    console.log(astartDate,aendDate);
    this.FilteredData = this.dataSource.filter(obj => {
      const effectiveDate = new Date(obj.EffectiveDate);
      console.log(effectiveDate)
      return effectiveDate >= astartDate && effectiveDate <= aendDate;
    });
  }
    console.log(this.dataSource);

  }

  search(searchInput:any) {
    if (searchInput.value) {
      if (this.FilteredData.length > 0) {
        this.FilteredData = this.FilteredData.filter((item:any) =>
          Object.values(item).some((value:any) =>
            value.toString().toLowerCase().includes(searchInput.value.toLowerCase())
          )
        );
      } else {
        this.FilteredData = this.dataSource.filter(item =>
          Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchInput.value.toLowerCase())
          )
        );
      }
    } else {
      if (this.FilteredData.length > 0) {
        this.FilteredData = this.FilteredData;
      } else {
        this.FilteredData = this.dataSource;
      }
    }
  }
  // search(searchInput:any){
  //   if(searchInput.value){
  //     this.FilteredData = this.FilteredData.filter((item:any) => {
  //     return Object.values(item).some((value:any) =>
  //       value.toString().toLowerCase().includes(searchInput.value.toLowerCase())
  //     );
  //   });
  // }


  // }
}

export interface PeriodicElement {
  BorrowerName: string;
  EffectiveDate: string;
  ContractId: string;
  Currency: string;
  GlobalLoanAmount: string;
  YourShare: string;
  AllInRate: string;
  SpreadOrFloor: string;
  BaseRate: string;
  StartDate: string;
  EndDate: string;
  RemittanceAmount: string;
  IntermediaryBank: string;
  IntermediarySWIFT: string;
  IntermAcctNumber: string;
  BenificiarySWIFT: string;
  IBAN: string;
  ABAOrRoutingNo: string;
  BeneficiaryBank: string;
  BeneficiaryAccountName: string;
  BeneficiaryAccountNumber: string;
  ReferenceOrRef: string;
  AuditConfirmationsContact: string;
  ContactInformation: string;
}

var ELEMENT_DATA: PeriodicElement[] = [
  {
    BorrowerName: 'VetEvolve Holdings, LLC',
    EffectiveDate: '07/05/2024',
    ContractId: '1234567',
    Currency: 'USD', // Added currency type
    GlobalLoanAmount: '1000000000',
    YourShare: '3838.86',
    AllInRate: '11.7789%',
    SpreadOrFloor: '5.70000%',
    BaseRate: '5.2342%',
    StartDate: '07/05/2024',
    EndDate: '31/05/2024',
    RemittanceAmount: '383838.38',
    IntermediaryBank: 'The Bank of New York Mellon',
    IntermediarySWIFT: 'IRVTUS3N',
    IntermAcctNumber: '803309345',
    BenificiarySWIFT: 'IRVTGB2X',
    IBAN: 'GB63IRVT70022515787400',
    ABAOrRoutingNo: '041-001-039',
    BeneficiaryBank: 'Key Bank NA',
    BeneficiaryAccountName: 'ARES MANAGEMENT LTD CLIENT ACCOUNTS',
    BeneficiaryAccountNumber: '1578748400',
    ReferenceOrRef: 'C00225679',
    AuditConfirmationsContact: 'agencyauditconfirm@alterdomus.com',
    ContactInformation: 'aresagencyUK@alterdomus.com'
  },
  {
    BorrowerName: 'Parithi',
    EffectiveDate: '07/06/2024',
    ContractId: '1234567',
    Currency: 'USD', // Added currency type
    GlobalLoanAmount: '1000000000',
    YourShare: '3838.86',
    AllInRate: '11.7789%',
    SpreadOrFloor: '5.70000%',
    BaseRate: '5.2342%',
    StartDate: '07/05/2024',
    EndDate: '31/05/2024',
    RemittanceAmount: '383838.38',
    IntermediaryBank: 'The Bank of New York Mellon',
    IntermediarySWIFT: 'IRVTUS3N',
    IntermAcctNumber: '803309345',
    BenificiarySWIFT: 'HRBCK',
    IBAN: 'GB63IRVT70022515787400',
    ABAOrRoutingNo: '041-001-039',
    BeneficiaryBank: 'Key Bank NA',
    BeneficiaryAccountName: 'ARES MANAGEMENT LTD CLIENT ACCOUNTS',
    BeneficiaryAccountNumber: '1578748400',
    ReferenceOrRef: 'C00225679',
    AuditConfirmationsContact: 'agencyauditconfirm@alterdomus.com',
    ContactInformation: 'aresagencyUK@alterdomus.com'
  }
];
