function removePx(str) {
  return str.replace('px', '');
}

function getElementWidth(content, padding, border) {
  return (
    Number(removePx(content)) +
    2 * Number(removePx(padding)) +
    2 * Number(removePx(border))
  );
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
