const breakfastOptions = ["eggs", "toast", "coffee"];
const lunchOptions = ["sandwich", "chips", "soda"];
const dinnerOptions = ["steak", "potatoes", "wine", "cake"];

class Meal {
  constructor(orderArr) {
    this.orderArr = orderArr;
    this.options = [];
    this.main = [];
    this.side = [];
    this.drink = [];
    this.desert = [];
  }

  quantity() {
    this.orderArr.forEach((o) => {
      if (o === 1) this.main.push(this.options[0]);
      if (o === 2) this.side.push(this.options[1]);
      if (o === 3) this.drink.push(this.options[2]);
      if (o === 4) this.desert.push(this.options[3]);
    });
  }
}
class Breakfast extends Meal {
  constructor(orderArr) {
    super(orderArr);
    this.options = breakfastOptions;
    this.quantity();
  }

  print() {
    let order = "";
    if (this.main.length > 1) {
      order =
        "Unable to process: " +
        this.options[0] +
        " cannot be ordered more than once";
    } else if (this.main.length < 1) {
      order = "Unable to process: " + this.options[0] + " is missing";
    } else if (this.side.length > 1) {
      order =
        "Unable to process: " +
        this.options[1] +
        " cannot be ordered more than once";
    } else if (this.side.length < 1) {
      order = "Unable to process: " + this.options[1] + " is missing";
    } else {
      if (this.drink.length === 0) {
        this.drink.push("water");
      }
      order +=
        this.options[0] +
        ", " +
        this.options[1] +
        ", " +
        this.drink[0] +
        (this.drink.length > 1 ? "(" + this.drink.length + ")" : "");
    }
    return order;
  }
}
class Lunch extends Meal {
  constructor(orderArr) {
    super(orderArr);
    this.options = lunchOptions;
    this.quantity();
  }

  print() {
    let order = "";
    if (this.main.length > 1) {
      order =
        "Unable to process: " +
        this.options[0] +
        " cannot be ordered more than once";
    } else if (this.main.length < 1) {
      order = "Unable to process: " + this.options[0] + " is missing";
    } else if (this.side.length < 1) {
      order = "Unable to process: " + this.options[1] + " is missing";
    } else if (this.drink.length > 1) {
      order =
        "Unable to process: " +
        this.options[2] +
        " cannot be ordered more than once";
    } else {
      if (this.drink.length === 0) {
        this.drink.push("water");
      }
      order +=
        this.options[0] +
        ", " +
        this.options[1] +
        (this.side.length > 1 ? "(" + this.side.length + ")" : "") +
        ", " +
        this.drink[0];
    }
    return order;
  }
}
class Dinner extends Meal {
  constructor(orderArr) {
    super(orderArr);
    this.options = dinnerOptions;
    this.quantity();
  }

  print() {
    let order = "";
    if (this.main.length > 1) {
      order =
        "Unable to process: " +
        this.options[0] +
        " cannot be ordered more than once";
    } else if (this.main.length < 1) {
      order = "Unable to process: " + this.options[0] + " is missing";
    } else if (this.side.length > 1) {
      order =
        "Unable to process: " +
        this.options[1] +
        " cannot be ordered more than once";
    } else if (this.side.length < 1) {
      order = "Unable to process: " + this.options[1] + " is missing";
    } else if (this.drink.length > 1) {
      order =
        "Unable to process: " +
        this.options[2] +
        " cannot be ordered more than once";
    } else if (this.desert.length > 1) {
      order =
        "Unable to process: " +
        this.options[3] +
        " cannot be ordered more than once";
    } else if (this.desert.length < 1) {
      order = "Unable to process: " + this.options[3] + " is missing";
    } else {
      this.drink.push("water");
      order +=
        this.options[0] +
        ", " +
        this.options[1] +
        (this.side.length > 1 ? "(" + this.side.length + ")" : "") +
        ", " +
        this.drink.map((myDrink) => {
          return myDrink;
        }) +
        ", " +
        this.options[3];
    }
    return order;
  }
}
module.exports = {
  Meal: Meal,
  Breakfast: Breakfast,
  Lunch: Lunch,
  Dinner: Dinner,
};
