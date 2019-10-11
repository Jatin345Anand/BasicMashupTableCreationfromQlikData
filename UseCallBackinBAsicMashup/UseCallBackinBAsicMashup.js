/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	function JatinMarutiCallBack(reply, app){
	console.log(reply);
	console.log(app);
	console.log('Layouts is');
	console.log(reply.layout);
	console.log(reply.qHyperCube.qDataPages[0].qMatrix[0][0].qText);
	let A1  = reply.qHyperCube.qDataPages[0].qMatrix[0];
	let A2  = reply.qHyperCube.qDataPages[0].qMatrix[1];
	let A = reply.qHyperCube.qDataPages[0].qMatrix;
	for(let i in A){
	console.log(i,A[i]);
	console.log(i,A[i][0].qText,A[i][0].qNum);
	console.log(i,A[i][1].qText,A[i][1].qNum);
	  var td1 = $('<td/>').append(parseInt(i)+1);
	var td2 = $('<td/>').append(A[i][0].qText);
	var td3 = $('<td/>').append(A[i][1].qText);
	
    $('#snd').append(td1).append('<br />');
	$("#countryd").append(td2).append('<br />');
	$('#spendd').append(td3).append('<br />');
	}
	console.log(A);
	console.log(A1);
	console.log(A2);
	$('.kpi-object').html(reply.qHyperCube.qDataPages[0].qMatrix[0][0].qText);
	for(var i=1;i<=10;i++){
  
	
	}
	}

	//open apps -- inserted here --
	var app = qlik.openApp('Procurement (1).qvf', config);

	//get objects -- inserted here --
	//create cubes and lists -- inserted here --
	app.createCube({
	"qInitialDataFetch": [
		{
			"qHeight": 20,
			"qWidth": 2
		}
	],
	"qDimensions": [
		{
			"qLabel": "Suplier Country",
			"qLibraryId": "Fpy",
			"qNullSuppression": true,
			"qOtherTotalSpec": {
				"qOtherMode": "OTHER_OFF",
				"qSuppressOther": true,
				"qOtherSortMode": "OTHER_SORT_DESCENDING",
				"qOtherCounted": {
					"qv": "5"
				},
				"qOtherLimitMode": "OTHER_GE_LIMIT"
			}
		}
	],
	"qMeasures": [
		{
			"qLabel": "Total Spend",
			"qLibraryId": "ryeGms",
			"qSortBy": {
				"qSortByState": 0,
				"qSortByFrequency": 0,
				"qSortByNumeric": 0,
				"qSortByAscii": 1,
				"qSortByLoadOrder": 0,
				"qSortByExpression": 0,
				"qExpression": {
					"qv": " "
				}
			}
		}
	],
	"qSuppressZero": true,
	"qSuppressMissing": true,
	"qMode": "S",
	"qInterColumnSortOrder": [],
	"qStateName": "$"
	},JatinMarutiCallBack);
} );