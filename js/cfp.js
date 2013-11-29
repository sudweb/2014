(function(d, w){
var mailtoForm = new mailto(document.getElementById('mailto-form'));
var formId = mailtoForm.form.getAttribute('data-spreadsheet-id');

mailtoForm.onSubmit = function(m){
  console.log(m);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://docs.google.com/forms/d/'+formId+'/formResponse', true);
  xhr.responseType = 'json';
  xhr.send(m.getData());
};

w['Cfp'] = mailtoForm;
})(document, window);