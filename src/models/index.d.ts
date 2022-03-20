import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Currency {
  USD = "USD",
  EUR = "EUR",
  TRY = "TRY",
  ROUBLE = "ROUBLE"
}

export enum MenuItemRating {
  NA = "NA",
  VERY_DISSATISFIED = "VERY_DISSATISFIED",
  DISSATISFIED = "DISSATISFIED",
  SATISFIED = "SATISFIED",
  VERY_SATISFIED = "VERY_SATISFIED"
}



type BusinessLikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuItemLikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuItemReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BusinessLike {
  readonly id: string;
  readonly userID: string;
  readonly businessID: string;
  readonly status?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BusinessLike, BusinessLikeMetaData>);
  static copyOf(source: BusinessLike, mutator: (draft: MutableModel<BusinessLike, BusinessLikeMetaData>) => MutableModel<BusinessLike, BusinessLikeMetaData> | void): BusinessLike;
}

export declare class MenuItemLike {
  readonly id: string;
  readonly menuitemID: string;
  readonly userID: string;
  readonly status?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MenuItemLike, MenuItemLikeMetaData>);
  static copyOf(source: MenuItemLike, mutator: (draft: MutableModel<MenuItemLike, MenuItemLikeMetaData>) => MutableModel<MenuItemLike, MenuItemLikeMetaData> | void): MenuItemLike;
}

export declare class Menu {
  readonly id: string;
  readonly name?: string;
  readonly businessID: string;
  readonly MenuCategories?: (MenuCategory | null)[];
  readonly images?: (string | null)[];
  readonly notifications?: (string | null)[];
  readonly isDefault?: boolean;
  readonly description?: string;
  readonly bottomDescription?: string;
  readonly owner?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Menu, MenuMetaData>);
  static copyOf(source: Menu, mutator: (draft: MutableModel<Menu, MenuMetaData>) => MutableModel<Menu, MenuMetaData> | void): Menu;
}

export declare class MenuCategory {
  readonly id: string;
  readonly MenuItems?: (MenuItem | null)[];
  readonly name?: string;
  readonly menuID: string;
  readonly topDescriptiom?: string;
  readonly bottomDescription?: string;
  readonly order?: number;
  readonly owner?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MenuCategory, MenuCategoryMetaData>);
  static copyOf(source: MenuCategory, mutator: (draft: MutableModel<MenuCategory, MenuCategoryMetaData>) => MutableModel<MenuCategory, MenuCategoryMetaData> | void): MenuCategory;
}

export declare class MenuItem {
  readonly id: string;
  readonly menucategoryID?: string;
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly rating?: number;
  readonly MenuItemReviews?: (MenuItemLike | null)[];
  readonly currency?: Currency | keyof typeof Currency;
  readonly image?: string;
  readonly customPriceSymbol?: string;
  readonly MenuItemLikes?: (MenuItemLike | null)[];
  readonly likeCount?: string;
  readonly order?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MenuItem, MenuItemMetaData>);
  static copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem, MenuItemMetaData>) => MutableModel<MenuItem, MenuItemMetaData> | void): MenuItem;
}

export declare class MenuItemReview {
  readonly id: string;
  readonly menuitemID?: string;
  readonly userID: string;
  readonly rating?: MenuItemRating | keyof typeof MenuItemRating;
  readonly content?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MenuItemReview, MenuItemReviewMetaData>);
  static copyOf(source: MenuItemReview, mutator: (draft: MutableModel<MenuItemReview, MenuItemReviewMetaData>) => MutableModel<MenuItemReview, MenuItemReviewMetaData> | void): MenuItemReview;
}

export declare class User {
  readonly id: string;
  readonly fullName?: string;
  readonly profilePicture?: string;
  readonly MenuItemReviews?: (BusinessLike | null)[];
  readonly description?: string;
  readonly owner?: string;
  readonly MenuItemLikes?: (BusinessLike | null)[];
  readonly BusinessLikes?: (BusinessLike | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Business {
  readonly id: string;
  readonly username?: string;
  readonly address?: string;
  readonly phone?: string;
  readonly Menus?: (Menu | null)[];
  readonly additional?: (string | null)[];
  readonly name?: string;
  readonly owner?: string;
  readonly wifi?: string;
  readonly logo?: string;
  readonly BusinessLikes?: (Menu | null)[];
  readonly likeCount?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}