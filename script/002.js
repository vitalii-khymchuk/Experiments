/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const catalog = [
  { name: "🍎", price: 50 },
  { name: "🍇", price: 70 },
  { name: "🍋", price: 60 },
  { name: "🍓", price: 110 },
];

const cart = {
  items: [],

  getItems() {},

  add(product) {
    this.items.push(catalog[this.getIndexOfProductInCatalog(product)]);
    this.items[this.getIndexOfProductInCart(product)].quantity = 1;
  },

  remove(productName) {
    this.items.splice([this.getIndexOfProductInCart(productName)], 1);
  },

  clear() {
    cart.items.splice(0, cart.items.length);
  },

  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },

  increaseQuantity(productName) {
    this.items[this.getIndexOfProductInCart(productName)].quantity += 1;
  },

  decreaseQuantity(productName) {
    if (this.items[this.getIndexOfProductInCart(productName)].quantity === 1) {
      return;
    }
    this.items[this.getIndexOfProductInCart(productName)].quantity -= 1;
  },

  getIndexOfProductInCatalog(product) {
    for (let i = 0; i < catalog.length; i += 1) {
      if (catalog[i].name === product) {
        return i;
      }
    }
  },

  getIndexOfProductInCart(product) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (catalog[i].name === product) {
        return i;
      }
    }
  },
};

cart.add("🍎");
cart.add("🍇");
cart.add("🍋");
cart.remove("🍇");
cart.increaseQuantity("🍎");
console.log(cart.items);
console.log(cart.countTotalPrice());
