// Developer Gautam Kumar
// Scripts for quiz page
//trigering every check inputs
function checked(value_checked,input_from){
    let value = value_checked;
    let question_no = input_from;
    window.location.href += "#"+input_from.parent.id
}