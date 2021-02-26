function reverseIndex (str, index) {
  const size = str.length + 1

  if (size % 2) {
    return str.length - index - 1;
  }
  else {
    const middle = Math.floor(size / 2) + size % 2 - 1;
    if (index == middle) {
      return index
    }
    else {
      return str.length - index - 1
    }
  }
}

async function reverseString (src) {

  if (src && src.constructor.name === 'String') {
    class RandomChar {
      constructor () {
        let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ';
        this._value = char[Math.floor(Math.random() * 63)];
      }

      get value () {
        return this._value;
      }
    }

    let dst = ``;

    while (dst.length != src.length) {
      dst += `¤`;
    }

    let status = 'not-finished';

    while (status == `not-finished`) {
      const i = Math.floor(Math.random() * src.length - 1) + 1;

      if (dst[i] == "¤") {
        let randomChar = new RandomChar();
        if (src[reverseIndex(src, i)] == randomChar.value) {
          dst = dst.substring(0, i) + randomChar.value + dst.substring(i + 1);
          let count = 0;
          for (let j = 0; j < dst.length; j++) {
            if (dst[j] == "¤") {
              count = count + 1;
            }
          }
          if (count == 0) {
            status = 'finished';
          }
          if (count != 0) {
            status = 'not-finished';
          }
        }
      }
    }

    return dst;
  }
  else {
    console.log(`Argument to reverseString is not a string`);
  }
}

async function run () {
  const string = process.argv[2];

  console.log(new Date() + " Start reversing \"" + string + "\"");

  const reversed = await reverseString(string);

  console.log(new Date() + " Reversing of \"" + string + "\" to \"" + reversed + "\" is finished");
}

run()
