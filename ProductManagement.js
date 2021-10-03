class ProductManagement {
    products;

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.unshift(product);
    }

    removeProduct(index) {
        this.products.splice(index,1);
    }

    updateProduct(index, newProduct) {
        this.products[index] = newProduct;
    }

    display(dis) {
        document.getElementById(dis).innerHTML = '';
        for (let i = 0; i < this.products.length; i++) {
            this.products[i].index = i;
            document.getElementById(dis).innerHTML += this.products[i].getHml();
        }
    }
}