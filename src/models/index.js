// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Currency = {
  "USD": "USD",
  "EUR": "EUR",
  "TRY": "TRY",
  "ROUBLE": "ROUBLE"
};

const MenuItemRating = {
  "NA": "NA",
  "VERY_DISSATISFIED": "VERY_DISSATISFIED",
  "DISSATISFIED": "DISSATISFIED",
  "SATISFIED": "SATISFIED",
  "VERY_SATISFIED": "VERY_SATISFIED"
};

const { MenuItemLike, Menu, MenuCategory, MenuItem, MenuItemReview, User, Business } = initSchema(schema);

export {
  MenuItemLike,
  Menu,
  MenuCategory,
  MenuItem,
  MenuItemReview,
  User,
  Business,
  Currency,
  MenuItemRating
};