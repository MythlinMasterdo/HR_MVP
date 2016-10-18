var zuckIncomeYearly = 18000000000;
var zuckIncomeMonthly = 1500000000;
var zuckIncomeDaily = 49315068;
var zuckIncomeHourly = 2054794;
var zuckIncomeInMinutes = 34246;
var zuckIncomeInSeconds = 570;

var youVsZuckerberg = function(userIncome) {
  if(userIncome >= zuckIncomeYearly) {
    return "You must be apart of the Rothschild's family, or be a king";
  } else if(userIncome >= zuckIncomeMonthly) {
    var monthlyIncomeAnswer = userIncome/zuckIncomeMonthly;
     return Math.round(monthlyIncomeAnswer * 10)/10 + saveToScope('months');
  } else if(userIncome >= zuckIncomeDaily) {
    var dailyIncomeAnswer = userIncome/zuckIncomeDaily;
    return Math.round(dailyIncomeAnswer * 10)/10 + saveToScope('days');
  } else if(userIncome >= zuckIncomeHourly) {
    var hourlyIncomeAnswer = userIncome/zuckIncomeHourly;
    return Math.round(hourlyIncomeAnswer * 10)/10 + saveToScope('hours');
  } else if(userIncome >= zuckIncomeInMinutes){
    var incomeInMinutesAnswer = userIncome/zuckIncomeInMinutes;
    return Math.round(incomeInMinutesAnswer * 10)/10 + saveToScope('minutes');
  } else if(userIncome >= zuckIncomeInSeconds ) {
    var incomeInSecondsAnswer = userIncome/zuckIncomeInSeconds;
    return Math.round(incomeInSecondsAnswer * 10)/10 + saveToScope('seconds');
  } else {
    return "Zuckerberg earned your income so fast its not even calculable";
  }
};

var saveToScope = function(value) {
  window.test = ' ' + value;
  return window.test;
};

var perspectiveHelperYearly = function(userIncome) {
  if(userIncome >= zuckIncomeDaily) {
    return "You buying a Bugatti Chiron is the equivalent of Mark spending $972,000,000";
  } else if(userIncome >= zuckIncomeHourly) {
    return "You buying a Ferrari 488 is the equivalent of Mark spending $2,142,000,000";
  } else {
    return "You buying a Mercedes S63 AMG is the equivalent of Mark spending $2,590,200,000";
  }
};

var perspectiveHelperMonthly = function(userIncome) {
  if(userIncome >= 1000000) {
    return "You buying a MacBook is the equivalent of Mark spending $23,400,000";
  } else if(userIncome >= 750000) {
    return "You buying a MacBook is the equivalent of Mark spending $30,600,000";
  } else if(userIncome >= 500000) {
    return "You buying a MacBook is the equivalent of Mark spending $46,800,000";
  } else if(userIncome >= 400000) {
    return "You buying a MacBook is the equivalent of Mark spending $57,600,000";
  } else if(userIncome >= 350000) {
    return "You buying a MacBook is the equivalent of Mark spending $66,600,000";
  } else if(userIncome >= 300000) {
    return "You buying a iPad is the equivalent of Mark spending $28,800,000";
  } else if(userIncome >= 250000) {
    return "You buying a iPad is the equivalent of Mark spending $36,000,000";
  } else if(userIncome >= 200000) {
    return "You buying a iPad is the equivalent of Mark spending $45,000,000";
  } else if(userIncome >= 175000) {
    return "You buying a iPad Mini is the equivalent of Mark spending $36,000,000";
  } else if(userIncome >= 150000) {
    return "You buying a iPad Mini is the equivalent of Mark spending $41,400,000";
  } else if(userIncome >= 100000) {
    return "You buying two tickets to Disneyland is the equivalent of Mark spending $36,000,000";
  } else if(userIncome >= 75000) {
    return "You buying two tickets to Disneyland is the equivalent of Mark spending $46,800,000";
  } else if(userIncome >= 50000) {
    return "You buying gas for a large SUV is the equivalent of Mark spending $25,200,000";
  } else if(userIncome >= 45000) {
    return "You buying gas for a large SUV is the equivalent of Mark spending $28,800,000";
  } else if(userIncome >= 40000) {
    return "You buying gas for a large SUV is the equivalent of Mark spending $32,400,000";
  } else if(userIncome >= 35000) {
    return "You buying gas for a large SUV is the equivalent of Mark spending $36,000,000";
  } else if(userIncome >= 30000) {
    return "You going to the movies is the equivalent of Mark spending $23,400,000";
  } else if(userIncome >= 25000) {
    return "You buying a cup of coffee is the equivalent of Mark spending $3,419,999";
  } else if(userIncome >= 20000) {
    return "You buying a cup of coffee is the equivalent of Mark spending $4,140,000";
  } else if(userIncome >= 15000) {
    return "You buying a cup of coffee is the equivalent of Mark spending $5,580,000";
  } else if(userIncome >= 10000) {
    return "You buying a cup of coffee is the equivalent of Mark spending $8,460,000";
  } else if(userIncome >= 5000) {
    return "You buying a cup of coffee is the equivalent of Mark spending $17,100,000";
  } else {
    return "You cant even fathom the difference";
  }
};

var perspective = function(userIncome) {
  if(userIncome >= zuckIncomeYearly) {
    return "We have nothing to put in perspective for you, you win.";
  } else if(userIncome >= zuckIncomeMonthly) {
    return "We still have nothing to put in perspective for you.";
  } else if(userIncome >= zuckIncomeDaily) {
    return perspectiveHelperYearly(userIncome);
  } else if(userIncome >= zuckIncomeHourly) {
    return perspectiveHelperYearly(userIncome);
  } else if(userIncome >= zuckIncomeInMinutes) {
    return perspectiveHelperMonthly(userIncome);
  } else {
    return perspectiveHelperMonthly(userIncome);
  }
};

var forYou = function(userIncome) {
  var timeInYears = Math.round(zuckIncomeYearly/userIncome);
  return 'it would take you ' + timeInYears + ' years to earn the same';
};

var counter = 0;
var zuckPayTimer = setInterval(function() {
    return counter+= 1;
  }, 106);
