/**
 * Perhatikan juga ketika kita menerapkan getter/setter pada properti class. Kita
perlu mengubah atau membedakan penamaan properti aslinya dengan property
accessor yang kita buat. Berdasarkan code convention yang ada kita perlu
mengubah properti asli class-nya dengan menambahkan underscore di depan
nama propertinya ( _color ). Tanda underscore berfungsi sebagai tanda bahwa
properti _color tidak sebaiknya diakses langsung, namun harus melalui property
accessor (getter/setter).
 */
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this._color = color;
        this.enginesActive = false;
    }
    
    get color() {
        return `Warna mobile ${this._color}`;
    }
    
    set color(value) {
        console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
        this._color = value;
    }
}

const johnCar = new Car("Honda", "Red");
console.log(johnCar.color); // output -> Warna Mobil: Red
johnCar.color = "White"; // Mengubah nilai properti color menjadi white
console.log(johnCar.color); // output -> Warna Mobil: White