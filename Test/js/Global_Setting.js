function Global_Setting() {
	var ECRATE_ACCESS_KEY = 'db3c4373d10181e65aad4b6bda8bb14b';
	var ECRTAE_API_URL = 'http://apilayer.net/api/live?access_key=' + ECRATE_ACCESS_KEY + '&format=1&currencies=';
	var STOCK_API_URL = 'http://finance.google.com/finance/info?client=ig&q=TPE:';
	var EcRate_arr = [
		{ code: 'TWD', name: '台幣'},
		{ code: 'USD', name: '美金'},
		{ code: 'GBP', name: '英鎊'},
		{ code: 'HKD', name: '港幣'},
		{ code: 'AUD', name: '澳幣'},
		{ code: 'JPY', name: '日圓'},
		{ code: 'THB', name: '泰銖'},
		{ code: 'EUR', name: '歐元'},
		{ code: 'KRW', name: '韓元'},
		{ code: 'CNY', name: '人民幣'},
		{ code: 'ZAR', name: '南非幣'}
	]
    var Stock_arr = [
        { code: '0050', name: '台灣50' },
        { code: '0056', name: '高股息' },
        { code: '2412', name: '中華電' },
        { code: '2330', name: '台積電' }
    ];

    Global_Setting.prototype.getStockUrl = function(code) {
        return STOCK_API_URL + (code || '');
    };

    Global_Setting.prototype.getStockAll = function() {
        return Stock_arr;
    };

    Global_Setting.prototype.getRcRateUrl = function(codes) {
    	var code_arr = codes || [];
    	var qry_code = [];
    	for (var i = code_arr.length - 1; i >= 0; i--) {
    		if (code_arr.hasOwnProperty('code')) 
    			qry_code.push(code_arr[i]['code']);
    		else
    			qry_code.push(code_arr[i]);
    	}
        return ECRTAE_API_URL + qry_code.toString();
    };

    Global_Setting.prototype.getRcRateAll = function() {
        return EcRate_arr;
    };

}
