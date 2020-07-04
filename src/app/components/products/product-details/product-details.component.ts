import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() products: any;
  product: any = {
    "image_ingredients_small_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/ingredients_fr.47.200.jpg",
    "data_sources_tags": [
      "database-foodrepo-openfood-ch",
      "databases",
      "app-yuka",
      "apps"
    ],
    "image_front_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.400.jpg",
    "countries_beforescanbot": "France, Switzerland",
    "minerals_prev_tags": [],
    "ingredients_from_palm_oil_n": 1,
    "other_nutritional_substances_tags": [],
    "informers_tags": [
      "openfoodfacts-contributors",
      "sebleouf",
      "cestki13",
      "kiliweb",
      "yuka.YTZRc0RZTmNqTlVJZ01jNTVoSE00dkJ3eWEvMEFEbnROc1FOSWc9PQ",
      "foodrepo",
      "inf"
    ],
    "sources": [
      {
        "url": "https://www.foodrepo.org/ch/products/21801",
        "images": [],
        "import_t": 1548768585,
        "manufacturer": "0",
        "source_licence_url": "https://creativecommons.org/licenses/by/4.0/",
        "name": "FoodRepo",
        "id": "openfood-ch",
        "fields": [
          "brands",
          "countries"
        ],
        "source_licence": "Creative Commons Attribution 4.0 International License"
      }
    ],
    "data_quality_errors_tags": [],
    "rev": 79,
    "labels_tags": [
      "en:green-dot",
      "fr:triman"
    ],
    "nutrient_levels_tags": [
      "en:fat-in-high-quantity",
      "en:saturated-fat-in-high-quantity",
      "en:sugars-in-high-quantity",
      "en:salt-in-low-quantity"
    ],
    "ingredients": [
      {
        "text": "Sucre",
        "percent_min": 5,
        "rank": 1,
        "id": "en:sugar",
        "percent_max": 100,
        "vegetarian": "yes",
        "vegan": "yes"
      },
      {
        "rank": 2,
        "percent_min": 0,
        "text": "_cacahuètes_",
        "id": "en:peanut",
        "percent_max": 50
      },
      {
        "rank": 3,
        "percent_min": 0,
        "text": "pâte de cacao",
        "id": "en:cocoa-paste",
        "percent_max": 33.3333333333333,
        "vegan": "yes",
        "vegetarian": "yes"
      },
      {
        "id": "en:skimmed-milk-powder",
        "percent_max": 25,
        "rank": 4,
        "percent_min": 0,
        "text": "_lait_ écrémé en poudre",
        "vegan": "no",
        "vegetarian": "yes"
      },
      {
        "percent_max": 20,
        "id": "en:lactose-and-milk-proteins",
        "rank": 5,
        "percent_min": 0,
        "text": "_lactose_ et protéines de _lait_",
        "vegan": "no",
        "vegetarian": "yes"
      },
      {
        "vegetarian": "yes",
        "vegan": "yes",
        "id": "en:cocoa-butter",
        "percent_max": 16.6666666666667,
        "text": "beurre de cacao",
        "percent_min": 0,
        "rank": 6
      },
      {
        "vegetarian": "yes",
        "id": "en:palm-fat",
        "percent_min": 0,
        "vegan": "yes",
        "percent_max": 14.2857142857143,
        "from_palm_oil": "yes",
        "text": "matière grasse de palme",
        "rank": 7
      },
      {
        "percent_max": 12.5,
        "from_palm_oil": "no",
        "text": "matière grasse du _lait_",
        "rank": 8,
        "vegan": "no",
        "id": "en:milkfat",
        "percent_min": 0,
        "vegetarian": "yes"
      },
      {
        "rank": 9,
        "text": "amidon",
        "percent_min": 0,
        "id": "en:starch",
        "percent_max": 11.1111111111111,
        "vegan": "yes",
        "vegetarian": "yes"
      },
      {
        "text": "sirop de glucose",
        "percent_min": 0,
        "rank": 10,
        "id": "en:glucose-syrup",
        "percent_max": 10,
        "vegetarian": "yes",
        "vegan": "yes"
      },
      {
        "vegan": "yes",
        "from_palm_oil": "no",
        "percent_max": 9.09090909090909,
        "rank": 11,
        "text": "matière grasse de karité",
        "vegetarian": "yes",
        "id": "en:shea-butter",
        "percent_min": 0
      },
      {
        "rank": 12,
        "percent_min": 0,
        "text": "émulsifiant",
        "id": "en:emulsifier",
        "percent_max": 8.33333333333333,
        "has_sub_ingredients": "yes"
      },
      {
        "id": "en:lactose",
        "percent_max": 7.69230769230769,
        "rank": 13,
        "percent_min": 0,
        "text": "_lactose_",
        "vegan": "no",
        "vegetarian": "yes"
      },
      {
        "percent_min": 0,
        "text": "stabilisant",
        "rank": 14,
        "id": "en:stabiliser",
        "percent_max": 7.14285714285714,
        "has_sub_ingredients": "yes"
      },
      {
        "has_sub_ingredients": "yes",
        "percent_max": 6.66666666666667,
        "id": "en:colour",
        "rank": 15,
        "percent_min": 0,
        "text": "colorants"
      },
      {
        "text": "dextrine",
        "percent_min": 0,
        "rank": 16,
        "id": "en:e1400",
        "percent_max": 6.25,
        "vegetarian": "yes",
        "vegan": "yes"
      },
      {
        "percent_min": 0,
        "text": "agent d'enrobage",
        "rank": 17,
        "percent_max": 5.88235294117647,
        "id": "en:glazing-agent",
        "has_sub_ingredients": "yes"
      },
      {
        "vegetarian": "yes",
        "id": "en:palm-oil",
        "percent_min": 0,
        "vegan": "yes",
        "percent_max": 5.55555555555556,
        "from_palm_oil": "yes",
        "rank": 18,
        "text": "huile de palme"
      },
      {
        "rank": 19,
        "percent_min": 0,
        "text": "sel",
        "id": "en:salt",
        "percent_max": 5.26315789473684,
        "vegan": "yes",
        "vegetarian": "yes"
      },
      {
        "vegan": "maybe",
        "vegetarian": "maybe",
        "id": "en:flavouring",
        "percent_max": 5,
        "rank": 20,
        "percent_min": 0,
        "text": "arômes"
      },
      {
        "text": "lécithine de _soja_",
        "percent_min": 0,
        "id": "en:soya-lecithin",
        "percent_max": 8.33333333333333,
        "vegetarian": "yes",
        "vegan": "yes"
      },
      {
        "id": "en:e414",
        "percent_max": 7.14285714285714,
        "text": "gomme arabique",
        "percent_min": 0,
        "vegetarian": "yes",
        "vegan": "yes"
      },
      {
        "vegan": "yes",
        "vegetarian": "yes",
        "percent_min": 0,
        "text": "e100",
        "percent_max": 6.66666666666667,
        "id": "en:e100"
      },
      {
        "text": "e120",
        "percent_min": 0,
        "id": "en:e120",
        "percent_max": 3.33333333333333,
        "vegan": "no",
        "vegetarian": "no"
      },
      {
        "id": "en:e133",
        "percent_max": 2.22222222222222,
        "percent_min": 0,
        "text": "e133",
        "vegan": "yes",
        "vegetarian": "yes"
      },
      {
        "from_palm_oil": "maybe",
        "percent_max": 1.66666666666667,
        "id": "en:e160a",
        "percent_min": 0,
        "text": "e160a",
        "vegetarian": "maybe",
        "vegan": "maybe"
      },
      {
        "vegan": "yes",
        "vegetarian": "yes",
        "percent_max": 1.33333333333333,
        "id": "en:e160e",
        "text": "e160e",
        "percent_min": 0
      },
      {
        "text": "e171",
        "percent_min": 0,
        "percent_max": 1.11111111111111,
        "id": "en:e171",
        "vegetarian": "yes",
        "vegan": "yes"
      },
      {
        "percent_max": 5.88235294117647,
        "id": "en:e903",
        "text": "cire de carnauba",
        "percent_min": 0,
        "vegetarian": "yes",
        "vegan": "yes"
      }
    ],
    "last_editor": "date-limite-app",
    "unique_scans_n": 446,
    "additives_old_n": 11,
    "amino_acids_prev_tags": [],
    "emb_codes_tags": [],
    "nutrition_grades_tags": [
      "e"
    ],
    "brands": "Mars,Mars Chocolat, M&m's",
    "lc": "fr",
    "labels_hierarchy": [
      "en:green-dot",
      "fr:triman"
    ],
    "allergens_from_ingredients": "cacahuètes, lait, lactose, lait, lait, soja, lactose",
    "entry_dates_tags": [
      "2016-04-26",
      "2016-04",
      "2016"
    ],
    "allergens_hierarchy": [
      "en:milk",
      "en:peanuts",
      "en:soybeans"
    ],
    "allergens_from_user": "(fr) en:milk,en:peanuts,en:soybeans",
    "category_properties": {
      "ciqual_food_name:en": "Sugar and chocolate coated peanut",
      "ciqual_food_name:fr": "Cacahuètes enrobées de chocolat dragéifiées"
    },
    "vitamins_prev_tags": [],
    "codes_tags": [
      "code-13",
      "5000159492xxx",
      "500015949xxxx",
      "50001594xxxxx",
      "5000159xxxxxx",
      "500015xxxxxxx",
      "50001xxxxxxxx",
      "5000xxxxxxxxx",
      "500xxxxxxxxxx",
      "50xxxxxxxxxxx",
      "5xxxxxxxxxxxx"
    ],
    "data_quality_info_tags": [
      "en:ingredients-percent-analysis-ok"
    ],
    "id": "5000159492737",
    "nutrition_data_prepared_per": "100g",
    "image_nutrition_thumb_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/nutrition_fr.19.100.jpg",
    "ingredients_text_en": "sugar, peanuts , cocoa paste, skimmed milk powder, lactose and milk proteins , cocoa butter, butterfat, palm, milk fat , starch, glucose syrup, butterfat, shea, emulsifier (soya lecithin ), lactose , stabilizer (gum arabic), colours (e100, e120, e133, e160a, e160e, e171), dextrin, glazing agent (carnauba wax), palm oil, salt, flavourings,",
    "serving_size_debug_tags": [],
    "ingredients_tags": [
      "en:sugar",
      "en:peanut",
      "en:cocoa-paste",
      "en:cocoa",
      "en:skimmed-milk-powder",
      "en:dairy",
      "en:milk-powder",
      "en:lactose-and-milk-proteins",
      "en:protein",
      "en:animal-protein",
      "en:milk-proteins",
      "en:lactose",
      "en:cocoa-butter",
      "en:palm-fat",
      "en:oil-and-fat",
      "en:vegetable-oil-and-fat",
      "en:palm-oil-and-fat",
      "en:milkfat",
      "en:fat",
      "en:starch",
      "en:glucose-syrup",
      "en:glucose",
      "en:shea-butter",
      "en:vegetable-fat",
      "en:emulsifier",
      "en:stabiliser",
      "en:colour",
      "en:e1400",
      "en:glazing-agent",
      "en:palm-oil",
      "en:salt",
      "en:flavouring",
      "en:soya-lecithin",
      "en:e322",
      "en:e414",
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e903"
    ],
    "minerals_tags": [],
    "ingredients_that_may_be_from_palm_oil_n": 1,
    "additives_prev_original_tags": [
      "en:e322",
      "en:e414",
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e1400",
      "en:e903"
    ],
    "quantity_debug_tags": [],
    "fruits-vegetables-nuts_100g_estimate": 0,
    "states": "en:to-be-checked, en:complete, en:nutrition-facts-completed, en:ingredients-completed, en:expiration-date-completed, en:packaging-code-to-be-completed, en:characteristics-completed, en:categories-completed, en:brands-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-validated, en:photos-uploaded",
    "ingredients_text_fr": "Sucre, _cacahuètes_, pâte de cacao, _lait_ écrémé en poudre, _lactose_ et protéines de _lait_, beurre de cacao, matière grasse de palme, matière grasse du _lait_ , amidon, sirop de glucose, matière grasse de karité, émulsifiant (lécithine de _soja_), _lactose_, stabilisant (gomme arabique),  colorants (E100, E120, E133, E160a, E160e, E171), dextrine, agent d'enrobage (cire de carnauba), huile de palme, sel, arômes,",
    "packaging": "Sachet plastique,plastique,doypack,sachet",
    "last_image_dates_tags": [
      "2020-04-16",
      "2020-04",
      "2020"
    ],
    "countries_hierarchy": [
      "en:france",
      "en:italy",
      "en:switzerland"
    ],
    "traces_from_ingredients": "",
    "languages_tags": [
      "en:french",
      "en:english",
      "en:2",
      "en:multilingual"
    ],
    "allergens_tags": [
      "en:milk",
      "en:peanuts",
      "en:soybeans"
    ],
    "countries_tags": [
      "en:france",
      "en:italy",
      "en:switzerland"
    ],
    "traces": "en:nuts",
    "completeness": 0.9,
    "nutrient_levels": {
      "saturated-fat": "high",
      "sugars": "high",
      "fat": "high",
      "salt": "low"
    },
    "categories_tags": [
      "en:snacks",
      "en:sweet-snacks",
      "en:confectioneries",
      "en:chocolate-candies",
      "en:bonbons",
      "en:chocolate-covered-nuts",
      "en:chocolate-covered-peanuts"
    ],
    "images": {
      "2": {
        "uploader": "openfoodfacts-contributors",
        "sizes": {
          "full": {
            "w": 2448,
            "h": 3264
          },
          "400": {
            "w": 300,
            "h": 400
          },
          "100": {
            "h": 100,
            "w": 75
          }
        },
        "uploaded_t": "1461696838"
      },
      "19": {
        "sizes": {
          "400": {
            "w": 333,
            "h": 400
          },
          "100": {
            "w": 83,
            "h": 100
          },
          "full": {
            "h": 1201,
            "w": 1000
          }
        },
        "uploader": "date-limite-app",
        "uploaded_t": 1587039928
      },
      "7": {
        "sizes": {
          "full": {
            "w": 2000,
            "h": 2666
          },
          "100": {
            "w": 75,
            "h": 100
          },
          "400": {
            "h": 400,
            "w": 300
          }
        },
        "uploader": "openfoodfacts-contributors",
        "uploaded_t": "1490194673"
      },
      "8": {
        "uploader": "kiliweb",
        "sizes": {
          "100": {
            "w": 100,
            "h": 64
          },
          "400": {
            "h": 257,
            "w": 400
          },
          "full": {
            "h": 1395,
            "w": 2173
          }
        },
        "uploaded_t": "1515697215"
      },
      "3": {
        "uploaded_t": "1461696856",
        "sizes": {
          "full": {
            "h": 3264,
            "w": 2448
          },
          "400": {
            "h": 400,
            "w": 300
          },
          "100": {
            "w": 75,
            "h": 100
          }
        },
        "uploader": "openfoodfacts-contributors"
      },
      "12": {
        "uploaded_t": "1510592466",
        "uploader": "kiliweb",
        "sizes": {
          "400": {
            "h": 335,
            "w": 400
          },
          "100": {
            "h": 84,
            "w": 100
          },
          "full": {
            "h": 1360,
            "w": 1625
          }
        }
      },
      "15": {
        "uploaded_t": 1538231966,
        "uploader": "tomao",
        "sizes": {
          "full": {
            "h": 3064,
            "w": 2301
          },
          "400": {
            "h": 400,
            "w": 300
          },
          "100": {
            "h": 100,
            "w": 75
          }
        }
      },
      "4": {
        "uploader": "openfoodfacts-contributors",
        "sizes": {
          "400": {
            "h": 400,
            "w": 300
          },
          "100": {
            "h": 100,
            "w": 75
          },
          "full": {
            "h": 3264,
            "w": 2448
          }
        },
        "uploaded_t": "1461696871"
      },
      "ingredients": {
        "normalize": "false",
        "imgid": "3",
        "rev": "10",
        "white_magic": "false",
        "geometry": "1852x1281-88-1107",
        "sizes": {
          "100": {
            "w": 100,
            "h": 69
          },
          "400": {
            "w": 400,
            "h": 277
          },
          "200": {
            "w": 200,
            "h": 138
          },
          "full": {
            "h": 1281,
            "w": 1852
          }
        }
      },
      "9": {
        "uploaded_t": "1521215556",
        "uploader": "kiliweb",
        "sizes": {
          "full": {
            "h": 1200,
            "w": 910
          },
          "100": {
            "w": 76,
            "h": 100
          },
          "400": {
            "h": 400,
            "w": 303
          }
        }
      },
      "nutrition": {
        "normalize": "false",
        "imgid": "2",
        "rev": "9",
        "geometry": "1665x1093-357-1434",
        "white_magic": "false",
        "sizes": {
          "200": {
            "h": 131,
            "w": 200
          },
          "400": {
            "h": 263,
            "w": 400
          },
          "100": {
            "h": 66,
            "w": 100
          },
          "full": {
            "w": 1665,
            "h": 1093
          }
        }
      },
      "10": {
        "sizes": {
          "full": {
            "w": 1396,
            "h": 1092
          },
          "100": {
            "w": 100,
            "h": 78
          },
          "400": {
            "h": 313,
            "w": 400
          }
        },
        "uploader": "kiliweb",
        "uploaded_t": "1523387822"
      },
      "1": {
        "uploader": "openfoodfacts-contributors",
        "sizes": {
          "400": {
            "w": 300,
            "h": 400
          },
          "100": {
            "w": 75,
            "h": 100
          },
          "full": {
            "w": 2448,
            "h": 3264
          }
        },
        "uploaded_t": "1461696813"
      },
      "14": {
        "uploaded_t": 1537032381,
        "uploader": "openfoodfacts-contributors",
        "sizes": {
          "full": {
            "w": 922,
            "h": 1638
          },
          "100": {
            "h": 100,
            "w": 56
          },
          "400": {
            "h": 400,
            "w": 225
          }
        }
      },
      "6": {
        "uploader": "cestki13",
        "sizes": {
          "400": {
            "h": 139,
            "w": 400
          },
          "100": {
            "w": 100,
            "h": 35
          },
          "full": {
            "w": 1834,
            "h": 637
          }
        },
        "uploaded_t": "1471177163"
      },
      "front": {
        "imgid": "1",
        "normalize": "false",
        "sizes": {
          "full": {
            "h": 2481,
            "w": 2040
          },
          "400": {
            "h": 400,
            "w": 329
          },
          "200": {
            "h": 200,
            "w": 164
          },
          "100": {
            "w": 82,
            "h": 100
          }
        },
        "geometry": "2040x2481-243-426",
        "white_magic": "false",
        "rev": "8"
      },
      "13": {
        "uploader": "kiliweb",
        "sizes": {
          "100": {
            "h": 67,
            "w": 100
          },
          "400": {
            "w": 400,
            "h": 269
          },
          "full": {
            "w": 3024,
            "h": 2037
          }
        },
        "uploaded_t": "1510592468"
      },
      "18": {
        "uploaded_t": 1554302321,
        "uploader": "foodrepo",
        "sizes": {
          "full": {
            "w": 563,
            "h": 1000
          },
          "100": {
            "w": 56,
            "h": 100
          },
          "400": {
            "h": 400,
            "w": 225
          }
        }
      },
      "11": {
        "uploaded_t": "1510592465",
        "sizes": {
          "full": {
            "h": 1360,
            "w": 861
          },
          "100": {
            "w": 63,
            "h": 100
          },
          "400": {
            "w": 253,
            "h": 400
          }
        },
        "uploader": "kiliweb"
      },
      "front_fr": {
        "x1": null,
        "x2": null,
        "y1": null,
        "white_magic": null,
        "geometry": "0x0-0-0",
        "sizes": {
          "100": {
            "w": 83,
            "h": 100
          },
          "400": {
            "w": 333,
            "h": 400
          },
          "200": {
            "w": 166,
            "h": 200
          },
          "full": {
            "w": 1040,
            "h": 1250
          }
        },
        "rev": "71",
        "normalize": null,
        "imgid": "5",
        "y2": null,
        "angle": null
      },
      "ingredients_fr": {
        "y1": null,
        "white_magic": "0",
        "geometry": "0x0-0-0",
        "sizes": {
          "full": {
            "w": 1396,
            "h": 1092
          },
          "400": {
            "w": 400,
            "h": 313
          },
          "200": {
            "w": 200,
            "h": 156
          },
          "100": {
            "h": 78,
            "w": 100
          }
        },
        "rev": "47",
        "x2": null,
        "x1": null,
        "ocr": 1,
        "angle": null,
        "orientation": "0",
        "y2": null,
        "imgid": "10",
        "normalize": "0"
      },
      "17": {
        "sizes": {
          "400": {
            "h": 400,
            "w": 225
          },
          "100": {
            "w": 56,
            "h": 100
          },
          "full": {
            "h": 1000,
            "w": 563
          }
        },
        "uploader": "foodrepo",
        "uploaded_t": 1554302320
      },
      "5": {
        "uploaded_t": "1471168912",
        "uploader": "cestki13",
        "sizes": {
          "full": {
            "h": 1250,
            "w": 1040
          },
          "400": {
            "h": 400,
            "w": 333
          },
          "100": {
            "h": 100,
            "w": 83
          }
        }
      },
      "16": {
        "uploaded_t": 1539072739,
        "uploader": "openfoodfacts-contributors",
        "sizes": {
          "100": {
            "w": 75,
            "h": 100
          },
          "400": {
            "h": 400,
            "w": 300
          },
          "full": {
            "h": 4032,
            "w": 3024
          }
        }
      },
      "nutrition_fr": {
        "x1": "201.16668701171875",
        "x2": "397.16668701171875",
        "sizes": {
          "full": {
            "h": 568,
            "w": 899
          },
          "200": {
            "w": 200,
            "h": 126
          },
          "400": {
            "w": 400,
            "h": 253
          },
          "100": {
            "h": 63,
            "w": 100
          }
        },
        "geometry": "899x568-922-67",
        "white_magic": "false",
        "y1": "14.716659545898438",
        "rev": "19",
        "normalize": "true",
        "y2": "138.71665954589844",
        "imgid": "6",
        "angle": "0",
        "ocr": 1,
        "orientation": "0"
      }
    },
    "last_image_t": 1587039928,
    "created_t": 1461696813,
    "complete": 1,
    "nutrition_grade_fr": "e",
    "ingredients_percent_analysis": 1,
    "image_nutrition_small_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/nutrition_fr.19.200.jpg",
    "emb_codes_debug_tags": [],
    "labels_lc": "fr",
    "categories": "Snacks, Snacks sucrés, Confiseries, Confiseries chocolatées, Cacahuètes au chocolat",
    "data_quality_tags": [
      "en:ingredients-percent-analysis-ok",
      "en:ingredients-en-ending-comma",
      "en:ingredients-fr-ending-comma",
      "en:nutrition-value-under-0-1-g-salt"
    ],
    "debug_tags": [
      "43"
    ],
    "purchase_places": "Marseille 5°,France",
    "stores_tags": [
      "super-u",
      "aldi",
      "magasins-u"
    ],
    "cities_tags": [],
    "ingredients_text_with_allergens_en": "sugar, <span class=\"allergen\">peanuts</span> , cocoa paste, skimmed milk powder, <span class=\"allergen\">lactose</span> and milk proteins , cocoa butter, butterfat, palm, milk fat , starch, glucose syrup, butterfat, shea, emulsifier (soya lecithin ), <span class=\"allergen\">lactose</span> , stabilizer (gum arabic), colours (e100, e120, e133, e160a, e160e, e171), dextrin, glazing agent (carnauba wax), palm oil, salt, flavourings,",
    "categories_hierarchy": [
      "en:snacks",
      "en:sweet-snacks",
      "en:confectioneries",
      "en:chocolate-candies",
      "en:bonbons",
      "en:chocolate-covered-nuts",
      "en:chocolate-covered-peanuts"
    ],
    "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients": 1,
    "quantity": "330 g",
    "nutrition_data_per_debug_tags": [],
    "packaging_tags": [
      "sachet-plastique",
      "plastique",
      "doypack",
      "sachet"
    ],
    "categories_lc": "fr",
    "ingredients_hierarchy": [
      "en:sugar",
      "en:peanut",
      "en:cocoa-paste",
      "en:cocoa",
      "en:skimmed-milk-powder",
      "en:dairy",
      "en:milk-powder",
      "en:lactose-and-milk-proteins",
      "en:protein",
      "en:animal-protein",
      "en:milk-proteins",
      "en:lactose",
      "en:cocoa-butter",
      "en:palm-fat",
      "en:oil-and-fat",
      "en:vegetable-oil-and-fat",
      "en:palm-oil-and-fat",
      "en:milkfat",
      "en:fat",
      "en:starch",
      "en:glucose-syrup",
      "en:glucose",
      "en:shea-butter",
      "en:vegetable-fat",
      "en:emulsifier",
      "en:stabiliser",
      "en:colour",
      "en:e1400",
      "en:glazing-agent",
      "en:palm-oil",
      "en:salt",
      "en:flavouring",
      "en:soya-lecithin",
      "en:e322",
      "en:e414",
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e903"
    ],
    "labels": "Point Vert, Triman",
    "compared_to_category": "en:chocolate-covered-peanuts",
    "labels_prev_hierarchy": [
      "en:green-dot",
      "fr:Triman"
    ],
    "completed_t": 1461750660,
    "languages_codes": {
      "fr": 6,
      "en": 1
    },
    "ingredients_n_tags": [
      "29",
      "21-30"
    ],
    "max_imgid": "19",
    "purchase_places_tags": [
      "marseille-5",
      "france"
    ],
    "nova_group_debug": " -- ingredients/en:salt : 3 -- additives/en:e414 : 4",
    "correctors_tags": [
      "sebleouf",
      "cestki13",
      "kiliweb",
      "yuka.VGJJTUY1NGd2TlkwZ3NVaHBrNlAyOTFOK01TWVhHWHNBc05JSUE9PQ",
      "beniben",
      "yuka.VklJcEtxVXpoc3NhbGNGaTFRTE8zTnRNbHNhcWNFQ1RjcnNOSWc9PQ",
      "yuka.U3FzZk9vdFEvUGN6bXNWbW8wM2wrY05VbjUyUGMzeWVKY2xCSVE9PQ",
      "openfoodfacts-contributors",
      "yuka.WFBzZkZvazl2TWc2eGRnQnBpeko5czhveXNTc1FXV1hKZm93SVE9PQ",
      "yuka.WXYwY0VLZ0RpZDhidk04ODlReUt3K3QvK0xTMVhYT0lMc28zSVE9PQ",
      "yuka.WFBBbEY2a1J0UElybXRvNHprenkvL0Z5MThXRVJsNlpDT01SSVE9PQ",
      "yuka.VEk0dURwd2lodGNubDlzZjh3L3ArNEo4N1lXeldsbVFkZk1nSVE9PQ",
      "yuka.ZmE0SERaMG92S2xYd2ZZUnJ6UHQ2UEpOblppbmUxK0hjTW93SVE9PQ",
      "yuka.UmY5YkZxSXh0OFlna2NVeTRnanNvTndreXNLMFRFR0dBUFFoSVE9PQ",
      "rgjc",
      "magasins-u",
      "tomao",
      "foodrepo",
      "scanbot",
      "inf"
    ],
    "nutriscore_grade": "e",
    "ingredients_analysis_tags": [
      "en:palm-oil",
      "en:non-vegan",
      "en:non-vegetarian"
    ],
    "generic_name_fr": "Cacahuètes (23%) enrobées de chocolat au _lait_ (48%} et dragéifiées",
    "ingredients_text": "Sucre, _cacahuètes_, pâte de cacao, _lait_ écrémé en poudre, _lactose_ et protéines de _lait_, beurre de cacao, matière grasse de palme, matière grasse du _lait_ , amidon, sirop de glucose, matière grasse de karité, émulsifiant (lécithine de _soja_), _lactose_, stabilisant (gomme arabique),  colorants (E100, E120, E133, E160a, E160e, E171), dextrine, agent d'enrobage (cire de carnauba), huile de palme, sel, arômes,",
    "ingredients_from_or_that_may_be_from_palm_oil_n": 2,
    "no_nutrition_data": "",
    "misc_tags": [
      "en:nutrition-fruits-vegetables-nuts-estimate-from-ingredients",
      "en:nutrition-all-nutriscore-values-known",
      "en:nutriscore-computed"
    ],
    "image_front_small_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.200.jpg",
    "data_quality_bugs_tags": [],
    "emb_codes_20141016": "",
    "origins_tags": [],
    "link": "www.mms.com",
    "languages_hierarchy": [
      "en:french",
      "en:english"
    ],
    "data_sources": "Database - FoodRepo / openfood.ch, Databases, App - yuka, Apps",
    "stores_debug_tags": [],
    "traces_tags": [
      "en:nuts"
    ],
    "serving_quantity": "47",
    "popularity_tags": [
      "top-1000-scans-2020",
      "top-5000-scans-2020",
      "top-10000-scans-2020",
      "top-50000-scans-2020",
      "top-100000-scans-2020",
      "at-least-5-scans-2020",
      "at-least-10-scans-2020",
      "top-90-percent-scans-2020",
      "top-95-percent-scans-2020",
      "top-1000-fr-scans-2020",
      "top-5000-fr-scans-2020",
      "top-10000-fr-scans-2020",
      "top-50000-fr-scans-2020",
      "top-100000-fr-scans-2020",
      "top-country-fr-scans-2020",
      "at-least-5-fr-scans-2020",
      "at-least-10-fr-scans-2020",
      "top-100-de-scans-2020",
      "top-500-de-scans-2020",
      "top-1000-de-scans-2020",
      "top-5000-de-scans-2020",
      "top-10000-de-scans-2020",
      "top-50000-de-scans-2020",
      "top-100000-de-scans-2020",
      "top-500-scans-2019",
      "top-1000-scans-2019",
      "top-5000-scans-2019",
      "top-10000-scans-2019",
      "top-50000-scans-2019",
      "top-100000-scans-2019",
      "at-least-5-scans-2019",
      "at-least-10-scans-2019",
      "top-90-percent-scans-2019",
      "top-95-percent-scans-2019",
      "top-500-fr-scans-2019",
      "top-1000-fr-scans-2019",
      "top-5000-fr-scans-2019",
      "top-10000-fr-scans-2019",
      "top-50000-fr-scans-2019",
      "top-100000-fr-scans-2019",
      "top-country-fr-scans-2019",
      "at-least-5-fr-scans-2019",
      "at-least-10-fr-scans-2019",
      "top-500-ch-scans-2019",
      "top-1000-ch-scans-2019",
      "top-5000-ch-scans-2019",
      "top-10000-ch-scans-2019",
      "top-50000-ch-scans-2019",
      "top-100000-ch-scans-2019",
      "at-least-5-ch-scans-2019",
      "top-500-it-scans-2019",
      "top-1000-it-scans-2019",
      "top-5000-it-scans-2019",
      "top-10000-it-scans-2019",
      "top-50000-it-scans-2019",
      "top-100000-it-scans-2019",
      "at-least-5-it-scans-2019",
      "top-500-de-scans-2019",
      "top-1000-de-scans-2019",
      "top-5000-de-scans-2019",
      "top-10000-de-scans-2019",
      "top-50000-de-scans-2019",
      "top-100000-de-scans-2019",
      "top-50-bg-scans-2019",
      "top-100-bg-scans-2019",
      "top-500-bg-scans-2019",
      "top-1000-bg-scans-2019",
      "top-5000-bg-scans-2019",
      "top-10000-bg-scans-2019",
      "top-50000-bg-scans-2019",
      "top-100000-bg-scans-2019",
      "top-500-nl-scans-2019",
      "top-1000-nl-scans-2019",
      "top-5000-nl-scans-2019",
      "top-10000-nl-scans-2019",
      "top-50000-nl-scans-2019",
      "top-100000-nl-scans-2019",
      "top-500-gb-scans-2019",
      "top-1000-gb-scans-2019",
      "top-5000-gb-scans-2019",
      "top-10000-gb-scans-2019",
      "top-50000-gb-scans-2019",
      "top-100000-gb-scans-2019",
      "top-500-ma-scans-2019",
      "top-1000-ma-scans-2019",
      "top-5000-ma-scans-2019",
      "top-10000-ma-scans-2019",
      "top-50000-ma-scans-2019",
      "top-100000-ma-scans-2019",
      "top-500-re-scans-2019",
      "top-1000-re-scans-2019",
      "top-5000-re-scans-2019",
      "top-10000-re-scans-2019",
      "top-50000-re-scans-2019",
      "top-100000-re-scans-2019",
      "top-10-sc-scans-2019",
      "top-50-sc-scans-2019",
      "top-100-sc-scans-2019",
      "top-500-sc-scans-2019",
      "top-1000-sc-scans-2019",
      "top-5000-sc-scans-2019",
      "top-10000-sc-scans-2019",
      "top-50000-sc-scans-2019",
      "top-100000-sc-scans-2019",
      "top-50-at-scans-2019",
      "top-100-at-scans-2019",
      "top-500-at-scans-2019",
      "top-1000-at-scans-2019",
      "top-5000-at-scans-2019",
      "top-10000-at-scans-2019",
      "top-50000-at-scans-2019",
      "top-100000-at-scans-2019"
    ],
    "stores": "Super U,Aldi,Magasins U",
    "pnns_groups_2_tags": [
      "sweets",
      "known"
    ],
    "nutriments": {
      "carbohydrates_100g": 59,
      "fat_serving": 11.9,
      "sodium": 0.036,
      "energy-kj_100g": 2140,
      "fiber_100g": 2.7,
      "nutrition-score-fr_100g": 24,
      "energy": 2140,
      "salt_100g": 0.09,
      "fiber": 2.7,
      "sodium_100g": 0.036,
      "carbohydrates_unit": "g",
      "fat_unit": "g",
      "fat_100g": 25.3,
      "energy-kj_serving": 1010,
      "sodium_unit": "g",
      "fruits-vegetables-nuts-estimate-from-ingredients_100g": 0,
      "salt": 0.09,
      "sodium_value": 0.036,
      "salt_value": 0.09,
      "energy_value": 2140,
      "proteins_value": 9.7,
      "salt_serving": 0.0423,
      "energy-kj_value": 2140,
      "sugars_unit": "g",
      "sugars_100g": 53.8,
      "proteins_unit": "g",
      "sugars_serving": 25.3,
      "nova-group_100g": 4,
      "saturated-fat_serving": 4.84,
      "nutrition-score-fr": 24,
      "saturated-fat_unit": "g",
      "energy-kj_unit": "kJ",
      "nova-group_serving": 4,
      "energy_serving": 1010,
      "carbohydrates_serving": 27.7,
      "fat": 25.3,
      "saturated-fat_100g": 10.3,
      "fiber_serving": 1.27,
      "sugars_value": 53.8,
      "salt_unit": "g",
      "carbohydrates_value": 59,
      "energy_100g": 2140,
      "nova-group": 4,
      "energy-kj": 2140,
      "sodium_serving": 0.0169,
      "sugars": 53.8,
      "proteins": 9.7,
      "proteins_100g": 9.7,
      "fat_value": 25.3,
      "proteins_serving": 4.56,
      "fiber_value": 2.7,
      "saturated-fat": 10.3,
      "saturated-fat_value": 10.3,
      "fiber_unit": "g",
      "energy_unit": "kJ",
      "carbohydrates": 59
    },
    "nutriscore_data": {
      "proteins_points": 5,
      "fruits_vegetables_nuts_colza_walnut_olive_oils_value": 0,
      "sodium_points": 0,
      "proteins": 9.7,
      "fiber_value": 2.7,
      "saturated_fat_ratio_value": 40.7,
      "saturated_fat": 10.3,
      "is_fat": 0,
      "saturated_fat_ratio_points": 6,
      "sugars_value": 53.8,
      "fiber_points": 2,
      "sugars_points": 10,
      "sugars": 53.8,
      "energy_points": 6,
      "positive_points": 2,
      "negative_points": 26,
      "saturated_fat_points": 10,
      "sodium_value": 36,
      "energy_value": 2140,
      "proteins_value": 9.7,
      "is_water": 0,
      "saturated_fat_value": 10.3,
      "fruits_vegetables_nuts_colza_walnut_olive_oils_points": 0,
      "score": 24,
      "is_beverage": 0,
      "grade": "e",
      "saturated_fat_ratio": 40.7114624505929,
      "sodium": 36,
      "energy": 2140,
      "is_cheese": 0,
      "fruits_vegetables_nuts_colza_walnut_olive_oils": 0,
      "fiber": 2.7
    },
    "additives_old_tags": [
      "en:e1403",
      "en:e322",
      "en:e414",
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e1400",
      "en:e903"
    ],
    "nutrition_data": "on",
    "generic_name_fr_debug_tags": [],
    "nova_groups": "4",
    "_keywords": [
      "48",
      "large",
      "sucre",
      "enrobee",
      "23",
      "confiserie",
      "au",
      "chocolatee",
      "cacahuete",
      "point",
      "lait",
      "drageifiee",
      "triman",
      "de",
      "chocolat",
      "snack",
      "et",
      "m-m",
      "mar",
      "vert"
    ],
    "interface_version_created": "20120622",
    "nutrition_score_beverage": 0,
    "product_name": "M&m's Large",
    "generic_name": "Cacahuètes (23%) enrobées de chocolat au _lait_ (48%} et dragéifiées",
    "ingredients_text_debug": "Sucre, _cacahuètes_, pâte de cacao, _lait_ écrémé en poudre, _lactose_ et protéines de _lait_, beurre de cacao, matière grasse de palme, matière grasse du _lait_ , amidon, sirop de glucose, matière grasse de karité, émulsifiant : (lécithine de _soja_), _lactose_, stabilisant : (gomme arabique),  colorants : ( - e100 - ,  - e120 - ,  - e133 - ,  - e160a - .  - e160e - ,  - e171 - ), dextrine, agent d'enrobage : (cire de carnauba), huile de palme, sel, arômes.",
    "emb_codes": "",
    "image_thumb_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.100.jpg",
    "expiration_date_debug_tags": [],
    "nutrition_data_prepared": "",
    "manufacturing_places": "",
    "ingredients_that_may_be_from_palm_oil_tags": [
      "e160a-beta-carotene"
    ],
    "pnns_groups_2": "Sweets",
    "ciqual_food_name_tags": [
      "sugar-and-chocolate-coated-peanut"
    ],
    "product_name_fr_debug_tags": [],
    "countries_lc": "fr",
    "last_modified_by": "date-limite-app",
    "image_nutrition_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/nutrition_fr.19.400.jpg",
    "labels_prev_tags": [
      "en:green-dot",
      "fr:triman"
    ],
    "pnns_groups_1": "Sugary snacks",
    "ingredients_from_palm_oil_tags": [
      "huile-de-palme"
    ],
    "allergens": "en:milk,en:peanuts,en:soybeans",
    "image_front_thumb_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.100.jpg",
    "purchase_places_debug_tags": [],
    "checkers_tags": [],
    "image_ingredients_thumb_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/ingredients_fr.47.100.jpg",
    "last_edit_dates_tags": [
      "2020-04-20",
      "2020-04",
      "2020"
    ],
    "traces_from_user": "(fr) en:nuts",
    "countries": "France, Switzerland, en:italy",
    "states_hierarchy": [
      "en:to-be-checked",
      "en:complete",
      "en:nutrition-facts-completed",
      "en:ingredients-completed",
      "en:expiration-date-completed",
      "en:packaging-code-to-be-completed",
      "en:characteristics-completed",
      "en:categories-completed",
      "en:brands-completed",
      "en:packaging-completed",
      "en:quantity-completed",
      "en:product-name-completed",
      "en:photos-validated",
      "en:photos-uploaded"
    ],
    "origins_debug_tags": [],
    "interface_version_modified": "20150316.jqm2",
    "nutrition_data_per": "100g",
    "emb_codes_orig": "",
    "additives_tags": [
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e1400",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e322",
      "en:e322i",
      "en:e414",
      "en:e903"
    ],
    "ingredients_ids_debug": [
      "sucre",
      "cacahuetes",
      "pate-de-cacao",
      "lait-ecreme-en-poudre",
      "lactose-et-proteines-de-lait",
      "beurre-de-cacao",
      "matiere-grasse-de-palme",
      "matiere-grasse-du-lait",
      "amidon",
      "sirop-de-glucose",
      "matiere-grasse-de-karite",
      "emulsifiant",
      "lecithine-de-soja",
      "lactose",
      "stabilisant",
      "gomme-arabique",
      "colorants",
      "e100",
      "e120",
      "e133",
      "e160a",
      "e160e",
      "e171",
      "dextrine",
      "agent-d-enrobage",
      "cire-de-carnauba",
      "huile-de-palme",
      "sel",
      "aromes"
    ],
    "image_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.400.jpg",
    "last_modified_t": 1587399659,
    "creator": "openfoodfacts-contributors",
    "ingredients_debug": [
      "Sucre",
      ",",
      null,
      null,
      null,
      " _cacahuètes_",
      ",",
      null,
      null,
      null,
      " pâte de cacao",
      ",",
      null,
      null,
      null,
      " _lait_ écrémé en poudre",
      ",",
      null,
      null,
      null,
      " _lactose_ et protéines de _lait_",
      ",",
      null,
      null,
      null,
      " beurre de cacao",
      ",",
      null,
      null,
      null,
      " matière grasse de palme",
      ",",
      null,
      null,
      null,
      " matière grasse du _lait_ ",
      ",",
      null,
      null,
      null,
      " amidon",
      ",",
      null,
      null,
      null,
      " sirop de glucose",
      ",",
      null,
      null,
      null,
      " matière grasse de karité",
      ",",
      null,
      null,
      null,
      " émulsifiant ",
      ":",
      ":",
      null,
      null,
      " ",
      "(",
      "(",
      null,
      null,
      "lécithine de _soja_)",
      ",",
      null,
      null,
      null,
      " _lactose_",
      ",",
      null,
      null,
      null,
      " stabilisant ",
      ":",
      ":",
      null,
      null,
      " ",
      "(",
      "(",
      null,
      null,
      "gomme arabique)",
      ",",
      null,
      null,
      null,
      "  colorants ",
      ":",
      ":",
      null,
      null,
      " ",
      "(",
      "(",
      null,
      null,
      "",
      " - ",
      " - ",
      " - ",
      null,
      "e100",
      " - ",
      " - ",
      " - ",
      null,
      "",
      ",",
      null,
      null,
      null,
      " ",
      " - ",
      " - ",
      " - ",
      null,
      "e120",
      " - ",
      " - ",
      " - ",
      null,
      "",
      ",",
      null,
      null,
      null,
      " ",
      " - ",
      " - ",
      " - ",
      null,
      "e133",
      " - ",
      " - ",
      " - ",
      null,
      "",
      ",",
      null,
      null,
      null,
      " ",
      " - ",
      " - ",
      " - ",
      null,
      "e160a",
      " - ",
      " - ",
      " - ",
      null,
      "",
      ". ",
      null,
      null,
      null,
      "",
      " - ",
      " - ",
      " - ",
      null,
      "e160e",
      " - ",
      " - ",
      " - ",
      null,
      "",
      ",",
      null,
      null,
      null,
      " ",
      " - ",
      " - ",
      " - ",
      null,
      "e171",
      " - ",
      " - ",
      " - ",
      null,
      ")",
      ",",
      null,
      null,
      null,
      " dextrine",
      ",",
      null,
      null,
      null,
      " agent d'enrobage ",
      ":",
      ":",
      null,
      null,
      " ",
      "(",
      "(",
      null,
      null,
      "cire de carnauba)",
      ",",
      null,
      null,
      null,
      " huile de palme",
      ",",
      null,
      null,
      null,
      " sel",
      ",",
      null,
      null,
      null,
      " arômes."
    ],
    "expiration_date": "08/01/2017",
    "pnns_groups_1_tags": [
      "sugary-snacks",
      "known"
    ],
    "nutrition_grades": "e",
    "nova_group": 4,
    "manufacturing_places_tags": [],
    "known_ingredients_n": 42,
    "nucleotides_tags": [],
    "product_name_fr": "M&m's Large",
    "selected_images": {
      "front": {
        "thumb": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.100.jpg"
        },
        "small": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.200.jpg"
        },
        "display": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.400.jpg"
        }
      },
      "ingredients": {
        "display": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/ingredients_fr.47.400.jpg"
        },
        "small": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/ingredients_fr.47.200.jpg"
        },
        "thumb": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/ingredients_fr.47.100.jpg"
        }
      },
      "nutrition": {
        "display": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/nutrition_fr.19.400.jpg"
        },
        "small": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/nutrition_fr.19.200.jpg"
        },
        "thumb": {
          "fr": "https://static.openfoodfacts.org/images/products/500/015/949/2737/nutrition_fr.19.100.jpg"
        }
      }
    },
    "manufacturing_places_debug_tags": [],
    "additives_n": 10,
    "languages": {
      "en:english": 1,
      "en:french": 6
    },
    "sortkey": 301587399659,
    "_id": "5000159492737",
    "additives_debug_tags": [
      "en-e322i-added"
    ],
    "scans_n": 717,
    "vitamins_tags": [],
    "debug_param_sorted_langs": [
      "fr"
    ],
    "additives_original_tags": [
      "en:e322i",
      "en:e414",
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e1400",
      "en:e903"
    ],
    "unknown_nutrients_tags": [],
    "ingredients_text_with_allergens_fr": "Sucre, <span class=\"allergen\">cacahuètes</span>, pâte de cacao, <span class=\"allergen\">lait</span> écrémé en poudre, <span class=\"allergen\">lactose</span> et protéines de <span class=\"allergen\">lait</span>, beurre de cacao, matière grasse de palme, matière grasse du <span class=\"allergen\">lait</span> , amidon, sirop de glucose, matière grasse de karité, émulsifiant (lécithine de <span class=\"allergen\">soja</span>), <span class=\"allergen\">lactose</span>, stabilisant (gomme arabique),  colorants (E100, E120, E133, E160a, E160e, E171), dextrine, agent d'enrobage (cire de carnauba), huile de palme, sel, arômes,",
    "states_tags": [
      "en:to-be-checked",
      "en:complete",
      "en:nutrition-facts-completed",
      "en:ingredients-completed",
      "en:expiration-date-completed",
      "en:packaging-code-to-be-completed",
      "en:characteristics-completed",
      "en:categories-completed",
      "en:brands-completed",
      "en:packaging-completed",
      "en:quantity-completed",
      "en:product-name-completed",
      "en:photos-validated",
      "en:photos-uploaded"
    ],
    "link_debug_tags": [],
    "origins": "",
    "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value": 0,
    "nucleotides_prev_tags": [],
    "nutriscore_score": 24,
    "code": "5000159492737",
    "image_small_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/front_fr.71.200.jpg",
    "unknown_ingredients_n": 0,
    "amino_acids_tags": [],
    "photographers_tags": [
      "openfoodfacts-contributors",
      "cestki13",
      "kiliweb",
      "tomao",
      "foodrepo",
      "date-limite-app"
    ],
    "traces_debug_tags": [],
    "brands_tags": [
      "mars",
      "mars-chocolat",
      "m-m-s"
    ],
    "data_quality_warnings_tags": [
      "en:ingredients-en-ending-comma",
      "en:ingredients-fr-ending-comma",
      "en:nutrition-value-under-0-1-g-salt"
    ],
    "nova_groups_tags": [
      "en:4-ultra-processed-food-and-drink-products"
    ],
    "ingredients_n": 29,
    "editors_tags": [
      "rgjc",
      "beniben",
      "scanbot",
      "foodrepo",
      "date-limite-app",
      "yuka.UmY5YkZxSXh0OFlna2NVeTRnanNvTndreXNLMFRFR0dBUFFoSVE9PQ",
      "yuka.VklJcEtxVXpoc3NhbGNGaTFRTE8zTnRNbHNhcWNFQ1RjcnNOSWc9PQ",
      "openfoodfacts-contributors",
      "yuka.VEk0dURwd2lodGNubDlzZjh3L3ArNEo4N1lXeldsbVFkZk1nSVE9PQ",
      "yuka.WFBzZkZvazl2TWc2eGRnQnBpeko5czhveXNTc1FXV1hKZm93SVE9PQ",
      "yuka.WGFVOUY2Y0dxUE14dWRnYTBSSEg5TTRwNjRPMVczeU9OK0ZNSUE9PQ",
      "yuka.WDUwQUs0OEZvY1k2aGNJanp6U0l4dU5GL01MNWNYbWVBTXNzSVE9PQ",
      "yuka.UjdBUUdma1F1TmdycWNVeXJqNlAwZFprMmIrd1ZtKytEOU0ySVE9PQ",
      "yuka.WXYwY0VLZ0RpZDhidk04ODlReUt3K3QvK0xTMVhYT0lMc28zSVE9PQ",
      "cestki13",
      "yuka.WmZvYkRMUmN1ZDhYaGRnMTV6aUYydlJSNXNLaVlEcW9DdXd6SVE9PQ",
      "kiliweb",
      "yuka.WllaWlA0c2huK2NCbmNKaThSblI4NDVLOTgrT1czcXlKL0VRSWc9PQ",
      "yuka.ZmE0SERaMG92S2xYd2ZZUnJ6UHQ2UEpOblppbmUxK0hjTW93SVE9PQ",
      "sebleouf",
      "yuka.ZklVT1RhUmR2OFlsdGYwZTJTUDZvT2g1eXJLV0JIMm9EZmcrSVE9PQ",
      "yuka.UktRcURmd2MrS2NicXNJaHhDcmJ4dlJTbWNLWFIyV29FZEFRSWc9PQ",
      "inf",
      "magasins-u",
      "yuka.VklFRENMVW5wZUFPb01BaTJpclg0dllwNnNXMFdIdTFjYzVQSVE9PQ",
      "yuka.YTZRc0RZTmNqTlVJZ01jNTVoSE00dkJ3eWEvMEFEbnROc1FOSWc9PQ",
      "yuka.WFBBbEY2a1J0UElybXRvNHprenkvL0Z5MThXRVJsNlpDT01SSVE9PQ",
      "tomao",
      "yuka.VGJJTUY1NGd2TlkwZ3NVaHBrNlAyOTFOK01TWVhHWHNBc05JSUE9PQ",
      "yuka.WDVJNUFab1o5cU13aXZRTXhCYlQrTllseUpDTFpXSzNGdVpOSUE9PQ",
      "yuka.U3FzZk9vdFEvUGN6bXNWbW8wM2wrY05VbjUyUGMzeWVKY2xCSVE9PQ",
      "yuka.WXYwS0ZQNDc5dWNueE50aTJRM1Y1NDVSNmEvNWIyMmJEOHNXSVE9PQ"
    ],
    "update_key": "ingredients20200511",
    "ingredients_text_with_allergens": "Sucre, <span class=\"allergen\">cacahuètes</span>, pâte de cacao, <span class=\"allergen\">lait</span> écrémé en poudre, <span class=\"allergen\">lactose</span> et protéines de <span class=\"allergen\">lait</span>, beurre de cacao, matière grasse de palme, matière grasse du <span class=\"allergen\">lait</span> , amidon, sirop de glucose, matière grasse de karité, émulsifiant (lécithine de <span class=\"allergen\">soja</span>), <span class=\"allergen\">lactose</span>, stabilisant (gomme arabique),  colorants (E100, E120, E133, E160a, E160e, E171), dextrine, agent d'enrobage (cire de carnauba), huile de palme, sel, arômes,",
    "lang": "fr",
    "traces_hierarchy": [
      "en:nuts"
    ],
    "serving_size": "47g",
    "nutrition_data_prepared_per_debug_tags": [],
    "image_ingredients_url": "https://static.openfoodfacts.org/images/products/500/015/949/2737/ingredients_fr.47.400.jpg",
    "product_quantity": "330",
    "ingredients_original_tags": [
      "en:sugar",
      "en:peanut",
      "en:cocoa-paste",
      "en:skimmed-milk-powder",
      "en:lactose-and-milk-proteins",
      "en:cocoa-butter",
      "en:palm-fat",
      "en:milkfat",
      "en:starch",
      "en:glucose-syrup",
      "en:shea-butter",
      "en:emulsifier",
      "en:lactose",
      "en:stabiliser",
      "en:colour",
      "en:e1400",
      "en:glazing-agent",
      "en:palm-oil",
      "en:salt",
      "en:flavouring",
      "en:soya-lecithin",
      "en:e414",
      "en:e100",
      "en:e120",
      "en:e133",
      "en:e160a",
      "en:e160e",
      "en:e171",
      "en:e903"
    ]
  };

  displayMore = false;

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.product.ingredients = this.product.ingredients.map(ingredient => {
      ingredient.text = ingredient.text.replace(/_/g, '');
      return ingredient;
    });
  }

  getImageUrl(product: any, layout?: string) {
    return this._productService.getImageUrl(product, layout)
  }
}
