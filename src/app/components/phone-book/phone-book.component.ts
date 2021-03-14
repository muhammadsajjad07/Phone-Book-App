import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss'],
})
export class PhoneBookComponent implements OnInit {
  constructor() {}
  UserName: any;
  phoneDetail: any;
  phoneList: any[] = [];
  name: any;
  phone: any;
  error: any;
  currentPhoneIndex: any;
  message: any;
  isEdit: any;

  AddPhone() {
    if (!this.name) {
      this.message = 'Name is required!';
      this.error = true;
    } else if (!this.phone) {
      this.message = 'Phone No is required!';
      this.error = true;
    } else if (this.phone && this.name) {
      this.phoneDetail = {
        name: this.name,
        phone: this.phone,
      };
      this.phoneList.push(this.phoneDetail);
      this.error = null;

      this.name = '';
      this.phone = '';
    }
  }

  editPhone(index: any, item: any) {
    this.phone = item.phone;
    this.name = item.name;
    this.currentPhoneIndex = index;
    this.isEdit = true;
  }

  updatePhone() {
    let data = this.currentPhoneIndex;
    this.phoneList[data].name = this.name;
    this.phoneList[data].phone = this.phone;
    this.name = '';
    this.phone = '';
    this.isEdit = null;
  }

  deletePhone(index: any) {
    this.phoneList.splice(index, 1);
  }
  ngOnInit(): void {
    this.UserName=history.state.user

  }
  
}
