visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
},function (v) {
    var report = v.report({
        //only reports made in adhoc!
        resource: "/public/Samples/Reports/9.CustomerDetailReport",
        container: "#container",
        autoresize: false,
        error: function(e) {
            alert(e);
        }
    });
    
    $("#container").resizable({
        stop: function( event, ui ) {
            report.resize();
        }
    });
});
