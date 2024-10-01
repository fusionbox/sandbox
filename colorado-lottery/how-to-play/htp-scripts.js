if ($("body").hasClass("simulator-styles")) {

  // script in Widgy page should add class "simulator-styles" to body tag
  // var currentgame (powerball, megamillions, luckyforlife, lotto, cash5) should be set before invoking these scripts

  $(".simulator_header").sticky({topSpacing:0});

  var simulator_testing = false; // don't hide playslip and receipt stuff
  var lang = (typeof currentlang !== 'undefined' ? currentlang : "en");

  /* Individual Game Settings */
  var game_options = ['powerball','megamillions','luckyforlife','lotto','cash5','pick3'];
  game_options['powerball'] = {
    'numbers':69,
    'extra_numbers':26,
    'extra_name':"Powerball",
    'max_numbers':5,
    'base_ticket_price':2,
    'max_prize':20000000,
    'plus_prize':10000000,
    'plus_price':1,
    'plus_name':"Double Play",
    'multiplier_price':1,
    'multiplier':[2,3,4,5,10],
    'multiplier_on_ticket':false,
    'draw_days':[1,3,6] // Sun [Mon] Tue [Wed] Thu Fri [Sat]
  };
  game_options['megamillions'] = {
    'numbers':70,
    'extra_numbers':25,
    'extra_name':"Megaball",
    'max_numbers':5,
    'base_ticket_price':2,
    'max_prize':20000000,
    'plus_prize':0,
    'plus_price':0,
    'plus_name':"",
    'multiplier_price':1,
    'multiplier':[2,3,4,5],
    'multiplier_on_ticket':false,
    'draw_days':[2,5] // Sun Mon [Tue] Wed Thu [Fri] Sat
  };
  game_options['luckyforlife'] = {
    'numbers':48,
    'extra_numbers':18,
    'extra_name':"Lucky Ball",
    'max_numbers':5,
    'base_ticket_price':2,
    'max_prize': 1000,
    'plus_prize':0,
    'plus_price':0,
    'plus_name':"",
    'multiplier_price':0,
    'multiplier':[],
    'multiplier_on_ticket':false,
    'draw_days':[0,1,2,3,4,5,6] // [Sun] [Mon] [Tue] [Wed] [Thu] [Fri] [Sat]
  };
  game_options['lotto'] = {
    'numbers':42,
    'extra_numbers':0,
    'extra_name':"",
    'max_numbers':6,
    'base_ticket_price':2,
    'max_prize':2000000,
    'plus_prize':250000,
    'plus_price':1,
    'plus_name':"Plus",
    'multiplier_price':0,
    'multiplier':[2,3,4,5],
    'multiplier_on_ticket':true,
    'draw_days':[3,6] // Sun Mon Tue [Wed] Thu Fri [Sat]
  };
  game_options['cash5'] = {
    'numbers':32,
    'extra_numbers':0,
    'extra_name':"",
    'max_numbers':5,
    'base_ticket_price':1,
    'max_prize':20000,
    'plus_prize':500, /* EZ Match */
    'plus_price':1, /* EZ Match */
    'plus_name':"EZ Match",
    'multiplier_price':0,
    'multiplier':[],
    'multiplier_on_ticket':false,
    'draw_days':[0,1,2,3,4,5,6] // [Sun] [Mon] [Tue] [Wed] [Thu] [Fri] [Sat]
  };
  game_options['pick3'] = {
    'numbers':10,
    'extra_numbers':0,
    'extra_name':"",
    'max_numbers':3,
    'base_ticket_price':0.5,
    'max_prize':2500,
    'plus_prize':0,
    'plus_price':0,
    'plus_name':'',
    'multiplier_price':0,
    'multiplier':[],
    'multiplier_on_ticket':false,
    'draw_days':[0,1,2,3,4,5,6] // [Sun] [Mon] [Tue] [Wed] [Thu] [Fri] [Sat]
  };

  /* Set Game Prizes & Prize Codes */


  var game_winnings = ['powerball','megamillions','luckyforlife','lotto','cash5'];
  var plus_game_winnings = ['powerball','megamillions','luckyforlife','lotto','cash5'];
  game_winnings['powerball'] = {
    '00':0,
    '01':4,
    '10':0,
    '11':4,
    '20':0,
    '21':7,
    '30':7,
    '31':100,
    '40':100,
    '41':50000,
    '50':1000000, /* Multiplier Max = 2000000 */
    '51':game_options['powerball']['max_prize'] /* No Multiplier */
  };
  game_winnings['megamillions'] = {
    '00':0,
    '01':2,
    '10':0,
    '11':4,
    '20':0,
    '21':10,
    '30':10,
    '31':200,
    '40':500,
    '41':10000,
    '50':1000000,
    '51':game_options['megamillions']['max_prize'] /* No Multiplier */
  };
  game_winnings['luckyforlife'] = {
    '00':0,
    '01':4,
    '10':0,
    '11':6,
    '20':3,
    '21':25,
    '30':20,
    '31':150,
    '40':200,
    '41':5000,
    '50':"25,000 a Year for Life",
    '51':game_options['luckyforlife']['max_prize']
  };
  game_winnings['lotto'] = {
    '00':0,
    '10':0,
    '20':0,
    '30':3,
    '40':25,
    '50':250,
    '60':game_options['lotto']['max_prize'] /* No Multiplier */
  };
  game_winnings['cash5'] = {
    '00':0,
    '10':0,
    '20':1,
    '30':10,
    '40':200,
    '50':game_options['cash5']['max_prize']
  };

  game_winnings['powerballplus'] = {
    '00':0,
    '01':7,
    '10':0,
    '11':10,
    '20':0,
    '21':20,
    '30':20,
    '31':500,
    '40':500,
    '41':50000,
    '50':500000,
    '51':game_options['powerball']['plus_prize']
  };
  game_winnings['lottoplus'] = {
    '00':0,
    '10':0,
    '20':0,
    '30':4,
    '40':30,
    '50':300,
    '60':game_options['lotto']['plus_prize'] /* No Multiplier */
  };

  game_winnings['pick3'] = {
    '050exact':250,
    '100exact':500,
    '200exact':1000,
    '250exact':1250,
    '500exact':2500,
    '050any':40,
    '100any':80,
    '200any':160,
    '250any':200,
    '500any':400,
    '050anydouble':80,
    '100anydouble':160,
    '200anydouble':320,
    '250anydouble':400,
    '500anydouble':800,
    '050front':30,
    '100front':60,
    '200front':120,
    '500front':300,
    '050back':30,
    '100back':60,
    '200back':120,
    '500back':300
  };

  /* Set Active Game Values */
  var game = game_options[currentgame];
  var number_count = game['numbers'];
  var extra_numbers = game['extra_numbers'];
  var extra_name = game['extra_name'];
  var advance_play_max = $("#advance_draws").attr("max");
  var max_numbers = game['max_numbers'];
  var base_ticket_price = game['base_ticket_price'];
  var max_prize = game['max_prize'];
  var current_game_jackpot;
  var plus_price = game['plus_price'];
  var plus_prize = game['plus_prize'];
  var plus_name = game['plus_name'];
  var multiplier_price = game['multiplier_price'];
  var multiplier = game['multiplier'];
  var multiplier_on_ticket = game['multiplier_on_ticket'];
  var ticket_multiplier = 0;
  var ezmatch_prizes = [2,3,4,5,10,15,20,50,100,250,500];
  var ezmatch_drawn_prize = 0;
  var pick3_both_modifier = false;
  var pick3_double_modifier = '';

  /* All Games */
  var advance_play_modifier; /* Draw count X base price */
  var plus_modifier; /* plus, ezmatch */
  var multiplier_modifier; /* powerball, megamillions || lottery = automatic */
  var ezmatch_modifier; /* cash5 */
  var current_number_count; /* selecting numbers from board */

  /* Get Current Jackpots */
  async function loadCurrentJackpots() {
    const response = await fetch('https://api.coloradolottery.com/v1/current-jackpots/?format=json');
    const current_jackpots = await response.json();
    var current_jackpot = current_jackpots[currentgame]['next_jackpot_estimate']
    var formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

    if (current_jackpot > 0 || current_jackpot != null) {
      max_prize = current_jackpot;
      current_game_jackpot = current_jackpot;
      let jackpot_label = (lang == "en" ? "Current Jackpot" : "Premio mayor actual");
      if (currentgame == "cash5" || currentgame == "pick3") {
        jackpot_label = (lang == "en" ? "Top Prize" : "Primer premio");
      }
      if (currentgame == "luckyforlife") {
        jackpot_label = (lang == "en" ? "Jackpot" : "Premio mayor");
      }
      $("#prize_label").text(jackpot_label);
      updatePrize(false);
    }
  }
  loadCurrentJackpots();

  /* Configure Game Board */
  configureGame();
  function configureGame() {
    advance_play_modifier = 0;
    plus_modifier = false;
    pick3_both_modifier = false;
    pick3_double_modifier = '';
    multiplier_modifier = (currentgame == "lotto") ? true : false;
    ezmatch_modifier = false;
    current_number_count = 0;

    $(".playslip").removeClass("lockdown").hide();
    $(".ezmatch_numbers").hide();
    $(".conditional").hide();
    $(".field_group_advance_time,.field_group_draw_time").hide();
    $(".ticket_draw_count_plurality").hide();
    $("#plus_prize_inner").hide();

    if (!simulator_testing) {
      $(".field_advance").hide();
      $(".field_multiplier").hide();
      $(".field_plus").hide();
      $(".ticket").hide();
    }

    if (extra_numbers == 0 && !simulator_testing) {
      $(".field_extra_qp").hide();
      $(".number_matrix_wrapper_extra").hide();
      $(".ticket_extra_number").hide();
      $(".ticket_extra_label").hide();
    }

    $(".ball_drop_wrapper").removeClass("drawing");
    $("#ball_drops, #ball_drops_plus").hide();

    /* Create step counter */
    $("div.step").each(function(index){
      $("#step_counters").append("<span class='step_marker'>" + parseInt(index + 1) + "</span>");
    });

    $(".ticket_plus").text("NO");
    if (!multiplier_on_ticket) { $(".ticket_multiplier").text("NO"); }

    updateTicketPrice(false);
    updatePrize(false);
    updateDraws(false);
  }

  /* Toggle Advance Play */
  $("#advance").change(function(e){
    if (this.checked) {
      $("#advance_draws").prop( "disabled", false );
      $(".field_advance_draws").show().removeClass("fade_me_bro");
      advance_play_modifier = $("#advance_draws").get(0).value;
      updateTicketPrice(true);
      updatePrize(false);
      updateDraws(true);
    } else {
      $("#advance_draws").val( 2 );
      $("#advance_draws").prop( "disabled", true );
      $(".field_advance_draws").hide().addClass("fade_me_bro");
      advance_play_modifier = 0;
      updateTicketPrice(true);
      updatePrize(false);
      updateDraws(true);
    }
  });

  /* Advance Play # of Draws */
  $(".field_advance_draws").hide();

  $(".field_advance_draws .modal-cancel").on("click", function(e){
    /* Close Modal, Uncheck box */
    e.preventDefault();
    $("#advance").prop( "checked", false );
    $("#advance_draws").prop( "disabled", true );
    $("#advance_draws").val( 2 );
    $(".field_advance_draws").hide();
    /* Update ticket price and prize amount */
    advance_play_modifier = 0;
    updateTicketPrice(true);
    updatePrize(false);
    updateDraws(true);
  });

  $(".field_advance_draws .modal-save").on("click", function(e){
    /* Close Modal */
    e.preventDefault();
    $(".field_advance_draws").hide();
  });

  $(".field_advance_draws .advance-minus").on("click", function(e){
    e.preventDefault();
    if ( $("#advance_draws").get(0).value > 2) {
      $("#advance_draws").get(0).value--;
      advance_play_modifier = $("#advance_draws").get(0).value;
      if (advance_play_modifier < advance_play_max) {
        $(".field_advance_draws .advance-plus").removeClass("range_maxed");
      }
      updateTicketPrice(true);
      updatePrize(false);
      updateDraws(true);
    }
  });

  $(".field_advance_draws .advance-plus").on("click", function(e){
    e.preventDefault();
    $("#advance_draws").get(0).value++;
      advance_play_modifier = $("#advance_draws").get(0).value;
      if (advance_play_modifier == advance_play_max) {
        $(".field_advance_draws .advance-plus").addClass("range_maxed");
      }
      updateTicketPrice(true);
      updatePrize(false);
      updateDraws(true);
  });

  $("#advance_draws").change(function(){
    advance_play_modifier = $("#advance_draws").get(0).value;
    updateTicketPrice(true);
    updatePrize(false);
    updateDraws(true);
  });

  /* Pick 3: Draw Times (Midday/Evening/Both) */
  $(".field_draw_time input").change(function(e){
    $(".field_advance_draws .advance-plus").removeClass("range_maxed");
    $("#advance_draws").attr("max",28);
    advance_play_max = 28;
    temp_price_flag = false;

    /* If we're switch to or from "Both", set a flag to update the ticket price */
    if (!pick3_both_modifier && $(this).attr("value") == "both" || pick3_both_modifier && $(this).attr("value") != "both") {
      temp_price_flag = true;
    }

    if ($(this).attr("value") == "both") {
      pick3_both_modifier = true;
    } else {
      pick3_both_modifier = false;
    }

    if (temp_price_flag) {
      updateTicketPrice(true);
    }

    $("div.actions").removeClass("hol_up");
  });

  /* Pick 3: Bet Type */
  var fiddy_cent_flag = false;
  var front_flag = false;
  var back_flag = false;

  $(".field_bet_type input").change(function(e){

    max_numbers = 3;
    fiddy_cent_flag = false;
    front_flag = false;
    back_flag = false;

    /* Front or Back Pair Special Rules */
    if ( !$('#number_qp').prop("checked") ) {
      /* Enable the number columns if unchecked */

      console.log($('.field_number_left input:checked').length);

      if ( $('.field_number_left input:checked').length > 0 ) {
        $('.field_number_left input:not(:checked)').prop('disabled',true);
      } else {
        $('.field_number_left input').prop('disabled',false);
      }

      if ( $('.field_number_middle input:checked').length > 0 ) {
        $('.field_number_middle input:not(:checked)').prop('disabled',true);
      } else {
        $('.field_number_middle input').prop('disabled',false);
      }

      if ( $('.field_number_right input:checked').length > 0 ) {
        $('.field_number_right input:not(:checked)').prop('disabled',true);
      } else {
        $('.field_number_right input').prop('disabled',false);
      }
    }

    if ($(this).val() == "front") {

      front_flag = true;
      back_flag = false;
      max_numbers = 2;
      /* Clear the 3rd number, if selected */
      $(".field_number_right input").prop("checked", false);

      /* Disable the 3rd number column */
      $(".field_number_right input").prop( "disabled", true );

    } else if ( $(this).val() == "back" ) {

      back_flag = true;
      front_flag = false;
      max_numbers = 2;
      /* Clear the 1st number, if selected */
      $(".field_number_left input").prop("checked", false);

      /* Disable the 1st number column */
      $(".field_number_left input").prop( "disabled", true );
    }

    /* Exact Any Special Rules */

    if ($(this).val() == "exact_any") {

      if ( $("#bet_amount_50").prop("checked") ) {
        fiddy_cent_flag = true;
        $("#bet_amount_50").prop("checked", false);
        $("#bet_amount_100").prop("checked", true);
      }

      $("#bet_amount_50").prop( "disabled", true );

      updateTicketPrice(true);

    } else {

      if (fiddy_cent_flag) {
        $(".field_bet_amount input").prop("checked", false);
        $("#bet_amount_50").prop("checked", true);
      }

      $("#bet_amount_50").prop( "disabled", false );
      $("div.actions").addClass("hol_up");

      updateTicketPrice(false);
    }

    current_number_count = $(".number_matrix_pick3 input:checked").length;
    $("#current_number_count").text( current_number_count );
    $("#max_numbers").text(max_numbers);

    if ( $(".field_bet_amount input:checked").length > 0 && (current_number_count == max_numbers || $("#number_qp:checked").length > 0 ) ) {
      $("div.actions").removeClass("hol_up");
    }

    updatePrize(true);
    updateDraws(false);
  });

  /* Pick 3: Bet Amount */
  $(".field_bet_amount input").change(function(e){
    if ($(this).val() == "50") {
      fiddy_cent_flag = true;
    } else {
      fiddy_cent_flag = false;
    }

    if ( $(".field_bet_type input:checked").length > 0 && ( current_number_count == max_numbers || $("#number_qp:checked").length > 0 ) ) {
      $("div.actions").removeClass("hol_up");
    }

    updateTicketPrice(true);
    updatePrize(true);
    updateDraws(false);
  });

  function updateTicketPrice(shouldThisFlash) {
    var newPrice = (currentgame == "pick3") ? parseFloat(base_ticket_price).toFixed(2) : parseInt(base_ticket_price);

    if (currentgame == "pick3" && $(".field_bet_amount input:checked").length > 0) {
      newPrice = $(".field_bet_amount input:checked").attr("value") / 100;

      if (pick3_both_modifier) {
        newPrice = newPrice * 2;
      }

    }

    if ( $("#plus").prop('checked') ) {
      if ( advance_play_modifier > 0 && ezmatch_modifier ) {
        /* 'EZ Match' gets added only once, not advance plays */
        newPrice = parseInt(base_ticket_price) + parseInt(plus_price);
      } else if ( advance_play_modifier > 0 ) {
        /* 'Plus' gets added to all advance plays */
        newPrice = base_ticket_price + (plus_price * advance_play_modifier);
      } else {
        newPrice = base_ticket_price + plus_price;
      }
    }

    if ( advance_play_modifier > 0 ) {
      if (currentgame == "pick3") {
        newPrice = newPrice * advance_play_modifier;
      } else {
        newPrice = newPrice + ( (advance_play_modifier - 1) * base_ticket_price);
      }
    }

    if ( multiplier_price > 0 && $("#multiplier").prop('checked') ) {

      if ( advance_play_modifier > 0 ) {
        newPrice = newPrice + ( advance_play_modifier * multiplier_price );
      } else {
        newPrice = newPrice + multiplier_price;
      }
    }

    let priceString = '';
    if ((newPrice * 100) % 100 > 0) {
      priceString = parseFloat(newPrice).toFixed(2).toLocaleString("en");
    } else {
      priceString = parseInt(newPrice).toLocaleString("en");
    }

    $("#ticket_price").text( priceString );
    $(".ticket_price_wrapper").attr('data-after', '$' + priceString);

    /* Flash ticket price when changed */
    if (shouldThisFlash) {
      //$(".price").addClass("flash_container");
      $(".price_inner").addClass("flash");
      let timeout = setTimeout( function(){
        $(".price_inner").removeClass("flash");
        $(".ticket_price_wrapper").attr('data-before', '$' + priceString);
      }, 500);
    } else {
      $(".ticket_price_wrapper").attr('data-before', '$' + priceString);
    }
  }

  function updatePrize(shouldThisFlash) {

    let prizeText = '';
    let plusPrizeText = '';

    /* Lucky for Life's prize is always "$1,000 a Day for Life" */
    if (currentgame == "luckyforlife") {
      prizeText = (lang == "en" ? "" : "¡") + "$" + parseInt(max_prize).toLocaleString("en") + (lang == "en" ? " a Day for Life!" : " por día para toda la vida!");
    } else if (currentgame == "pick3") {

      /* Pick 3 Prize updates based on bet types, bet amounts, and doubled numbers */
      let prizeCode = '';
      let betAmount = $("input[name='bet_amount']:checked").length > 0 ? $("input[name='bet_amount']:checked").val() : '500';
      let betType = $("input[name='bet_type']:checked").length > 0 ? $("input[name='bet_type']:checked").val() : 'exact';
      let userNumLeft = $(".number_matrix_left input:checked").val();
      let userNumMiddle = $(".number_matrix_middle input:checked").val();
      let userNumRight = $(".number_matrix_right input:checked").val();

      if ( ( (userNumLeft == userNumRight && userNumLeft != undefined) || (userNumLeft == userNumMiddle && userNumLeft != undefined) || (userNumMiddle == userNumRight && userNumMiddle != undefined) ) && (betType == "any" || betType == "exact_any") ) {
        pick3_double_modifier = "double";
      } else {
        pick3_double_modifier = "";
      }

      if ( betType == "exact_any" ) {
        betAmount = ((parseInt(betAmount) <= 100) ? "0" : "" ) + (betAmount / 2);
        prizeCode = betAmount + "exact";
        let prizeCodeB = betAmount + "any" + pick3_double_modifier;
        prizeText = "$" + parseInt(game_winnings['pick3'][prizeCode]).toLocaleString("en") + " (" + (lang =="en" ? "Exact" : "Exacto" ) + ") + $" + parseInt(game_winnings["pick3"][prizeCodeB]).toLocaleString("en") + " (" + (lang =="en" ? "Any" : "Cualquier" ) + ")";
      } else {
        betAmount = ((parseInt(betAmount) < 100) ? "0" : "" ) + betAmount;
        prizeCode = betAmount + betType + pick3_double_modifier;
        prizeText = "$" + parseInt(game_winnings['pick3'][prizeCode]).toLocaleString("en");
      }

    } else {
      prizeText = "$" + parseInt(max_prize).toLocaleString("en");
      if (plus_modifier) {
        plusPrizeText = "$" + plus_prize.toLocaleString("en");
      }
    }

    if (prizeText == $("#prize_amount").text()) {
      shouldThisFlash = false;
    }

    if (plus_modifier) {
      if ($("#plus_prize_inner").is(":hidden")) {
        shouldThisFlash = true;
      }
      $("#plus_prize_inner").show();
      $("#plus_prize_amount").text(plusPrizeText);
    } else {
      if ($("#plus_prize_inner").is(":visible")) {
        shouldThisFlash = true;
      }
      $("#plus_prize_inner").hide();
    }

    $("#prize_amount").text(prizeText);

    if (shouldThisFlash) {
      /* Flash ticket prize when changed */
      $(".prize_inner").addClass("flash");
      $("#prize_amount").attr('data-after', prizeText);
      $("#plus_prize_amount").attr('data-after', plusPrizeText);

      let timeout = setTimeout( function(){
        $(".prize_inner").removeClass("flash");
        $("#prize_amount").attr('data-before', prizeText);
        $("#plus_prize_amount").attr('data-before', plusPrizeText);
      }, 500);
    } else {
      $("#prize_amount").attr('data-before', prizeText);
      $("#plus_prize_amount").attr('data-before', plusPrizeText);
    }
  }

  function updateDraws(shouldThisFlash) {
    var newDraws = advance_play_modifier == 0 ? 1 : advance_play_modifier;

    $("#ticket_draws").text( newDraws );
    $("#ticket_draws").attr('data-after', newDraws);

    if (newDraws > 1) {
      $(".ticket_draw_count_plurality").show();
    } else {
      $(".ticket_draw_count_plurality").hide();
    }

    /* Flash ticket price when changed */
    if (shouldThisFlash) {
      $(".draws_inner").addClass("flash");
      let timeout = setTimeout( function(){
        $(".draws_inner").removeClass("flash");
        $("#ticket_draws").attr('data-before', newDraws);
      }, 500);
    } else {
      $("#ticket_draws").attr('data-before', newDraws);
    }
  }

  /* Toggle Plus */
  $("#plus").change(function(){
    if (this.checked && currentgame == "cash5") {
      plus_modifier = true;
      ezmatch_modifier = true;
    } else if (this.checked) {
      plus_modifier = true;
      ezmatch_modifier = false;
    } else {
      plus_modifier = false;
      ezmatch_modifier = false;
    }
    updateTicketPrice(true);
    updatePrize(true);
  });

  /* Toggle Multiplier */
  $("#multiplier").change(function(){
    if (this.checked) {
      multiplier_modifier = true;
    } else {
      multiplier_modifier = false;
    }
    updateTicketPrice(true);
    updatePrize(false);
  });

  /* Build the number matrix */
  number_count_start = (currentgame == "pick3") ? 0 : 1;
  number_count_build = (currentgame == "pick3") ? number_count : number_count + 1;

  if (currentgame == "pick3") {
    for (i = number_count_start; i < number_count_build; i++) {
      $('.number_matrix_left').append('<div class="field field_number field_number_left"><input type="checkbox" name="number_' + i + '" id="number_left_' + i + '" value="' + i + '"><label for="number_left_' + i + '">' + i + '</label></div>');
      $('.number_matrix_middle').append('<div class="field field_number field_number_middle"><input type="checkbox" name="number_' + i + '" id="number_middle_' + i + '" value="' + i + '"><label for="number_middle_' + i + '">' + i + '</label></div>');
      $('.number_matrix_right').append('<div class="field field_number field_number_right"><input type="checkbox" name="number_' + i + '" id="number_right_' + i + '" value="' + i + '"><label for="number_right_' + i + '">' + i + '</label></div>');
    }
  } else {
    for (i = number_count_start; i < number_count_build; i++) {
      $('.number_matrix').append('<div class="field field_number"><input type="checkbox" name="number_' + i + '" id="number_' + i + '" value="' + i + '"><label for="number_' + i + '">' + i + '</label></div>');
    }
  }

  /* Build the extra number matrix */
  if (extra_numbers > 0) {
    for (i = 1; i < extra_numbers+1; i++) {
      $('.extra_number_matrix').append('<div class="field field_extra_number"><input type="checkbox" name="extra_number_' + i + '" id="extra_number_' + i + '" value="' + i + '"><label for="extra_number_' + i + '">' + i + '</label></div>')
    }
  }

  /* Toggle QP */
  $("#number_qp").change(function(e){
    if (this.checked) {
      $(".field_number input").prop( "disabled", true );
      $("#current_number_count").text(max_numbers);
      $("#current_number_counter").removeClass("in_progress").addClass("complete");

      /* If all number selections are satisfied, unlock the "next" button */
      if (extra_numbers == 0 || (extra_numbers > 0 && ( $(".extra_number_matrix .field_extra_number input:checked").length > 0 || $("#extra_number_qp:checked").length > 0))) {
        if (currentgame != "pick3" || ( currentgame == "pick3" && $(".field_bet_type input:checked").length > 0 && $(".field_bet_amount input:checked").length > 0)) {
          $("div.actions").removeClass("hol_up");
        }
      }

    } else {
      if (current_number_count == max_numbers) {
        /* keep unselected numbers disabled if we're at max count */
        $(".field_number input:checked").prop( "disabled", false );
        $("#current_number_count").text(current_number_count);
      } else {
        /* enable all numbers */
        $(".field_number input").prop( "disabled", false );
        $("#current_number_count").text(current_number_count);
        $("#current_number_counter").removeClass("complete").addClass("in_progress");
        if (current_number_count == 0) { $("#current_number_counter").removeClass("in_progress"); }
        $("div.actions").addClass("hol_up");
      }

    }
  });

  /* Extra Number QP */
  $("#extra_number_qp").change(function(e){
    if (this.checked) {
      $(".field_extra_number input").prop( "disabled", true );
      $("#current_extra_number_counter").addClass("complete");

      /* If all number selections are satisfied, unlock the "next" button */
      if ( (current_number_count == max_numbers) || ($("#number_qp:checked").length > 0) ) {
        $("div.actions").removeClass("hol_up");
      }
    } else {
      /* A number was checked before tapping QP */
      if ($(".extra_number_matrix .field_extra_number input:checked").length > 0) {
        $(".extra_number_matrix .field_extra_number input:checked").prop( "disabled", false );
      } else {
        $(".extra_number_matrix .field_extra_number input").prop( "disabled", false );
        $("div.actions").addClass("hol_up");
        $("#current_extra_number_counter").removeClass("complete");
      }

    }
  });

  /* Pick 3: Keep track of the number fields  */
  $(document).on("change", ".number_matrix_pick3 .field_number input", function(){
    if (this.checked) {
      current_number_count++;
      $("#current_number_count").text(current_number_count);
      $("#current_number_counter").addClass("in_progress");

      /* If this is the third number selected AND all three numbers are the same and it's not a front/back pair bet type */
      if (!back_flag && !front_flag && current_number_count == max_numbers && ( $(".number_matrix_left .field_number input:checked").val() == $(".number_matrix_middle .field_number input:checked").val() && $(".number_matrix_middle .field_number input:checked").val() == $(".number_matrix_right .field_number input:checked").val() ) ) {
        if ($("#bet_type_any:checked").length == 0) {
          /* AND the user has not selected "Any Order" bet type, disable "Any Order" */
          $("#bet_type_any").prop( "disabled", true );
        } else {
          /* AND the user HAS selected "Any Order" bet type, change to "Exact Order" */
          $("#bet_type_any").prop( "checked", false )
          $("#bet_type_any").prop( "disabled", true );
          $("#bet_type_exact").prop( "checked", true );
          $('#pick3-any-order').modal('show');
        }

      }

      /* If all required selections are satisfied, unlock the "next" button */
      if (current_number_count == max_numbers && $(".field_bet_type input:checked").length > 0 && $(".field_bet_amount input:checked").length > 0) {
        $("#current_number_counter").removeClass("in_progress").addClass("complete");
        $("div.actions").removeClass("hol_up");
      }

      $(this).parents(".number_matrix").find(".field_number input:not(:checked)").prop( "disabled", true );
      updatePrize(true);
    } else {
      current_number_count--;
      $("#current_number_count").text(current_number_count);
      $("#current_number_counter").removeClass("complete").addClass("in_progress");
      $("#bet_type_any").prop( "disabled", false );

      if (current_number_count == 0) {
        $("#current_number_counter").removeClass("in_progress");
      }

      $(this).parents(".number_matrix").find(".field_number input").prop( "disabled", false );
      $("div.actions").addClass("hol_up");
      updatePrize(true);
    }
  });

  /* Keep track of the number field (extra numbers only allow 1 selection at a time) */
  $(document).on("change", ".number_matrix:not(.number_matrix_pick3) .field_number input", function(){
    if (this.checked) {
      current_number_count++;
      $("#current_number_count").text(current_number_count);
      $("#current_number_counter").addClass("in_progress");
      if (current_number_count == max_numbers) {
        $("#current_number_counter").removeClass("in_progress").addClass("complete");
        $(".number_matrix .field_number input:not(:checked)").prop( "disabled", true );

        /* If all number selections are satisfied, unlock the "next" button */
        if (extra_numbers == 0 || (extra_numbers > 0 && ( $(".extra_number_matrix .field_extra_number input:checked").length > 0 || $("#extra_number_qp:checked").length > 0))) {
          $("div.actions").removeClass("hol_up");
        }
      }
    } else {
      current_number_count--;
      $("#current_number_count").text(current_number_count);
      $("#current_number_counter").removeClass("complete").addClass("in_progress");
      if (current_number_count == 0) {
        $("#current_number_counter").removeClass("in_progress");
      }
      $(".number_matrix .field_number input").prop( "disabled", false );
      $("div.actions").addClass("hol_up");
    }
  });

  /* Keep track of the EXTRA number field (only 1 number can be selected) */
  $(document).on("change", ".extra_number_matrix .field_extra_number input", function(){
    if (this.checked) {
      $(".extra_number_matrix .field_extra_number input:not(:checked)").prop( "disabled", true );
      $("#current_extra_number_counter").addClass("complete");
      /* If all number selections are satisfied, unlock the "next" button */
      if ( (current_number_count == max_numbers) || ($("#number_qp:checked").length > 0) ) {
        $("div.actions").removeClass("hol_up");
      }
    } else {
      $(".extra_number_matrix .field_extra_number input").prop( "disabled", false );
      $("#current_extra_number_counter").removeClass("complete");
      $("div.actions").addClass("hol_up");
    }
  });


  /* Copy Selections to ticket */
  function buildticket() {

    $(".ticket_number").remove();

    /* Update conditional description text */
    if (plus_modifier && multiplier_modifier) {
      $(".cond_plus_multiplier").show();
    }
    if (plus_modifier) {
      $(".cond_plus").show();
    }
    if (multiplier_modifier) {
      $(".cond_multiplier").show();
    }
    if (parseInt(advance_play_modifier) > 1) {
      $(".cond_advance_play").show();
    } else {
      $(".cond_single_play").show();
    }

    /* Hide rows not applicable */
    if ( multiplier_price == 0 && currentgame != "lotto") {
      $(".ticket_multiplier").hide();
    }
    if ( plus_price == 0 ) {
      $(".ticket_plus_wrapper").hide();
    }

    /* QP/Quick Pick */
    if ( $(".field_qp input").prop("checked") ) {

      /* Clear previous selections */
      $(".field_number input").prop("checked", false);

      /* Build and randomize array of possible numbers for each column, select three random numbers, check them off each column */
      if (currentgame == "pick3") {
        let field = [];
        while(field.length < 10){
          let r = Math.floor(Math.random() * 10);
          if(field.indexOf(r) === -1) field.push(r);
        }
        let selected_left = field[Math.floor(Math.random() * field.length)];
        let selected_middle = field[Math.floor(Math.random() * field.length)];
        let selected_right = field[Math.floor(Math.random() * field.length)];

          // Can't have 3 of the same number with an "Any Order" wager
        if ($("#bet_type_any:checked").length > 0 && selected_left == selected_middle && selected_left == selected_right) {
          selected_right = (selected_right + 1) % 10;
        }

        if (!back_flag) { $(".field_number_left input[value=" + selected_left + "]").prop("checked", true); }
        $(".field_number_middle input[value=" + selected_middle + "]").prop("checked", true);
        if (!front_flag) { $(".field_number_right input[value=" + selected_right + "]").prop("checked", true); }

      } else {
        /* Build and randomize array of possible numbers, select the required count, check them off the board */
        let field = [];
        while(field.length < max_numbers){
          let r = Math.floor(Math.random() * number_count) + 1;
          if(field.indexOf(r) === -1) field.push(r);
        }
        let shuffled = field.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, number_count);
        selected = selected.sort((a,b)=>a-b);

        jQuery.each(selected, function(index, value){
          $(".field_number input[value=" + value + "]").prop("checked", true);
        });
      }

      /* Disable the unchecked numbers in case user modifies the playslip after the ticket is created */
      current_number_count = max_numbers;
      $(".number_matrix .field_number input:not(:checked)").prop( "disabled", true );
    }

    /* EXTRA QP */
    if ( $(".field_extra_qp input").prop("checked") ) {

      /* Clear previous selections */
      $(".field_extra_number input").prop("checked", false);

      /* Randomly select the extra number, check it off on the board */
      var extraselected = randomIntFromInterval(1,extra_numbers);

      /* Check off the selected input */
      $(".field_extra_number input[value=" + extraselected + "]").prop("checked", true);

      /* Disable the unchecked numbers in case user modifies the playslip after the ticket is created */
      $(".extra_number_matrix .field_extra_number input:not(:checked)").prop( "disabled", true );
    }

    if ( $(".field_qp input").prop("checked") || $(".field_extra_qp input").prop("checked")) {
      $(".ticket_qp").show();
    } else {
      $(".ticket_qp").hide();
    }


    /* Selected Numbers */

    if (extra_numbers > 0) {
      $(".field_number input:checked").each(function(){
        $(".ticket_extra_label").before('<span class="ticket_number" data-value="' + $(this).get(0).value + '">' + (parseInt($(this).get(0).value)<10 ? '0' : '') + $(this).get(0).value + '</span>');
      });
    } else if (currentgame == "pick3") {
      if (back_flag) {
        $(".ticket_bet_type").before('<span class="ticket_number" data-position="0" data-value="X">X</span>');

        $(".field_number input:checked").each(function(index){
          $(".ticket_bet_type").before('<span class="ticket_number" data-position="' + eval(index+1) + '" data-value="' + $(this).get(0).value + '">' + $(this).get(0).value + '</span>');
        });
      } else if (front_flag) {
        $(".field_number input:checked").each(function(index){
          $(".ticket_bet_type").before('<span class="ticket_number" data-position="' + index + '" data-value="' + $(this).get(0).value + '">' + $(this).get(0).value + '</span>');
        });

        $(".ticket_bet_type").before('<span class="ticket_number" data-position="2" data-value="X">X</span>');
      } else {
        $(".field_number input:checked").each( function(index) {
          $(".ticket_bet_type").before('<span class="ticket_number" data-position="' + index + '" data-value="' + $(this).get(0).value + '">' + $(this).get(0).value + '</span>');
        });
      }

    } else {
      $(".field_number input:checked").each(function(){
        $(".ticket_qp").before('<span class="ticket_number" data-value="' + $(this).get(0).value + '">' + (parseInt($(this).get(0).value)<10  ? '0' : '') + $(this).get(0).value + '</span>');
      });
    }

    if (extra_numbers > 0) {
      $(".field_extra_number input:checked").each(function(){
        $(".ticket_qp").before('<span class="ticket_number ticket_extra_number" data-value="' + $(this).get(0).value + '">' + (parseInt($(this).get(0).value)<10 ? '0' : '') + $(this).get(0).value + '</span>');
      });
    }

    /* Plus */
    if (plus_modifier) {
      $(".ticket_plus").text("YES");
    } else {
      $(".ticket_plus").text("NO");
    }

    /* Random Multiplier */
    if ((multiplier_modifier && multiplier_price > 0) || !multiplier_on_ticket || currentgame == "lotto") {
      ticket_multiplier = multiplier[Math.floor(Math.random()*multiplier.length)];

      if (multiplier_on_ticket) {
        $(".ticket_multiplier").show();
        $(".ticket_multiplier_number").text(ticket_multiplier + "X");
      } else if (multiplier_modifier && multiplier_price > 0) {
        $(".ticket_multiplier").show().text("YES");
      }
    } else if (!multiplier_on_ticket && !multiplier_modifier) {
        $(".ticket_multiplier").show().text("NO");
    } else {
      $(".ticket_multiplier").hide();
    }

    /* Ticket Price */
    $(".ticket_price").text(parseFloat($("#ticket_price").text()).toFixed(2));


    /* Advance Play / Draw Dates */
    var d = new Date();
    if (parseInt(advance_play_modifier) > 1) {
      var e = addDays(d, parseInt(advance_play_modifier-1));
      $(".ticket_draw_dates").text(formatDate(getNextDrawDate()) + "-" + formatDate(getLastDrawDate()));
    } else {
      $(".ticket_draw_dates").text(formatDate(getNextDrawDate()));
    }

    if (parseInt(advance_play_modifier) > 1 && pick3_both_modifier) {
      $(".ticket_draw_count").text(parseInt(advance_play_modifier));
      $(".ticket_draw_count_plurality").show();
    } else if ( parseInt(advance_play_modifier) == 0 && pick3_both_modifier ) {
      $(".ticket_draw_count").text(2);
      $(".ticket_draw_count_plurality").show();
    } else if ( parseInt(advance_play_modifier) > 1 ) {
      $(".ticket_draw_count").text(advance_play_modifier);
      $(".ticket_draw_count_plurality").show();
    } else {
      $(".ticket_draw_count").text("1");
      $(".ticket_draw_count_plurality").hide();
    }

    /* EZ Match */

    if (ezmatch_modifier) {
      $(".ezmatch_numbers").show();
      var drawn_numbers_plus = [];
      var matching_ezmatch_prizes = [];
      var user_numbers = [];
      var unselected_numbers = [];
      var drawn_numbers_plus = [];

      /* User's selections */
      $(".field_number input:checked").each(function(){
        user_numbers.push( $(this).attr("value") );
      });
      user_numbers = user_numbers.sort(() => 0.5 - Math.random());

      /* Unselected numbers */
      $(".field_number input:not(:checked)").each(function(){
        unselected_numbers.push( $(this).attr("value") );
      });
      unselected_numbers = unselected_numbers.sort(() => 0.5 - Math.random());

      /* Select 1 of the user's numbers */
      for (i = 0; i < 1; i++) {
        drawn_numbers_plus.push( user_numbers[i] );
      }

      /* Select random remaining numbers (4) */
      for (j = 0; j < 4; j++) {
        drawn_numbers_plus.push( unselected_numbers[j] );
      }

      /* Shuffle 'em up (on the real tickets, they are not ordered ascending) */
      drawn_numbers_plus = drawn_numbers_plus.sort(() => 0.5 - Math.random());

      /* Assign a random prize amount to each of the selected numbers */
      var ezmatch_prizes_random = ezmatch_prizes.sort(() => 0.5 - Math.random());

      for (k = 0; k < 5; k++) {
        matching_ezmatch_prizes.push( ezmatch_prizes_random[k] );
      }

      for (l = 0; l < drawn_numbers_plus.length; l++) {
        /* Set winning prize value, add plus match class to regular number on ticket */
        for (m = 0; m < user_numbers.length; m++) {
          if (drawn_numbers_plus[l] == user_numbers[m]) {
            ezmatch_drawn_prize = matching_ezmatch_prizes[l];
            $("span.ticket_number[data-value=" + drawn_numbers_plus[l] + "]").addClass("match_plus");
          }
        }

        /* Output numbers and prizes to ticket */
        $(".ezmatch_numbers").append("<p" + (ezmatch_drawn_prize == matching_ezmatch_prizes[l] ?  " class='match'" : "" ) + "><span class='num'>" + (parseInt(drawn_numbers_plus[l])<10 ? '0' : '') + drawn_numbers_plus[l] + "</span> &mdash; <span class='prz'>$" + parseInt(matching_ezmatch_prizes[l]).toLocaleString("en") + "</span></p>")
      }

    } else {
      $(".ezmatch_numbers").hide();
    }

    if (currentgame == "pick3") {
      /* Pick 3 Bet Amount (different from ticket price)*/
      let betAmount = $("input[name=bet_amount]:checked").val() / 100;
      $(".ticket_bet_amount .ticket_price").text(parseFloat(betAmount).toFixed(2));

      /* Pick 3 Bet Type */
      let myBetType = $("input[name='bet_type']:checked ~ label span").html().replace(/<br\s*\/?>/gi,' ');
      $("#ticket_bet_type").text(myBetType);

      /* Pick 3 Draw Times */
      let myDrawTime = $("input[name='draw_time']:checked ~ label span").text();
      if (myDrawTime == "BOTH") {
        myDrawTime = "MIDDAY & EVENING";
      }
      $("#ticket_draw_time").text(myDrawTime + " DRAWS");
    }

  }

  /* Back/Next Stepping Through the Game */

  $("button.start, button.next, button.prev, button.toggle").on("click", function(e){
    e.preventDefault();

    if (!$(this).hasClass("toggle")) {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("div.simulator").offset().top - 60
      }, 500, "swing", function(){ $(".sticky-wrapper").removeClass("is-sticky"); });
    }

    $(".field, .number_matrix_label").addClass("fade_me_bro");
    $(".field_advance_draws").hide();

    if ($(this).attr("data-title")) {
      $("#dashboard_title").text($(this).attr("data-title"));
    }

    if ($(this).attr("data-show")) {
      var toShowArr = $(this).attr("data-show").split(',');
      var toggleFlag = ( $(this).hasClass("toggle") ) ? true : false ;
      $(toShowArr).each(function(){
        var toShow = $("." + this);
        if (this == "ticket" && !toggleFlag) {
          buildticket();
        }
        if (this == "letsdraw" && !toggleFlag) {
          runTheDraws();
        }
        toShow.show();
        toShow.removeClass("fade_me_bro").find(".field, .number_matrix_label").removeClass("fade_me_bro");
      });
    }
    if ($(this).attr("data-hide")) {
      var toHideArr = $(this).attr("data-hide").split(',');
      $(toHideArr).each(function(){
        var toHide = $("." + this);
        toHide.hide();
      });
    }
    if ($(this).attr("data-description")) {
      $(".step_description").removeClass("active");
      var currentDescription = $("#" + $(this).attr('data-description'));
      $(".step_description").removeClass("active");
      currentDescription.addClass("active");
    }

    if ($(this).hasClass("next")) {
      $(this).parents("div.step").removeClass("active").next().addClass("active");
      $(".step_marker.active").removeClass("active").next().addClass("active");
    } else if ($(this).hasClass("prev")) {
      $(this).parents("div.step").removeClass("active").prev().addClass("active");
      $(".step_marker.active").removeClass("active").prev().addClass("active");
    } else if ($(this).hasClass("toggle")) {
      $("button.toggle").each(function(){
        $(this).toggleClass("current");
      });
      $(".field, .number_matrix_label").removeClass("fade_me_bro");
    } else if ($(this).hasClass("start")) {
      $(".step_marker").first().addClass("active");
      $("div.step").removeClass("active");
      $("#step1").addClass("active");
      $("div.actions").addClass("hol_up");
    }

    if (~$(this).attr("data-show").indexOf("field_group_draw_time")) {
      $("div.actions").addClass("hol_up");
    }

  });

  /* Reset the simulator */
  $(document).on('click','button.reset',function(e) {  e.preventDefault(); resetSimulator(); });
  function resetSimulator() {
    $("#simulator_form").trigger("reset");
    $("#simulator_form input").prop("disabled", false);
    $(".step_description").removeClass("active").first().addClass("active");
    $(".step").removeClass("active");
    $(".step_marker").remove();
    $(".field, .number_matrix_label").removeClass("fade_me_bro");
    $(".field_number, .field_extra_number").removeClass("match").removeClass("match_plus");
    $("#ball_drops").hide();
    $("#ball_drops div.balls").empty();
    $("#ball_drops_plus").hide();
    $("#ball_drops_plus div.balls").empty();
    $("#potential_winnings").empty().hide();
    $(".ticket").removeClass("drawing");
    $(".ball_drop_wrapper").removeClass("drawing");
    $("#dashboard_title").text($("button.reset").attr("data-title"));
    $("#potential_winnings").removeClass("hidey");
    configureGame();
    updateTicketPrice(true);
    updateDraws(true);
    updatePrize(false);
    fiddy_cent_flag = false;
    front_flag = false;
    back_flag = false;
    current_number_count = 0;
    max_numbers = game['max_numbers'];
    $("#current_number_count").text(current_number_count);
    $("#current_number_counter").addClass("in_progress").removeClass("complete");
    $("#max_numbers").text(max_numbers);
  }

  function runTheDraws() {
    $(".actions").addClass("hol_up"); /* Lock the action buttons (hitting Play Again is problematic with all the timers) */
    $(".ticket").addClass("drawing");
    $(".ball_drop_wrapper").addClass("drawing");
    $(".field_advance_draws").hide();
    $(".field, .number_matrix_label").removeClass("fade_me_bro");
    $(".playslip").addClass("lockdown");
    $(".field_number input").prop("disabled",false);
    $(".field_extra_number input").prop("disabled",false);

    /* Draw random numbers, and match at least 3 of the user's numbers */
    var user_numbers = [];
    var user_number_left;
    var user_number_middle;
    var user_number_right;
    var user_bet_type;
    var unselected_numbers = [];
    var unselected_number_left = []; /* Pick 3 */
    var unselected_number_middle = []; /* Pick 3 */
    var unselected_number_right = []; /* Pick 3 */
    var drawn_numbers = [];
    var drawn_extra_number;
    var drawn_numbers_plus = [];
    var matching_ezmatch_prizes = [];
    var drawn_extra_number_plus;
    var how_many_to_match = randomIntFromInterval(3, max_numbers);
    var how_many_to_match_plus = randomIntFromInterval(3, max_numbers);
    var how_many_to_match_pick3 = 3;
    var interval_time = 500;
    var plus_matches = 0;
    var extra_matches = 0;

    if (currentgame == "pick3") {
      user_bet_type = $("input[name=bet_type]:checked").val(); /* exact, any, exact_any, front, back

      /* User's selected left number */
      user_number_left   = $(".number_matrix_left .field_number input:checked").val();
      user_numbers.push( user_number_left );

      /* User's selected middle number */
      user_number_middle = $(".number_matrix_middle .field_number input:checked").val();
      user_numbers.push( user_number_middle );

      /* User's selected right number */
      user_number_right  = $(".number_matrix_right .field_number input:checked").val();
      user_numbers.push( user_number_right );

      /* Match the user's numbers regardless of bet type */
      for (i = 0; i < how_many_to_match_pick3; i++) {
        drawn_numbers.push( user_numbers[ i ] );
      }

      /* Re-order or assign random digits based on bet type so fake winning isn't so obvious */
      if (user_bet_type == "any") {
        drawn_numbers = drawn_numbers.sort(() => 0.5 - Math.random());
      } else if (user_bet_type == "front") {
        drawn_numbers[2] = randomIntFromInterval(0,9);
      } else if (user_bet_type == "back") {
        drawn_numbers[0] = randomIntFromInterval(0,9);
      }

      /* Draw all of the user's numbers (but not in precise order, and may be repeated)
      for (i = 0; i < how_many_to_match_pick3; i++) {
        drawn_numbers.push( user_numbers[ randomIntFromInterval(0,user_numbers.length - 1) ] );
      }
      */

      /* For remaining non-selected numbers, draw a random number from 0 to 10
      for (j = 0; j < (max_numbers - how_many_to_match_pick3); j++) {
        drawn_numbers.push( randomIntFromInterval(0, 9) );
      }
      */

    } else {

      /* User's selections */
      $(".field_number input:checked").each(function(){
        user_numbers.push( $(this).attr("value") );
      });

      /* Unselected numbers */
      $(".field_number input:not(:checked)").each(function(){
        unselected_numbers.push( $(this).attr("value") );
      });
      unselected_numbers = unselected_numbers.sort(() => 0.5 - Math.random());

      /* Draw some of the user's numbers */
      for (i = 0; i < how_many_to_match; i++) {
        drawn_numbers.push( user_numbers[i] );
      }

      /* Draw from the rest of the field */
      for (j = 0; j < parseInt(max_numbers - how_many_to_match); j++) {
        drawn_numbers.push( unselected_numbers[j] );
      }

      /* Sort the drawn numbers in ascending order */
      drawn_numbers = drawn_numbers.sort((a,b)=>a-b);

      /* Draw the USER'S extra ball */
      if (extra_numbers > 0) {
        drawn_extra_number = $(".extra_number_matrix .field_extra_number input:checked").attr("value");
      }

      /* If there's a plus draw (and game is not cash5 - that plus marker is used for ezmatch, done at the ticket phase), draw random numbers, match at least 1 */
      if (plus_price > 0 && currentgame != "cash5") {

        /* Reshuffle */
        user_numbers = user_numbers.sort(() => 0.5 - Math.random());
        unselected_numbers = unselected_numbers.sort(() => 0.5 - Math.random());

        /* Draw N of the user's numbers */
        for (i = 0; i < how_many_to_match_plus; i++) {
          drawn_numbers_plus.push( user_numbers[i] );
        }

        /* Draw random remaining numbers */
        for (j = 0; j < parseInt(max_numbers - how_many_to_match_plus); j++) {
          drawn_numbers_plus.push( unselected_numbers[j] );
        }

        /* Sort the drawn plus numbers in ascending order */
        drawn_numbers_plus = drawn_numbers_plus.sort((a,b)=>a-b);

        /* Draw the extra plus ball, does not have to match */
        if (extra_numbers > 0) {
          drawn_extra_number_plus = randomIntFromInterval(1,extra_numbers);
        }
      }
    }

    /*
     * REVEAL DRAWN NUMBERS
     */

    /* On short interval, reveal each drawn number and highlight it on the receipt and play slip  */
    $("#ball_drops").show();
    if (plus_price > 0 && currentgame != "cash5") {
      $("#ball_drops_plus").show();
    }
    var stupidCS101counter = 0;
    var pick3CurrentColumn;
    var intervaledReveal = ArrayPlusDelay(drawn_numbers, function(obj) {
      $("#ball_drops div.balls").append('<span class="drawn_number">' + obj + '</span>');

      /* Match on ticket */
      if (currentgame == "pick3") {
        let user_bet_type = $("input[name=bet_type]:checked").val();
        if (user_bet_type == "any" || user_bet_type == "exact_any") {
          /* Pick 3: Highlight the first matched ball if user selected an "any" bet type */
          $(".ticket_number:not(.match)").each(function(){
            if (obj == $(this).attr("data-value")) {
              $(this).addClass("match");
              return false; /* Break the loop so we don't highlight more than one match (Pick 3 is special!) */
            }
          });
        } else {
          /* Pick 3: If bet type isn't an "any" (exact, front, back), only highlight match if it's in the same position */
          if (obj == $(".ticket_number[data-position=" + stupidCS101counter + "]").attr("data-value")) {
            $(".ticket_number[data-position=" + stupidCS101counter + "]").addClass("match");
          }
        }
        stupidCS101counter++;
      } else {
        $(".ticket_number:not(.ticket_extra_number)").each(function(){
          if (obj == $(this).attr("data-value")) {
            $(this).addClass("match");
          }
        });
      }

      /* Match on playslip $(".field_number:not(.field_extra_number) input:checked").each(function(){ if (obj == $(this).attr("value")) { $(this).parent().addClass("match"); } });  */
      /* Non-matched drawn numbers on playslip $(".field_number:not(.field_extra_number) input:not(:checked)").each(function(){ if (obj == $(this).attr("value")) { $(this).parent().addClass("non_match"); } }); */
    }, interval_time, function(){

      /* Reveal extra ball */
      if (extra_numbers > 0) {

        let timeout = setTimeout(function(){
          $("#ball_drops div.balls").append('<span class="drawn_number drawn_extra_number">' + drawn_extra_number + '</span>');
          /* Match on ticket */
          $(".ticket_extra_number").each(function(){
            if (drawn_extra_number == $(this).attr("data-value")) {
              $(this).addClass("match match_extra");
            }
          });
          /* Match on playslip $(".field_extra_number input:checked").each(function(){ if (drawn_extra_number == $(this).attr("value")) { $(this).parent().addClass("match"); } });  */
          /* Non-matched drawn numbers on playslip $(".field_extra_number input:not(:checked)").each(function(){ if (drawn_extra_number == $(this).attr("value")) { $(this).parent().addClass("non_match"); } });  */
        }, interval_time);
      }

      let timeout = setTimeout(function(){
        /* Reveal plus draw numbers, highlight plus matches */
        if (plus_price > 0 && currentgame != "cash5") {

          let plus_delay = 0;
          if (!multiplier_on_ticket && multiplier_price > 0) {
            plus_delay = interval_time * 2;
          }

          let slight_delay = setTimeout(function(){
            var intervaledReveal = ArrayPlusDelay(drawn_numbers_plus, function(obj) {
              $("#ball_drops_plus div.balls").append('<span class="drawn_number">' + obj + '</span>');

              /* Match on ticket */
              $(".ticket_number").each(function(){
                if (obj == $(this).attr("data-value")) {
                  $(this).addClass("match_plus");
                }
              });

              /* Match on playslip $(".field_number:not(.field_extra_number) input:checked").each(function(){ if (obj == $(this).attr("value")) { $(this).parent().addClass("match_plus"); } });  */
              /* Non-matched drawn numbers on playslip $(".field_number:not(.field_extra_number) input:not(:checked)").each(function(){ if (obj == $(this).attr("value")) { $(this).parent().addClass("non_match"); } });  */

              plus_matches = $(".ticket_number.match_plus").length;

            }, interval_time, function(){

              /* Reveal plus extra ball, highlight plus extra match */
              if (extra_numbers > 0) {
                let timeout = setTimeout(function(){
                  $("#ball_drops_plus div.balls").append('<span class="drawn_number drawn_extra_number_plus">' + drawn_extra_number_plus + '</span>');

                  /* Match on ticket */
                  $(".ticket_extra_number").each(function(){
                    if (drawn_extra_number_plus == $(this).attr("data-value")) {
                      $(this).addClass("match match_extra match_plus");
                    }
                  });

                  /* Match on playslip $(".field_extra_number input:checked").each(function(){ if (drawn_extra_number_plus == $(this).attr("value")) { $(this).parent().addClass("match_plus"); } });  */
                  /* Non-matched drawn numbers on playslip $(".field_extra_number input:not(:checked)").each(function(){ if (drawn_extra_number_plus == $(this).attr("value")) { $(this).parent().addClass("non_match"); } });  */

                  extra_matches = $(".ticket_number.match_extra.match_plus").length;

                }, interval_time);
              }

            });
          },plus_delay);
        }

        let final_timing = interval_time;

        if (!multiplier_on_ticket && multiplier_price > 0) {

          let timeout = setTimeout(function(){

            /* Output multiplier for games that assign a multiplier during the drawing */
            $("#ball_drops div.balls").append('<span class="drawn_number drawn_number_multiplier">x' + ticket_multiplier + '</span>');

          }, final_timing);
        }

        if ( plus_prize > 0 && currentgame != "cash5" ) {
          final_timing = interval_time * (max_numbers + 2);
        }
        if (!multiplier_on_ticket && multiplier_price > 0) {
          final_timing = final_timing + interval_time;
        }

        let timeout = setTimeout(function(){
          /* Output potential winnings: matched prize + plus + multiplier */

          if (currentgame == "pick3") {
            $("#potential_winnings").show().html("<span class='trigger'></span><h3>" + (lang == "en" ? "Congrats! This is a (simulated) winning ticket.<small>This ticket has no cash value, it is only for educational purposes." : "¡Felicitaciones! Este es un boleto ganador (simulado).<small>Este boleto no tiene valor en efectivo, es solo para fines educativos.") + "</small></h3><p>" + getWinnings(currentgame,how_many_to_match,0,0) + "</p>");
          } else {
            $("#potential_winnings").show().html( lang == "en" ?
            "<span class='trigger'></span><h3>Congrats! This is a (simulated) winning ticket.<small>This ticket has no cash value, it is only for educational purposes.</small></h3><p>You matched <strong>" + how_many_to_match +  " out of " + max_numbers + "</strong> numbers" + (extra_numbers > 0 ? " and the <strong>" + extra_name + "</strong>" : "") + " and would have won <strong class='dollars'>$" + getWinnings(currentgame,how_many_to_match,(extra_numbers > 0 ? 1 : 0), (ticket_multiplier > 0 ? ticket_multiplier : null)) + "</strong>!</p>" :
          "<span class='trigger'></span><h3>¡Felicitaciones! Este es un boleto ganador (simulado).<small>Este boleto no tiene valor en efectivo, es solo para fines educativos.</small></h3><p>¡Usted acertó <strong>" + how_many_to_match +  " de " + max_numbers + "</strong> números " + (extra_numbers > 0 ? " y el <strong>" + extra_name + "</strong>" : "") + " y hubiera ganado <strong class='dollars'>$" + getWinnings(currentgame,how_many_to_match,(extra_numbers > 0 ? 1 : 0), (ticket_multiplier > 0 ? ticket_multiplier : null)) + "</strong>!</p>");
            if (plus_modifier && !ezmatch_modifier) {
                $("#potential_winnings").append(lang == "en" ?
              "<p class='plus_winnings'><strong>" + plus_name + ":</strong> You matched <strong>" + plus_matches + " out of " + max_numbers + "</strong> numbers " + (extra_matches > 0 ? " and the <strong>" + extra_name + "</strong>" : "") +  " in the <strong>" + plus_name + "</strong> drawing and would have won <strong class='dollars'>$" + getPlusWinnings(currentgame,plus_matches,(extra_matches > 0 ? 1 : 0),( currentgame == "lotto" ? ticket_multiplier : null)).toLocaleString("en")+ "</strong>.</p>" :
              "<p class='plus_winnings'><strong>" + plus_name + ":</strong> Usted acertó <strong>" + plus_matches + " de " + max_numbers + "</strong> números " + (extra_matches > 0 ? " y el <strong>" + extra_name + "</strong>" : "") +  " en el sorteo de <strong>" + plus_name + "</strong> y hubiera ganado <strong class='dollars'>$" + getPlusWinnings(currentgame,plus_matches,(extra_matches > 0 ? 1 : 0),( currentgame == "lotto" ? ticket_multiplier : null)).toLocaleString("en")+ "</strong>.</p>");
            } else if (plus_matches > 0) {
              $("#potential_winnings").append(lang == "en" ?
              "<p class='plus_winnings'><strong>" + plus_name + ":</strong> You would have matched <strong>" + plus_matches + " out of " + max_numbers + "</strong> numbers " + (extra_matches > 0 ? " and the <strong>" + extra_name + "</strong>": "") +  " in the <strong>" + plus_name + "</strong> drawing and won <strong class='dollars'>$" + getPlusWinnings(currentgame,plus_matches,(extra_matches > 0 ? 1 : 0),( currentgame == "lotto" ? ticket_multiplier : null)).toLocaleString("en") + "</strong>, <em>if</em> you had checked it on your playslip.</p>" :
            "<p class='plus_winnings'><strong>" + plus_name + ":</strong> Si hubiera marcado estos números en su boleta de juego, habría acertado <strong>" + plus_matches + " de " + max_numbers + "</strong> números " + (extra_matches > 0 ? " y el <strong>" + extra_name + "</strong>": "") +  " en el sorteo de <strong>" + plus_name + "</strong> y habría ganado <strong class='dollars'>$" + getPlusWinnings(currentgame,plus_matches,(extra_matches > 0 ? 1 : 0),( currentgame == "lotto" ? ticket_multiplier : null)).toLocaleString("en") + "</strong>.</p>");
            } else if (ezmatch_modifier) {
              if (ezmatch_drawn_prize > 0) {
                $("#potential_winnings").append(lang == "en" ?
                  "<p class='plus_winnings'><strong>EZ Match</strong>: You won <strong class='dollars'>$" + ezmatch_drawn_prize + "</strong> instantly at check-out!</p>" :
                  "<p class='plus_winnings'><strong>EZ Match</strong>: ¡Usted ganó <strong class='dollars'>$" + ezmatch_drawn_prize + "</strong> al instante al momento de pagar!</p>");
              } else {
                $("#potential_winnings").append("<p class='plus_winnings'><strong>EZ Match</strong>: You didn't win instantly this time.</p>");
              }
            }
          }

          /* Unlock the action buttons (hitting Play Again is problematic with all the timers) */
          $(".actions").removeClass("hol_up");

        }, final_timing + interval_time * 1.5);


      }, interval_time);

    });


  }

  /*
   * UTILITIES
   */

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function formatDate(date) {
    return ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1) + '/' + (date.getDate() < 10 ? '0' : '') + date.getDate() + '/' + date.getFullYear();
  }

  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function ArrayPlusDelay(array, delegate, delay, callback) {
    var i = 0

     // seed first call and store interval (to clear later)
    var interval = setInterval(function() {
      	// each loop, call passed in function
        delegate(array[i]);

          // increment, and if we're past array, clear interval, run optional callback
        if (i++ >= array.length - 1) {
          clearInterval(interval);
          if (callback) {
            callback();
          }
        }
    }, delay)

    return interval
  }

  /*
   *
   Generate Prizes Won after Simulated Drawing
   *
   */

  $(document).on('click', '#potential_winnings .trigger', function(e){
    e.preventDefault();
    $("#potential_winnings").toggleClass("hidey");
  });

  function getPlusWinnings(game,matches,extra_match,multiplier) {
    return getWinnings(String(game) + String("plus"),matches,extra_match,multiplier);
  }

  function getWinnings(whichgame,matches,extra_match,multiplier) {

    let winnings = game_winnings[whichgame];
    let prizeCode = '';
    let jackpotCode = '';

    if (whichgame == "pick3") {
      let betType = $(".field_bet_type input:checked").val();
      let betAmount =  $(".field_bet_amount input:checked").val();
      let prizeWon = "";

      let userNumLeft = $(".number_matrix_left input:checked").val();
      let userNumMiddle = $(".number_matrix_middle input:checked").val();
      let userNumRight = $(".number_matrix_right input:checked").val();

      if ( (userNumLeft == userNumRight || userNumLeft == userNumMiddle || userNumMiddle == userNumRight) && (betType == "any" || betType == "exact_any") ) {
        pick3_double_modifier = "double";
      }

      if (betType == "exact_any") {
        betAmount = ((parseInt(betAmount) <= 100) ? "0" : "" ) + (betAmount / 2);
      } else {
        betAmount = ((parseInt(betAmount) < 100) ? "0" : "" ) + betAmount;
      }

      prizeCodeExact = String(betAmount) + "exact";
      prizeCodeAny = String(betAmount) + "any" + pick3_double_modifier;
      prizeCodeFront = String(betAmount) + "front";
      prizeCodeBack = String(betAmount) + "back";

      /* Now we gotta actually make sure, based on the bet type, the user won, otherwise return NOTHING! You LOSE! Also exact_any is special. */

      let pick3prizeWon = "";
/* Usted hubiera ganado */
      if (betType == "exact_any" && ( doWeHaveAPick3Winner("exact") || doWeHaveAPick3Winner("any") ) ) {
        if ( doWeHaveAPick3Winner("exact") && doWeHaveAPick3Winner("any") ) {
          pick3prizeWon = (lang == "en" ?
          "You would have won <strong>$" + parseInt(winnings[prizeCodeExact]).toLocaleString("en") + "</strong> (Exact Order) + <strong>$" + parseInt(winnings[prizeCodeAny]).toLocaleString("en") + "</strong> (Any Order)!" :
          "¡Hubiera ganado <strong>$" + parseInt(winnings[prizeCodeExact]).toLocaleString("en") + "</strong> (Orden Exacto) + <strong>$" + parseInt(winnings[prizeCodeAny]).toLocaleString("en") + "</strong> (Cualquier Orden)!"
          );
        }
        else if ( doWeHaveAPick3Winner("exact") ) {
          pick3prizeWon = (lang == "en" ?
          "You would have won <strong>$" + parseInt(winnings[prizeCodeExact]).toLocaleString("en") + "</strong> (Exact Order)!" :
          "¡Hubiera ganado <strong>$" + parseInt(winnings[prizeCodeExact]).toLocaleString("en") + "</strong> (Orden Exacto)!");
        }
        else if ( doWeHaveAPick3Winner("any") ) {
          pick3prizeWon = (lang == "en" ?
          "You would have won <strong>$" + parseInt(winnings[prizeCodeAny]).toLocaleString("en") + "</strong> (Any Order)!" :
          "¡Hubiera ganado <strong>$" + parseInt(winnings[prizeCodeAny]).toLocaleString("en") + "</strong> (Cualquier Orden)!");
        }
      } else if (betType == "exact" && doWeHaveAPick3Winner("exact")) {
        pick3prizeWon = (lang == "en" ?
        "Your <strong>Exact Order</strong> bet would have won <strong>$" + parseInt(winnings[prizeCodeExact]).toLocaleString("en") + "!</strong>" :
        "¡Su apuesta <strong>Orden Exacto</strong> hubiera ganado <strong>$" + parseInt(winnings[prizeCodeExact]).toLocaleString("en") + "!</strong>");
      } else if (betType == "any" && doWeHaveAPick3Winner("any")) {
        pick3prizeWon = (lang == "en" ?
        "Your <strong>Any Order</strong> bet would have won <strong>$" + parseInt(winnings[prizeCodeAny]).toLocaleString("en") + "!</strong>" :
        "¡Su apuesta <strong>Cualquier Orden</strong> hubiera ganado <strong>$" + parseInt(winnings[prizeCodeAny]).toLocaleString("en") + "!</strong>");
      } else if (betType == "front" && doWeHaveAPick3Winner("front")) {
        pick3prizeWon = (lang == "en" ?
        "Your <strong>Front Pair</strong> bet would have won <strong>$" + parseInt(winnings[prizeCodeFront]).toLocaleString("en") + "!</strong>" :
        "¡Su apuesta <strong>“Front Pair” (Par adelante)</strong> hubiera ganado <strong>$" + parseInt(winnings[prizeCodeFront]).toLocaleString("en") + "!</strong>");
      } else if (betType == "back" && doWeHaveAPick3Winner("back")) {
        pick3prizeWon = (lang == "en" ?
        "Your <strong>Back Pair</strong> bet would have won <strong>$" + parseInt(winnings[prizeCodeBack]).toLocaleString("en") + "!</strong>" :
        "¡Su apuesta <strong>“Back Pair” (Par al final)</strong> hubiera ganado <strong>$" + parseInt(winnings[prizeCodeBack]).toLocaleString("en") + "!</strong>");
      } else {
        pick3prizeWon = (lang == "en" ?
        "Your " + $("input[name=bet_type]:checked ~ label span").html().replace(/<br\s*\/?>/gi,' ') + " bet didn't hit this time. Try again!" :
        "No acertó su apuesta " + $("input[name=bet_type]:checked ~ label span").html().replace(/<br\s*\/?>/gi,' ') + " esta vez. ¡Vuelva a intentarlo!");
      }

      return pick3prizeWon;

    } else {

      if (extra_match != null) {
        prizeCode = String(matches) + String(extra_match);
      } else {
        prizeCode = String(matches);
      }

      let prizeWon = winnings[prizeCode];

      /* Get the jackpot code so we don't apply multiplier to it if the user matched the jackpot */
      $.each( winnings, function( key, value ) {
        if (value == game['max_prize'] || (plus_modifier && value == game['plus_prize'])) {
          jackpotCode = key;
          return false;
        }
      });

      /* If there's a multiplier for this game, and the user selected it, and they did not win the jackpot, include the prize multiplier */
      if (multiplier != null && prizeCode != jackpotCode) {
        if (whichgame == "powerball" && prizeCode == '50') {
          /* If powerball, and user hit all 5 but not the powerball, the max multiplier is 2 */
          prizeWon = parseInt(prizeWon * 2).toLocaleString("en") + " ($" + parseInt(prizeWon).toLocaleString("en") + " x 2 Max)";
        } else {
          prizeWon = parseInt(prizeWon * multiplier).toLocaleString("en") + " ($" + parseInt(prizeWon).toLocaleString("en") + " x " + multiplier + ")";
        }
      /* If there's NOT a multiplier for this game, there's not a PLUS drawing, and it IS the jackpot */
      } else if (prizeCode == jackpotCode && whichgame != "lottoplus" && whichgame != "powerballplus") {
        if (current_game_jackpot > 0 && current_game_jackpot != null) {
          prizeWon = parseInt(current_game_jackpot).toLocaleString("en");
        } else {
          /* Special handling for Lucky for Life jackpot */
          if (whichgame == "luckyforlife") {
            prizeWon = (lang == "en" ? "" : "¡") + parseInt(prizeWon).toLocaleString("en") + (lang == "en" ? " a Day for Life!" : " por día para toda la vida!") ;
          } else {
            prizeWon = parseInt(game['max_prize']).toLocaleString("en");
          }
        }
      /* All other prizes, just format the prize */
      } else {
        prizeWon = parseInt(prizeWon).toLocaleString("en");
      }

      return prizeWon;
    }

  }

  function doWeHaveAPick3Winner(betType) {
    let userNumbers = [$(".number_matrix_left .field_number input:checked").val(), $(".number_matrix_middle .field_number input:checked").val(), $(".number_matrix_right .field_number input:checked").val()]
    let drawnNumbers = [$(".drawn_number:nth-child(1)").text(), $(".drawn_number:nth-child(2)").text(), $(".drawn_number:nth-child(3)").text()];
    let returnval = false;

    if (betType == "exact" && userNumbers[0] == drawnNumbers[0] && userNumbers[1] == drawnNumbers[1] && userNumbers[2] == drawnNumbers[2]) {
      returnval = true;
    }
    if (betType == "any") {
      /* If the left number matches any drawn numbers, mark the drawn number off (set it to 99) and continue */
      /* If the middle number matches any remaining drawn numbers, mark the drawn number off (set it to 99) and continue */
      /* If the right number matches the last drawn number, mark the drawn number off (set it to 99) and complete the loop. Check for 99/99/99 */

      jQuery.each(drawnNumbers, function(index, value) {
        if (userNumbers[0] == value) {
          drawnNumbers[index] = 99;
          return false;
        }
      });
      jQuery.each(drawnNumbers, function(index, value) {
        if (userNumbers[1] == value) {
          drawnNumbers[index] = 99;
          return false;
        }
      });
      jQuery.each(drawnNumbers, function(index, value) {
        if (userNumbers[2] == value) {
          drawnNumbers[index] = 99;
          return false;
        }
      });

      if (drawnNumbers[0] == 99 && drawnNumbers[1] == 99 && drawnNumbers[2] == 99) {
        returnval = true;
      } else {
        returnval = false;
      }
    }
    if (betType == "front" && userNumbers[0] == drawnNumbers[0] && userNumbers[1] == drawnNumbers[1]) {
      returnval =  true;
    }
    if (betType == "back" && userNumbers[1] == drawnNumbers[1] && userNumbers[2] == drawnNumbers[2]) {
      returnval =  true;
    }

    return returnval;
  }

  function getNextDrawDate() {
    let drawDays = game['draw_days'];
    let today = new Date();
    let nextDraw = new Date();
    let oneWeekOut = new Date();
    nextDraw.setDate(today.getDate() + 9999);
    oneWeekOut.setDate(today.getDate() + 7);

    /* Loop through the next week, stopping on the first draw date and returning the matching date */
    for (var d = today; d <= oneWeekOut; d.setDate(d.getDate() + 1)) {
      let day = d.getDay();
      if (drawDays.includes(day)) {
        nextDraw = d;
        break;
      }
    }

    /*
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    console.log("Next: " + nextDraw.toLocaleDateString("en-US", options));
    */
    return nextDraw;
  }

  function getLastDrawDate() {
    let numDraws = (advance_play_modifier > 0) ? advance_play_modifier : 1;
    let drawCounter = 0;
    let drawDays = game['draw_days'];
    let today = new Date();
    let lastDraw = new Date();
    lastDraw.setDate(today.getDate() + 9999);
    let oneYearOut = new Date();
    oneYearOut.setDate(today.getDate() + 365);

    /* Loop through the next year (max) counting matching draw days, stopping on the last draw and returning the last matching date */
    for (var d = today; d <= oneYearOut; d.setDate(d.getDate() + 1)) {
      let day = d.getDay();
      if (drawDays.includes(day)) {
        drawCounter++;
        if (drawCounter == numDraws) {
          lastDraw = d;
          break;
        }
      }
    }

    /*
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    console.log("Last: " + lastDraw.toLocaleDateString("en-US", options));
    */
    return lastDraw;
  }
}