// function makePromise(request){
// 	return new Promise(function(resolve, reject) {
// 		request.end(function(err, res) {
// 			var reply = formatReply(err,res);
// 			if (reply.status === false) {
// 				reject(reply.message);
// 			}
// 			else if (reply.status === true) {
// 				resolve(reply.data);
// 			}
// 		});
// 	});
// }

// function formatReply(err, res) {
// 	if (err) {
// 		return {status: false, data: err};
// 	}
// 	else {
// 		var data = res.body;
// 		if (data.error) {
// 			return {status: false, data: Error(data.error.message)};
// 		}
// 		else {
// 			return {status: true, data: data};
// 		}
// 	}
// }

// var requestQueue = [];

// function existInQueue(apiKey) {
// 	for (var request of requestQueue) {
// 		if (request.key === apiKey) {
// 			if ((new Date() - request.startTime) < 5000) {
// 				return true;
// 			}
// 			else {
// 				delete requestQueue.splice(requestQueue.indexOf(request), 1);
// 				return false;
// 			}
// 		}
// 		else {
// 			return false;
// 		}
// 	}
// }

var methods = {
	// request(apiKey, params) {
	// 	if (Api[apiKey] && !existInQueue(apiKey)) {
	// 		requestQueue.push({
	// 			key: apiKey,
	// 			startTime: new Date()
	// 		});
	// 		Api[apiKey](params).then(function (data) {
	// 			//resolve
	// 			appDispatcher.dispatch({
	// 				actionType: constants.API.PAYLOAD,
	// 				params: params,
	// 				apiKey: apiKey,
	// 				data: data
	// 			});
	// 		}, function (error) {
	// 			//reject

	// 		});
	// 	}
	// },
	call(url, options) {
		return new Promise(function (resolve, reject) {
			fetch(url, options)
				.then(req => req.json())
				.then(json => {
					if (json.error) {
						reject(json.error);
					}
					else {
						resolve(json);
					}
				});
		});
	}
};

export default methods;
