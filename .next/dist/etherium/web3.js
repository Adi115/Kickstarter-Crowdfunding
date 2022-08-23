'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //WE ARE IN         browser
    web3 = new _web2.default(_web2.default.givenProvider || "http://localhost:8545");
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/8b26dde229f6446b9d8ad92d0b2fcce8');
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZ2l2ZW5Qcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjtBQUNBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXdFLEFBQ3BFO0FBQ0E7V0FBTSxBQUFJLEFBQUosa0JBQVMsY0FBSyxBQUFMLGlCQUFzQixBQUEvQixBQUFOLEFBQ0g7QUFIRCxPQUlJLEFBQ0E7UUFBTSxXQUFXLElBQUssY0FBSyxBQUFMLFVBQWUsQUFBcEIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTSxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFOLEFBQ0g7QUFDRDtrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovR2l0IFByb2plY3RzL0tpY2tzdGFydGVyLUJsb2NrY2hhaW4ifQ==