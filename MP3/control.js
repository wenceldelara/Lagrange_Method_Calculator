// store points entered
arr_x = [];
arr_y = [];

// Dollar to PHP exchange rate
// LINK: https://tradingeconomics.com/philippines/currency
// Days
arr_x_pd = [1,6,11,12,14,15,19,20,21,22,25,27,28,29,32,34,39,41,42,43];
// Value of dollars
arr_y_pd = [51.52,51.27,52.1,52.02,52.18,52.15,52.46,52.35,52.43,52.33,52.38,52.15,52.37,52.31,52.54,52.39,52.589,52.17,52.38,52.37];

// Add function
function add() {
    try {
        // Retrieve the values form the input field
        x = document.getElementById("value_x").value
        y = document.getElementById("value_y").value
        // if the input field x and y are not values
        if(isNaN(x) | isNaN(y)) {
            window.confirm("There is an error in your input. Please try again.");
            // clear input 
            document.getElementById("value_x").value = "";
            document.getElementById("value_y").value = "";
        }
        // else if it is empty
        else if(x == "" | y == "") {
            window.confirm("Please input points. Try again.");
        }
        // if requirements are satisfied then initialize
        else {
            // Push the values to the array
            arr_x.push(x);
            arr_y.push(y);
            // Display all the values
            display = []
            for(i = 0; i < arr_x.length; i++) {
                display.push("(" + arr_x[i] + "," + arr_y[i] + ")")
            }
            document.getElementById("points").innerHTML = display;
            // clear input 
            document.getElementById("value_x").value = "";
            document.getElementById("value_y").value = "";
        }
    }
    catch (e) {
        window.confirm("There is an error in your input. Please try again.");
    }
}

// Solve functions
function solve() {
    try {
        // Retrieve value of x
        x = document.getElementById("value_for_x").value;
        // if the input field x is not a values
        if (isNaN(x)) {
            window.confirm("There is an error in your input. Please try again.");
            // clear input 
            document.getElementById("value_for_x").value = "";
        }
        // else if it is empty
        else if (x == ""){
            window.confirm("Please input a value for x. Try again.");
        }
        // if requirements are satisfied then initialize
        else {
            // Lagrange interpolation
            store_values = [];
            for (i = 0; i < arr_x.length; i++) {
                for (j = 0; j < arr_y.length; j++) {
                    if (j != i) {
                        store_values.push( ( (x - arr_x[j]) / (arr_x[i] - arr_x[j]) ) );
                    }
                }
            }
            // Group values 
            product_values = [];
            product = 1;
            index_store_values = 0;
            for (i = 0; i < arr_x.length; i++) {
                for (j = 0; j < arr_y.length-1; j++) {
                    product *= store_values[index_store_values];
                    index_store_values ++;
                }
                product_values.push(product);
                product = 1;
            }
            // Sum all the values
            sum = 0;
            for (i = 0; i < product_values.length; i++) {
                sum += product_values[i] * arr_y[i];
            }
            // For Value testing visualization
            // document.getElementById("answer1").innerHTML = store_values;
            // document.getElementById("answer2").innerHTML = product_values;
            document.getElementById("answer").innerHTML = "f(" + x + ") = " + sum;
            // clear input 
            document.getElementById("value_for_x").value = "";
        }
    }
    catch (e) {
        
    }
}
function solve1() {
    try {
        // Retrieve value of x
        x = document.getElementById("value_for_x_pd").value;
        // if the input field x is not a values
        if (isNaN(x)) {
            window.confirm("There is an error in your input. Please try again.");
            // clear input 
            document.getElementById("value_for_x").value = "";
        }
        // else if it is empty
        else if (x == ""){
            window.confirm("Please input a value for x. Try again.");
        }
        // if requirements are satisfied then initialize
        else {
            // Lagrange interpolation
            store_values = [];
            for (i = 0; i < arr_x_pd.length; i++) {
                for (j = 0; j < arr_y_pd.length; j++) {
                    if (j != i) {
                        store_values.push( ( (x - arr_x_pd[j]) / (arr_x_pd[i] - arr_x_pd[j]) ) );
                    }
                }
            }
            // Group values 
            product_values = [];
            product = 1;
            index_store_values = 0;
            for (i = 0; i < arr_x_pd.length; i++) {
                for (j = 0; j < arr_y_pd.length-1; j++) {
                    product *= store_values[index_store_values];
                    index_store_values ++;
                }
                product_values.push(product);
                product = 1;
            }
            // Sum all the values
            sum = 0;
            for (i = 0; i < product_values.length; i++) {
                sum += product_values[i] * arr_y_pd[i];
            } 
            // For Value testing visualization
            // document.getElementById("answer1").innerHTML = store_values;
            // document.getElementById("answer2").innerHTML = arr_x_pd.length;
            document.getElementById("answer_pd").innerHTML = "f(" + x + ") = " + sum;
            // clear input 
            document.getElementById("value_for_x").value = "";
        }
    }
    catch (e) {
        
    }
}

// Clear function
function clear_all() {
    // Clear all values of array
    arr_x = [];
    arr_y = [];
    // clear display
    document.getElementById("points").innerHTML = "";
    document.getElementById("answer").innerHTML = ""; 
    // clear input 
    document.getElementById("value_x").value = "";
    document.getElementById("value_y").value = "";
    document.getElementById("value_for_x").value = "";
    // For Value testing visualization
    // document.getElementById("answer1").innerHTML = ""; 
    // document.getElementById("answer2").innerHTML = ""; 
}
function clear_all1() {
    // clear display
    document.getElementById("answer_pd").innerHTML = ""; 
    // clear input 
    document.getElementById("value_for_x_pd").value = "";
    // For Value testing visualization
    // document.getElementById("answer1").innerHTML = ""; 
    // document.getElementById("answer2").innerHTML = ""; 
}

// Button functions
function myFunction() {
    var x = document.getElementById("DIV_ud");
    var y = document.getElementById("DIV_pd");

    //Reset design
    document.getElementById("bt1").style.backgroundColor = "";
    document.getElementById("bt1").style.color = "";

    document.getElementById("bt1").style.backgroundColor = "";
    document.getElementById("bt1").style.color = "";

    if (x.style.display === "none") {
        y.style.display = "none";
        x.style.display = "block";
        document.getElementById("bt").style.backgroundColor = "#4CAF50";
        document.getElementById("bt").style.color = "white";
    } else {
        x.style.display = "none";
        document.getElementById("bt").style.backgroundColor = "";
        document.getElementById("bt").style.color = "";
    }
}
function myFunction1() {
    var x = document.getElementById("DIV_ud");
    var y = document.getElementById("DIV_pd");

    //Reset design
    document.getElementById("bt").style.backgroundColor = "";
    document.getElementById("bt").style.color = "";

    document.getElementById("bt1").style.backgroundColor = "";
    document.getElementById("bt1").style.color = "";

    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        document.getElementById("bt1").style.backgroundColor = "#4CAF50";
        document.getElementById("bt1").style.color = "white";
    } else {
        y.style.display = "none";
        document.getElementById("bt1").style.backgroundColor = "";
        document.getElementById("bt1").style.color = "";
    }
}