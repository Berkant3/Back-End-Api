const fs = require("fs");

const replaceTemplate = (cardTemplate, data) => {
  let output = cardTemplate.replace(/{%PRODUCTNAME%}/g, data.productName);
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%ID%}/g, data.id);
  output = output.replace(/{%FROM%}/g, data.from);
  output = output.replace(/{%DESCRIPTION%}/g, data.description);
  output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);

  


  if (data.organic === false) {
    output = output.replace('{%NOT_ORGANIC%}', 'not-organic');
  }

  return output;
};

module.exports = replaceTemplate;
