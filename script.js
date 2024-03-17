/* Fan */

document.getElementsByClassName('fan-btn')[0].addEventListener("click", () => {
    let fanId = document.getElementsByClassName('fan-txt1')[0].value;
    let fanValue = document.getElementsByClassName('fan-txt3')[0].value
    const body = {
        "teamid": fanId,
        "device": "fan",
        "value": parseInt(fanValue)
    }
    const options = {
        "mode": "no-cors",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json", 
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'https://kodessphere-api.vercel.app/',
            'Access-Control-Allow-Methods':'GET, POST',
            'Access-Control-Allow-Headers':'application/json',
        },
        "body": body,
    }
    
    const pr = fetch("https://kodessphere-api.vercel.app/devices/", options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP STATUSCODE: ${response.status}: ${response.statusText}`);
            } 
            else {
                return response.json();
            }
        })
        .then((data) => {
            alert(response["message"]);
        })
        .catch((error) => {
            console.error(error);
        });
}, false);


/* Bulb */

document.getElementsByClassName('bulb-btn')[0].addEventListener("click", () => {
    let bulbId = document.getElementsByClassName('bulb-txt1')[0].value;
    let bulbValue = document.getElementsByClassName('bulb-txt3')[0].value
    const body = {
        "teamid": bulbId,
        "device": "bulb",
        "value": parseInt(bulbValue)
    }
    const options = {
        "mode": "no-cors",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json", 
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'https://kodessphere-api.vercel.app/',
            'Access-Control-Allow-Methods':'GET, POST',
            'Access-Control-Allow-Headers':'application/json',
        },
        "body": body,
    }
    
    const pr = fetch("https://kodessphere-api.vercel.app/devices/", options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP STATUSCODE: ${response.status}: ${response.statusText}`);
            } 
            else {
                return response.json();
            }
        })
        .then((data) => {
            alert(response["message"]);
        })
        .catch((error) => {
            console.error(error);
        });
}, false);

/* LED */

document.getElementsByClassName('led-btn')[0].addEventListener("click", () => {
    let ledID = document.getElementsByClassName('led-txt1')[0].value;
    let ledValue = document.getElementsByClassName('led-txt3')[0].value;
    const body = {
        "teamid": ledID,
        "device": "led",
        "value": ledValue,
    }
    const options = {
        "mode": "no-cors",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json", 
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'https://kodessphere-api.vercel.app/',
            'Access-Control-Allow-Methods':'GET, POST',
            'Access-Control-Allow-Headers':'application/json',
        },
        "body": body,
    }
    const pr = fetch("https://kodessphere-api.vercel.app/devices/", options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP STATUSCODE: ${response.status}: ${response.statusText}`);
            } 
            else {
                return response.json();
            }
        })
        .then((data) => {
            alert(response["message"]);
        })
        .catch((error) => {
            console.error(error);
        });
}, false);

/* A.C. */

document.getElementsByClassName('ac-btn')[0].addEventListener("click", () => {
    let acId = document.getElementsByClassName('ac-txt1')[0].value;
    let acValue = document.getElementsByClassName('ac-txt3')[0].value;
    const body = {
        "teamid": acId,
        "device": "ac",
        "value": acValue,
    }
    const options = {
        "mode": "no-cors",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json", 
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'https://kodessphere-api.vercel.app/',
            'Access-Control-Allow-Methods':'GET, POST',
            'Access-Control-Allow-Headers':'application/json',
        },
        "body": body,
    }
    const pr = fetch("https://kodessphere-api.vercel.app/devices/", options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP STATUSCODE: ${response.status}: ${response.statusText}`);
            } 
            else {
                return response.json();
            }
        })
        .then((data) => {
            alert(response["message"]);
        })
        .catch((error) => {
            console.error(error);
        });
}, false);