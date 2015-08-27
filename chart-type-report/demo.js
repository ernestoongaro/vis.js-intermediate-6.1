visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {

    //render report from provided resource
    v("#container").report({
        resource: "/public/Samples/Reports/States",
        error: handleError
    });

    //show error
    function handleError(err) {
        alert(err.message);
    }
    
    console.log(report.data().components;
    
     var component = data.components
                            .filter(function (c) {
                                   return c.name === chartName;
                            })

  window.barChart = function barChart() {   
       report
    .updateComponent("salesChart", { 
          chartType: "Bar"
    })
    .done(function(){
        alert("Chart type changed!");
    })
    .fail(function(err){
        alert(err.message);
    });
    }
    
  window.pieChart = function pieChart() {   
       report
    .updateComponent("salesChart", { 
          chartType: "Pie"
    })
    .done(function(){
        alert("Chart type changed!");
    })
    .fail(function(err){
        alert(err.message);
    });
    }

});