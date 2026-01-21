// Câu 1: Khai báo constructor function `Product` để tạo đối tượng sản phẩm.
const Product = function (id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
};

// Câu 2: Khởi tạo mảng `products` gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.
// Danh mục Accessories
const product1 = new Product(
  1,
  "Balo thời trang",
  31000000,
  5,
  "Accessories",
  true,
);
const product2 = new Product(2, "Ví da", 719760, 0, "Accessories", true);
const product3 = new Product(3, "Thắt lưng", 2159760, 8, "Accessories", true);

// Danh mục Clothing
const product4 = new Product(4, "Áo thun", 479760, 50, "Clothing", true);
const product5 = new Product(5, "Quần jean", 1439760, 20, "Clothing", true);
const product6 = new Product(6, "Giày thể thao", 1919760, 12, "Clothing", true);

// Tạo mảng `products` chứa tất cả các sản phẩm
let products = [product1, product2, product3, product4, product5, product6];

// Câu 3: Tạo mảng mới chỉ chứa: `name`, `price` của mỗi sản phẩm.
let productsWithNameAndPrice = products.map(function (product) {
  return { name: product.name, price: product.price };
});

console.log(productsWithNameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0 và isAvailable = true)
let availableProducts = products.filter(function (product) {
  return product.isAvailable && product.quantity > 0;
});

console.log(availableProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
let hasExpensiveProduct = products.some(function (product) {
  return product.price > 30000000;
});

console.log(hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
let hasSoldAccessories = products
  .filter(function (product) {
    return product.category === "Accessories";
  })
  .every(function (product) {
    return product.isAvailable === true;
  });

console.log(hasSoldAccessories);

// Câu 7: Tính tổng giá trị kho hàng: giá trị kho = price × quantity
let totalInventoryValue = products.reduce(function (sum, product) {
  return sum + product.price * product.quantity;
}, 0);

console.log(
  "Tổng giá trị kho hàng:",
  totalInventoryValue.toLocaleString("vi-VN"),
  "VND",
);

// Câu 8: Hiển thị thông tin sản phẩm theo định dạng dễ đọc (tên, giá, danh mục, tình trạng)
for (const product of products) {
  console.log(
    `Sản phẩm: ${product.name} - Giá: ${product.price.toLocaleString(
      "vi-VN",
    )} VND - Danh mục: ${
      product.category
    } - Còn hàng: ${product.isAvailable ? "Có" : "Hết"}`,
  );
}

// Câu 9: Hiển thị thông tin sản phẩm bằng vòng lặp `for...in` (id, name, price, quantity...)
for (const index in products) {
  console.log(
    `Id: ${products[index].id} \nProduct Name: ${products[index].name}\nPrice: ${products[index].price.toLocaleString("vi-VN")} \nQuantity: ${products[index].quantity} VND\nCategory: ${products[index].category}\nAvailable: ${products[index].isAvailable ? "Yes" : "No"}\n`,
  );
}
``;
// Câu 10: Sử dụng arrow function để tạo mảng tên các sản phẩm đang có sẵn (isAvailable && quantity > 0)
const result = products
  .filter((product) => {
    return product.isAvailable && product.quantity > 0;
  })
  .map((product) => {
    return product.name;
  });

console.log(result);
