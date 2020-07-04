import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: any;
  subscriptions: Subscription[] = [];
  isLogged: boolean;

  searchControl = new FormControl();
  productList = [];
  product = null;


  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _router: Router,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.getMe();
    this.onAuthStatChange();
    this.searchControl
      .valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(keyword => {
        console.log("keyword : ", keyword);
        this.getProductList(keyword);
      })
  }

  getMe() {
    const sub = this._userService.me()
      .subscribe(({ user, error }) => {
        if (error) {
          this.logout();
        }
        if (user) {
          console.log("user : ", user);
          this.user = user;
          this._authService.isLogged$.next(true);
        }
      });
    this.subscriptions.push(sub);
  }

  getProductList(keyword: string) {
    const sub = this._productService.getProductList(keyword)
      .subscribe(({ products, error }) => {
        console.log("products : ", products);
        this.productList = products;
      });
    this.subscriptions.push(sub);
  }

  logout() {
    const sub = this._authService.logout().subscribe(({ isLogged, error }) => {
      if (error) {
        console.log("error : ", error);
      }
      this._authService.isLogged$.next(isLogged);
    });
    this.subscriptions.push(sub);
  }

  onAuthStatChange() {
    const sub = this._authService.isLogged$.subscribe(authStat => {
      console.log("authStat : ", authStat);
      this.isLogged = authStat;
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  selectProduct(product: any){
    product.allergens_from_ingredients = product.allergens_from_ingredients.split(",");
    this.product = product;
    this.productList = [];
  }

  getImageUrl(product: any, layout?: string) {
    return this._productService.getImageUrl(product, layout)
  }
}
