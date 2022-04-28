/**
 * 
 */
let g_v1ctrlr1 = "/test1/v1ctrlr1";
function onload() {
	$('#btn').on('click', function () {
		let url = new URL(`http://localhost:8090/${g_v1ctrlr1}`);
		let params = {
			in: "qwerty",
			fetch: 1,
			data: JSON.stringify({
				data1: "data123"
			})
		};
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
		fetch(url).then( res => {
			debugger
		});
		
		// fetch(
		// 	// `${g_v1ctrlr1}?in1=qwerty&fetch=1&data={data:data123}`
		// 	`${g_v1ctrlr1}?in=qwerty&fetch=1&${new URLSearchParams({data: {data1: "data123"}})}`
		// 	// g_v1ctrlr1,
		// 	// {
		// 	// 	method: "post",
		// 	// 	headers: {
		// 	// 		"Content-type": 'application/json',
		// 	// 	},
		// 	// 	body: JSON.stringify({
		// 	// 		in1: "qwerty",
		// 	// 		fetch: 1,
		// 	// 		data: {data1: "data123"}
		// 	// 	})
		// 	// }
		// )
		// 	.then(res => {
		// 		debugger
		// 		console.log('fetch res', res);
		// 		// window.location.href = res.url;


		// 		// res.text().then(function(outRec){
		// 		// 	debugger
		// 		// 	outRec = JSON.parse(outRec);
		// 		// 	movePage(outRec.url);
		// 		// });
		// 	});
	});

	$('#btn2').on('click', function () {
		commRequest(
			g_v1ctrlr1,
			'post',
			{
			 	in1: "zxcv",
			 	ajax: 1,
			 	data: JSON.stringify({data1: "AAA", data2: "BBB", data3: ["item1", "item2", "item3"], data4: {subData1: "aaa", subData2: "bbb", subData3: ["item1", "item2", "item3"]}}),
			},
			function (outRec, status) {
			if (status == 'success') {
				console.log('ajax success');
				debugger
				outRec = JSON.parse(outRec);
				movePage(outRec.pageUrl, outRec.data);
			}
			else {
				console.log('ajax fail');
				console.log(outRec);
				debugger
			}
		});
	});

	$('#form2').submit(function (e) {
		e.preventDefault();

		commRequest(
			$(this).attr("action"),
			$(this).attr("method"),
			{ in1: "9876", form2: "1" },
			function (outRec, status, errorThrown) {
				if (status == "success") {
					debugger
					console.log("form2 ajax success");
					outRec = JSON.parse(outRec);
					movePage(outRec.url);
				}
				else {
					console.log('form2 ajax fail');
					console.log(outRec);
					console.log('error code', outRec.status);
					debugger
				}
			})
	});
}


