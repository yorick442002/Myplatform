function Ajax(url) {
    var result = null;
    try {
        $.ajax({
            type: 'get',
            url: url,
            async: false,
            success: function(_result) {
                var json_result = (typeof _result === 'string') 
                                ? $.parseJSON(_result.replace(/\//g, '').replace(/&nbsp/g, ''))
                                : _result;
                result = json_result;
            },
            error: function(e) {
                console.log(e.message);
            }
        });
        return result;
    } catch (e) {
        console.log(e.message);
        return result;
    }
}
