import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {HotelModel} from '../app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hotelId = 1;
  hotelDetails: HotelModel;
  errorMessage = null;
  loginModel: any = {
    userName: null,
    password: null
  };
  isRequesting = false;
  loginError = null;

  constructor(private router: Router, private appService: AppService) {
  }

  ngOnInit() {
    this.hotelDetails = this.appService.initializeHotelModel();
    this.isRequesting = true;
    this.getHotelDetails();
  }

  getHotelDetails() {
    this.appService.getHotelDetails(this.hotelId).subscribe(
      res => {
        if (res) {
          this.hotelDetails = this.appService.buildHotelModelWithValues(res);
          this.setMainMenuListColors();
          this.stopLoading();
        } else {
          this.stopLoading();
        }
      }, err => {
        this.stopLoading();
        this.showErrorMessage(err);
      });
  }

  stopLoading() {
    this.isRequesting = false;
  }

  showErrorMessage(err: any) {
    this.stopLoading();
    this.errorMessage = 'Unable to get data... Please try again...';
  }

  setMainMenuListColors() {
    if (this.hotelDetails.hotelSpeciality.length) {
      const hotelSpecialityWithColour: any[] = [];
      const mainMenuListColors: any[] = ['#f68401', '#dc306f', '#7127a8', '#34a297', '#259af3', '#7cb342'];
      let colourIndex = 0;
      this.hotelDetails.hotelSpeciality.forEach((value, index) => {
        if (this.hotelDetails.hotelSpeciality[index] && this.hotelDetails.hotelSpeciality[index].hotelSpecialityItemName) {
          hotelSpecialityWithColour.push({
            name: this.hotelDetails.hotelSpeciality[index].hotelSpecialityItemName,
            bgcolor: mainMenuListColors[colourIndex]
          });
          colourIndex = colourIndex + 1;
          if (colourIndex === 6) {
            colourIndex = 0;
          }
        }
      });
      console.log(hotelSpecialityWithColour);
      this.hotelDetails.hotelSpeciality = hotelSpecialityWithColour;
    }
  }

  login() {
    if (this.loginModel.userName && this.loginModel.password) {
      this.appService.login(this.loginModel.userName, this.loginModel.password).subscribe(
        res => {
          if (res) {
            this.router.navigate(['home']);
            this.stopLoading();
          } else {
            this.stopLoading();
          }
        }, err => {
          this.stopLoading();
          this.errorMessage = 'Unable to login... Please try again...';
        });
    } else {
      this.loginError = 'UserName & Password is required.';
    }
  }

}
