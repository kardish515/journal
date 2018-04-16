import './styles.css';
import { Entry } from './journal.js';

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    $("#result").text(entry.getTeaser());
  });
});
