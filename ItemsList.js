const productList = [];

class Product {
    constructor(name, price, image, description, id, quantity, type) {
      this.name = name;
      this.price = price;
      this.image = image;
      this.description = description;
      this.id = id;
      this.quantity = quantity;
      this.type = type;
    }
    
    addToCart () {

        carrito.push(this)
      
    }
  }

 productList.push(
        new Product(
          'pantalla',
          200,
          "images/screen.jpg",
          "Resolución completa de alta definición (1080p): Resolución completa de alta definición (1080p) para excelentes detalles, color y contraste.",
          2,
          1,
          "electronics",
        )
      );
productList.push(
  new Product(
    'pc',
    700,
    "images/pc.jpg",
    "Procesador de CPU Intel Core i3-10100F de 4 núcleos de 3.6 GHz (turbo de 4.3 GHz) | Unidad de estado sólido de 500 GB",
    3,
    1,
    "electronics"
  )
);
productList.push(
  new Product(
    'armario/cama',
    400,
    "images/forniture.jpg",
    "Armario cama muy comodo y elegante",
    1,
    1,
    "furnitures"
  )
);
productList.push(
  new Product(
    'blusa floreada',
    50,
    "images/model.jpg",
    "Zapatillas elegantes",
    4,
    1,
    "clothes"
  )
);
productList.push(
  new Product(
    'juguete',
    10,
    "images/toy.jpg",
    "Juguete para niños",
    5,
    1,
    "toys"
  )
);
productList.push(
  new Product(
    'almohada',
    20,
    "images/cocina.jpg",
    "Cuchilo ligerio de cocina",
    6,
    1,
    "others"
  )
);