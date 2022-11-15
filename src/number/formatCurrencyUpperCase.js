/**
 * @module Number/formatCurrencyUpperCase
 * @description 数值转大写货币方式
 * @param {String|Number} value  金额
 * @return {String} 大写货币字符
 * 
 * @example
 * formatCurrencyUpperCase(12333.514) => 壹万贰仟叁佰叁拾叁元伍角壹分
 */
 function formatCurrencyUpperCase(value) {
  var tmp = +value;
	if(isNaN(tmp))return value;
 
	var MAXIMUM_NUMBER = 99999999999.99;
  if (value > MAXIMUM_NUMBER) {
    throw new Error('当前数值超过设定的最大值：' + MAXIMUM_NUMBER);
  }
	var CN_ZERO = "零";
	var CN_ONE = "壹";
	var CN_TWO = "贰";
	var CN_THREE = "叁";
	var CN_FOUR = "肆";
	var CN_FIVE = "伍";
	var CN_SIX = "陆";
	var CN_SEVEN = "柒";
	var CN_EIGHT = "捌";
	var CN_NINE = "玖";
	var CN_TEN = "拾";
	var CN_HUNDRED = "佰";
	var CN_THOUSAND = "仟";
	var CN_TEN_THOUSAND = "万";
	var CN_HUNDRED_MILLION = "亿";
	var CN_SYMBOL = "";
	var CN_DOLLAR = "元";
	var CN_TEN_CENT = "角";
	var CN_CENT = "分";
	var CN_INTEGER = "整";
	var integral;
	var decimal;
	var outputCharacters;
	var parts;
	var digits, radices, bigRadices, decimals;
	var zeroCount;
	var i, p, d;
	var quotient, modulus;
	value = value.toString();
	if (value == "") {
		return "";
	}
	if (value.match(/[^,.\d]/) != null) {
		return "";
	}
	if ((value)
			.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
		return "";
	}
	value = value.replace(/,/g, "");
	value = value.replace(/^0+/, "");

	if (Number(value) > MAXIMUM_NUMBER) {
		return "";
	}

	parts = value.split(".");
	if (parts.length > 1) {
		integral = parts[0];
		decimal = parts[1];

		decimal = decimal.substr(0, 2);
	} else {
		integral = parts[0];
		decimal = "";
	}

	digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE,
			CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
	radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
	bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
	decimals = new Array(CN_TEN_CENT, CN_CENT);

	outputCharacters = "";

	if (Number(integral) > 0) {
		zeroCount = 0;
		for (i = 0; i < integral.length; i++) {
			p = integral.length - i - 1;
			d = integral.substr(i, 1);
			quotient = p / 4;
			modulus = p % 4;
			if (d == "0") {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					outputCharacters += digits[0];
				}
				zeroCount = 0;
				outputCharacters += digits[Number(d)] + radices[modulus];
			}
			if (modulus == 0 && zeroCount < 4) {
				outputCharacters += bigRadices[quotient];
			}
		}
		outputCharacters += CN_DOLLAR;
	}

	if (decimal != "") {
		for (i = 0; i < decimal.length; i++) {
			d = decimal.substr(i, 1);
			if (d != "0") {
				outputCharacters += digits[Number(d)] + decimals[i];
			}
		}
	}

	if (outputCharacters == "") {
		outputCharacters = CN_ZERO + CN_DOLLAR;
	}
	if (decimal == "") {
		outputCharacters += CN_INTEGER;
	}
	outputCharacters = CN_SYMBOL + outputCharacters;
	return outputCharacters;
}

export default formatCurrencyUpperCase;