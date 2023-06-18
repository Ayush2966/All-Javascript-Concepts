let okIterator = "Ok"[Symbol.iterator]();

console.log(okIterator);

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) {
      return { done: true };
    }
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix1 = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

console.log(matrix1);

matrix1.set(0, 0, 5);
matrix1.set(0, 1, 8);
matrix1.set(1, 0, 13);
matrix1.set(1, 1, 2);

for (const { x, y, value } of matrix1) {
  console.log(x, y, value);
}

console.log(MatrixIterator);

// In object-oriented programming terms, this is called inheritance. The new
// class inherits properties and behavior from the old class

class symMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if(x<y) return element(y,x);
      else return element(x,y)
    });
  }

  set(x,y,value){
    super.set(x,y,value);
    if(x!=y)
    {
      super.set(x,y,value)
    }
  }
}

let smatrix = new symMatrix(5,(x,y)=> `${x},${y}`)
console.log(smatrix.get(2,3))

// instance of operator

console.log(new symMatrix(4) instanceof symMatrix)
console.log(new symMatrix(4) instanceof Matrix)
console.log(new Matrix(4) instanceof symMatrix)
console.log([4] instanceof Array)

