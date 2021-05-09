import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hotelNameHeading = 'Prayag Hotel';
  hotelNameSubHeading = 'Family and Garden Resturant';
  hotelBranchName = 'Udgir';
  hotelBranchCode = '1';
  userName = 'vishal';
  password = '101';
  error = null;
  mainMenuList: any[] = ['Veg', 'Non-Veg', 'Punjabi', 'Chinnes', 'Fast Food'];
  loginModel: any = {
    userName: null,
    password: null
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.mainMenuList = this.setMainMenuListColors();
  }

  setMainMenuListColors() {
    const map: any[] = [];
    const mainMenuListColors: any[] = ['#f68401', '#dc306f', '#7127a8', '#34a297', '#259af3', '#7cb342'];
    let colourIndex = 0;

    this.mainMenuList.forEach((value, index) => {
      map.push({name: this.mainMenuList[index], bgcolor: mainMenuListColors[colourIndex]});
      colourIndex = colourIndex + 1;
      if (colourIndex === 6) {
        colourIndex = 0;
      }
    });
    return map;
  }

  login() {
    if (this.loginModel.userName === this.userName && this.loginModel.password === this.password) {
      this.router.navigate(['home']);
    } else {
      this.error = 'Invalid Credentials !';
    }
  }

}
