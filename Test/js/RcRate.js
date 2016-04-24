function RcRate(setting) {
	this.setting = setting;

    RcRate.prototype.queryOne = function(code) {
        var rcrate_url = this.setting.getRcRateUrl(code);
        return Ajax(stock_url);
    };
    RcRate.prototype.queryAll = function() {
    	var code_all = this.setting.getRcRateAll();
    	var codes = [];
    	for (var i = 0; i < code_all.length; i++) 
    		codes.push(code_all[i].code);
        var rcrate_url = this.setting.getRcRateUrl(codes);
        return Ajax(rcrate_url);
    };
}