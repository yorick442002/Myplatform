function Stock(setting) {
    this.setting = setting;

    Stock.prototype.query = function(code) {
        var stock_url = this.setting.getStockUrl(code);
        return Ajax(stock_url);
    };

}
