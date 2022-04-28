function commRequest(url, type, data, callback) {
    $.ajax({
        url: url, //request 보낼 서버의 경로
        type: type,       // 메소드(get, post, put 등)
        data: data,
        success: function (data, status) {
            if (callback) callback(data, status)
        },
        error: function (err, status,errorThrown) {
            if (callback) callback(err, status, errorThrown)
        }
    });
}


// fetch(`${g_v1ctrlr1}?in1=qwerty&fetch=1`)
// 		.then(res => {
// 			window.location.href = res.url;
// 			// res.text().then(function(outRec){
// 			// 	debugger
// 			// 	outRec = JSON.parse(outRec);
// 			// 	movePage(outRec.url);
// 			// });
// 		});
function movePage(url, data) {
    // if (url) {
    //     fetch(
    //         '/test1/pageController?pageUrl=' + url,
    //         {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => {
    //             window.location.href = res.url;
    //         });
    // }
    if(url){
        commRequest('/test1/pageController', "post", {pageUrl: url, data: JSON.stringify(data)}, function(outRec, status){
            if(status == "success"){
                debugger
                outRec = JSON.parse(outRec);
                if(outRec.pageUrl){
                    window.location.href = outRec.pageUrl;
                }
            }
        });
    }
}