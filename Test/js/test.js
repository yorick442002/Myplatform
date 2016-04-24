$(function() {
	$('table:eq(0) input').on('click',queryStock);
	$('table:eq(1) input').on('click',queryRcRate);
});

$(document).ready(function() {
  FB.init({ appId: 260429710963851,
    status: true,
    cookie: true,
    xfbml: true,
    oauth: true
  });
  $("#FBLogin").click(function () {
    FB.login(function (response) {
        // 登入之後執行的語法
    }, { scope: "email" });
	});
});

function queryStock() {
	var $tbody = $(this).closest('table').find('tbody');
	$tbody.html('');

	var setting = new Global_Setting();
	var stock = new Stock(setting);
	var stock_code = setting.getStockAll();

	for (var i = 0; i < stock_code.length; i++) {
		var result = stock.query(stock_code[i].code);
		$tbody.append(
			$('<tr>').append(
				'<td>' + stock_code[i].name + '</td>' + 
				'<td>' + stock_code[i].code + '</td>' + 
				'<td>' + result[0].l_cur + '</td>'
			)
		);
	}
}

function queryRcRate() {
	var $tbody = $(this).closest('table').find('tbody');
	$tbody.html('');

	var setting = new Global_Setting();
	var rcrate = new RcRate(setting);
	var result = rcrate.queryAll();
	var twd = result.quotes['USDTWD'];
	var rc_arr = setting.getRcRateAll();

	for (var i = 0; i < rc_arr.length; i++) {
		var rate = result.quotes['USDTWD'] / (result.quotes['USD' + rc_arr[i].code]);
		$tbody.append(
			$('<tr>').append(
				'<td>' + rc_arr[i].name + '</td>' + 
				'<td>' + rc_arr[i].code + '</td>' + 
				'<td>' + rate + '</td>'
			)
		);
	}
}