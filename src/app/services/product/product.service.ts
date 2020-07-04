import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }

  public getProductList(keyword: string) {
    const url = `${this.apiUrl}/product?keyword=${keyword}`;
    return this._httpClient.get<{ products: any, error: any }>(url);
  }

  public getImageUrl(product: any, layout?: string) {
    let image_url;
    let image_thumb_url;
    let image_origin;

    console.log("product : ", product);

    if (!product.images) {
      image_url = null;
      image_thumb_url = null;
    } else {
      let images_front, rev;

      if (product.images.front && product.images.front.rev) {
        images_front = product.images.front;
        rev = images_front.rev;
        image_origin = '/front.';
      }

      if (product.images.front_fr && product.images.front_fr.rev) {
        images_front = product.images.front_fr;
        rev = images_front.rev;
        image_origin = '/front_fr.';
      }

      if (images_front && rev) {
        if (product.code.length >= 9) {
          image_url = 'https://static.openfoodfacts.org/images/products'
            + '/'
            + product.code.substring(0, 3)
            + '/'
            + product.code.substring(3, 6)
            + '/'
            + product.code.substring(6, 9);
          image_url += '/'
            + product.code.substring(9, product.code.length)
        }
        else {
          image_url = 'https://static.openfoodfacts.org/images/products'
            + '/'
            + product.code
        }
        image_url += image_origin
          + rev
          + '.200.jpg';
        if (product.code.length >= 9) {
          image_thumb_url = 'https://static.openfoodfacts.org/images/products'
            + '/'
            + product.code.substring(0, 3)
            + '/'
            + product.code.substring(3, 6)
            + '/'
            + product.code.substring(6, 9);
          image_thumb_url += '/'
            + product.code.substring(9, product.code.length);
        }
        else {
          image_thumb_url = 'https://static.openfoodfacts.org/images/products'
            + '/'
            + product.code
        }
        image_thumb_url += image_origin
          + rev
          + '.100.jpg';
      } else {
        image_url = null;
        image_thumb_url = null;
      }
    }

    console.log("image_url : ", image_thumb_url);

    switch (layout) {
      case "standard":
        return image_url;
      case "thumb":
        return image_thumb_url;
      default:
        return image_url;
    }
  }
}
