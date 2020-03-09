  $(function(){
    $('.button-btn').on('click', function(e){
        let name = $('#name').val();
        let careerJob = $('#careers option:selected').text();
        let quote = $('#catchphrase').val();
        $('#highlight').text(name);
        $('#career').text(careerJob);
        $('#saying').text(quote);
        e.preventDefault();
    });
  });

