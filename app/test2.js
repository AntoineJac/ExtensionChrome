    	var timeout, adUnits, bidsRequested, responses, adserverTargeting, highestCpmBids, pbjs;
    	if (typeof PREBID_TIMEOUT !== "undefined"){ timeout = PREBID_TIMEOUT} else {timeout = "nonPresent"};
    	if (typeof (pbjs && pbjs.adUnits) !== "undefined"){
    	adUnits = pbjs.adUnits;
 		bidsRequested = pbjs._bidsRequested;
        responses = pbjs.getBidResponses();
    	adserverTargeting = pbjs.getAdserverTargeting();
    	highestCpmBids = pbjs.getHighestCpmBids();
    	};

    console.log(responses);
    var DataPrebid = {
    	timeout : "2000",
    	adUnits : adUnits,
    	bidsRequested : bidsRequested,
    	responses : responses,
    	adserverTargeting : adserverTargeting,
    	highestCpmBids : highestCpmBids
    };  
DataPrebid = JSON.parse(JSON.stringify(DataPrebid));
    window.postMessage({ type: "FROM_PAGE", text: DataPrebid }, "*");
console.log("tt");