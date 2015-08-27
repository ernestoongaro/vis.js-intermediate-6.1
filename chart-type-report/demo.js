visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {
    var report = v.report({
        resource: "/public/Samples/Reports/States",
        error: handleError,
        container: "#container"
    });

    //show error
    function handleError(err) {
        alert(err.message);
    };


    var component = data.components.filter(function (c) {
        return c.name === chartName;
    });

    window.barChart = function barChart() {
        report.updateComponent("salesChart", {
            chartType: "Bar"
        })
            .done(function () {
            alert("Chart type changed!");
        })
            .fail(function (err) {
            alert(err.message);
        });
    }

    window.pieChart = function pieChart() {
        report.updateComponent("salesChart", {
            chartType: "Pie"
        })
            .done(function () {
            alert("Chart type changed!");
        })
            .fail(function (err) {
            alert(err.message);
        });
    }
    console.log(report.data().components);

});