const callback = () => {

    function doAssignment(subject, callAlertFinished) {
        console.log(`started my ${subject} assinment.`);
        callAlertFinished(); //callback function
    }

    function alertFinished() {
        console.log('Finished my assignment');
    }

    doAssignment("coding", alertFinished);
}

callback();